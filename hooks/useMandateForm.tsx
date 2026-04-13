import { dailypayResource } from "@/config/sdk";
import { DailyPayJobStep4ApproveMandateEmployerTypeEnum } from "@/src/sdk/catalog";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useMandateForm = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeclineLoading, setIsDeclineLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [declineReason, setDeclineReason] = useState("");
  const searchParams = useSearchParams();

  // Extract URL parameters
  const token = searchParams.get("token") || "";
  const id = searchParams.get("id") || "";
  const email = searchParams.get("email") || "";
  const data = searchParams.get("data") || "";
  const category = searchParams.get("category") || "";

  // Debug logging
  useEffect(() => {
    console.log("URL Parameters:", { token, id, email, data, category });
  }, [token, id, email, data, category]);

  // Decode and parse the data parameter
  const [parsedData, setParsedData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      try {
        const decodedData = atob(data);
        console.log("Decoded data:", decodedData);

        // Parse the key=value format instead of JSON
        const parsed: any = {};
        const pairs = decodedData.split(", ");

        pairs.forEach((pair) => {
          const [key, ...valueParts] = pair.split("=");
          if (key && valueParts.length > 0) {
            let value = valueParts.join("="); // Rejoin in case value contains '='
            value = value.trim();

            // Fix corrupted currency symbols
            value = value.replace(/â¦/g, "₦");
            value = value.replace(/â/g, "₦");
            value = value.replace(/₦¦/g, "₦");
            value = value.replace(/₦â¦/g, "₦");
            value = value.replace(/₦¦/g, "₦");
            value = value.replace(/¦/g, "");

            // Clean up any extra spaces around the currency symbol
            value = value.replace(/₦\s+/g, "₦ ");
            value = value.replace(/\s+₦/g, " ₦");

            parsed[key.trim()] = value;
          }
        });

        console.log("Parsed data:", parsed);
        setParsedData(parsed);

        // Update form data with parsed information
        setFormData((prev) => {
          // Helper function to clean and format currency values
          const formatCurrency = (value: string) => {
            if (!value) return "";
            // Remove all non-numeric characters except commas and dots
            const numericValue = value.replace(/[^0-9,.]/g, "");
            return `₦${numericValue}`;
          };

          return {
            ...prev,
            employeeName: parsed.employeeName || prev.employeeName,
            monthlySalary: parsed.monthlySalary
              ? formatCurrency(parsed.monthlySalary)
              : prev.monthlySalary,
            approvedMonthlySalary: parsed.monthlySalary
              ? formatCurrency(parsed.monthlySalary)
              : prev.monthlySalary,
            takeHomePay: parsed.takeHomePay
              ? formatCurrency(parsed.takeHomePay)
              : prev.takeHomePay,
            role: parsed.jobRole || parsed.jobTitle || prev.role,
            employer: parsed.employer || prev.employer,
            employerAddress: parsed.employerAddress || prev.employerAddress,
            duration: parsed.duration || prev.duration,
          };
        });
      } catch (error) {
        console.error("Error parsing data parameter:", error);
        setError("Invalid data parameter in URL");
      }
    }
  }, [data]);

  async function approveDailyPayAccess(comment?: string) {
    if (!token || !id || !email) {
      setError("Missing required parameters: token, id, or email");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await dailypayResource.approveMandateRequest({
        encryptedEmail: email,
        id,
        token,
        comment: comment || "",
        companySize: hrInfo.companySize,
        contactPhone: hrInfo.contactPhone,
        employerAddress: hrInfo.employerAddress,
        employerName: hrInfo.employerName,
        employerType: hrInfo.employerType,
        hrEmail: hrInfo.hrEmail,
        hrFirstName: hrInfo.hrFirstName,
        hrJobTitle: hrInfo.hrJobTitle,
        hrLastName: hrInfo.hrLastName,
        industry: hrInfo.industry,
        employerRCNumber: hrInfo.employerRCNumber,
        employerWebsite: hrInfo.employerWebsite,
      });

      if (response.data?.success) {
        setIsApproved(true);
        setShowSuccessModal(true);
      } else {
        setError(response.data?.message || "Approval failed");
      }
    } catch (error: any) {
      console.error("Error approving mandate:", error);
      setError(
        error.response?.data?.message || "An error occurred during approval",
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function declineDailyPayAccess(reason: string) {
    if (!token || !id || !email) {
      setError("Missing required parameters: token, id, or email");
      return;
    }

    if (!reason.trim()) {
      setError("Please provide a reason for declining the request");
      return;
    }

    setIsDeclineLoading(true);
    setError(null);

    try {
      const response = await dailypayResource.declineMandateRequest({
        encryptedEmail: email,
        id,
        token,
        declineReason: reason.trim(),
      });

      if (response.data?.success) {
        setIsDeclined(true);
        setShowDeclineModal(false);
        setShowSuccessModal(true);
      } else {
        setError(response.data?.message || "Decline request failed");
      }
    } catch (error: any) {
      console.error("Error declining mandate:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred while declining the request",
      );
    } finally {
      setIsDeclineLoading(false);
    }
  }

  const [formData, setFormData] = useState({
    employeeName: "",
    monthlySalary: "",
    takeHomePay: "",
    role: "",
    employer: "",
    employerAddress: "",
    duration: "",
    hrEmail: "",
    hrPhone: "",
  });

  const [hrInfo, setHrInfo] = useState({
    companySize: "",
    contactPhone: "",
    employerAddress: "",
    employerName: "",
    employerType: DailyPayJobStep4ApproveMandateEmployerTypeEnum.Government,
    hrEmail: "",
    hrFirstName: "",
    hrJobTitle: "",
    hrLastName: "",
    industry: "",
    employerRCNumber: "",
    employerWebsite: "",
  });

  const [approvalData, setApprovalData] = useState({
    salaryPaidBy3rd: false,
    employeeCurrentlyWorks: false,
    salaryToDailyPayAccount: false,
    notifyDailyPayFirst: false,
    acceptRepresentation: false,
    copyOnTermination: false,
  });

  const [additionalComment, setAdditionalComment] = useState("");

  const handleApprovalChange = (field: string, value: boolean) => {
    setApprovalData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApprove = () => {
    // Check if all required approvals are given
    const allApproved = Object.values(approvalData).every((value) => value);

    if (!allApproved) {
      alert("Please confirm all required approvals before proceeding.");
      return;
    }

    // Check if required HR information is provided
    const requiredHrFields = [
      hrInfo.employerName,
      hrInfo.employerAddress,
      hrInfo.industry,
      hrInfo.companySize,
      hrInfo.hrFirstName,
      hrInfo.hrLastName,
      hrInfo.hrJobTitle,
      hrInfo.hrEmail,
      hrInfo.contactPhone,
    ];

    const allHrFieldsFilled = requiredHrFields.every(
      (field) => field.trim() !== "",
    );

    if (!allHrFieldsFilled) {
      alert(
        "Please fill in all required HR information fields before proceeding.",
      );
      return;
    }

    approveDailyPayAccess(additionalComment);
  };

  const handleDecline = () => {
    setShowDeclineModal(true);
  };

  const handleConfirmDecline = () => {
    declineDailyPayAccess(declineReason);
  };

  return {
    isApproved,
    isDeclined,
    showSuccessModal,
    showDeclineModal,
    isLoading,
    isDeclineLoading,
    approvalData,
    setApprovalData,
    hrInfo,
    setHrInfo,
    additionalComment,
    setAdditionalComment,
    handleApprovalChange,
    handleApprove,
    handleDecline,
    handleConfirmDecline,
    setShowSuccessModal,
    setShowDeclineModal,
    error,
    setError,
    declineReason,
    setDeclineReason,
    formData,
    setFormData,
    token,
    id,
    email,
    data,
    category,
    parsedData,
  };
};
