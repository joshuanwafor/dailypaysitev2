'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  IconBriefcase,
  IconBuilding,
  IconCalendarTime,
  IconCheck,
  IconCircleCheck,
  IconCurrency,
  IconInfoCircle,
  IconMail,
  IconMapPin,
  IconUser,
  IconWallet,
  
  IconX,
} from '@tabler/icons-react';
import {
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Modal,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Timeline,
  TimelineItem,
  Title,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import { dailypayResource } from '@/config/sdk';
import { DailyPayJobStep4ApproveMandateEmployerTypeEnum } from '@/src/sdk/catalog/api';

function HrApprovalContent() {
  const [isApproved, setIsApproved] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeclineLoading, setIsDeclineLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [declineReason, setDeclineReason] = useState('');
  const searchParams = useSearchParams();

  // Extract URL parameters
  const token = searchParams.get('token') || '';
  const id = searchParams.get('id') || '';
  const email = searchParams.get('email') || '';
  const data = searchParams.get('data') || '';
  const category = searchParams.get('category') || '';

  // Debug logging
  useEffect(() => {
    console.log('URL Parameters:', { token, id, email, data, category });
  }, [token, id, email, data, category]);

  // Decode and parse the data parameter
  const [parsedData, setParsedData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      try {
        const decodedData = atob(data);
        console.log('Decoded data:', decodedData);

        // Parse the key=value format instead of JSON
        const parsed: any = {};
        const pairs = decodedData.split(', ');

        pairs.forEach((pair) => {
          const [key, ...valueParts] = pair.split('=');
          if (key && valueParts.length > 0) {
            let value = valueParts.join('='); // Rejoin in case value contains '='
            value = value.trim();

            // Fix corrupted currency symbols
            value = value.replace(/â¦/g, '₦');
            value = value.replace(/â/g, '₦');
            value = value.replace(/₦¦/g, '₦');
            value = value.replace(/₦â¦/g, '₦');
            value = value.replace(/₦¦/g, '₦');
            value = value.replace(/¦/g, '');

            // Clean up any extra spaces around the currency symbol
            value = value.replace(/₦\s+/g, '₦ ');
            value = value.replace(/\s+₦/g, ' ₦');

            parsed[key.trim()] = value;
          }
        });

        console.log('Parsed data:', parsed);
        setParsedData(parsed);

        // Update form data with parsed information
        setFormData((prev) => {
          // Helper function to clean and format currency values
          const formatCurrency = (value: string) => {
            if (!value) return '';
            // Remove all non-numeric characters except commas and dots
            const numericValue = value.replace(/[^0-9,.]/g, '');
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
            takeHomePay: parsed.takeHomePay ? formatCurrency(parsed.takeHomePay) : prev.takeHomePay,
            role: parsed.jobRole || parsed.jobTitle || prev.role,
            employer: parsed.employer || prev.employer,
            employerAddress: parsed.employerAddress || prev.employerAddress,
            duration: parsed.duration || prev.duration,
          };
        });
      } catch (error) {
        console.error('Error parsing data parameter:', error);
        setError('Invalid data parameter in URL');
      }
    }
  }, [data]);

  async function approveDailyPayAccess(comment?: string) {
    if (!token || !id || !email) {
      setError('Missing required parameters: token, id, or email');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await dailypayResource.approveMandateRequest({
        encryptedEmail: email,
        id: id,
        token: token,
        comment: comment || '',
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
        setError(response.data?.message || 'Approval failed');
      }
    } catch (error: any) {
      console.error('Error approving mandate:', error);
      setError(error.response?.data?.message || 'An error occurred during approval');
    } finally {
      setIsLoading(false);
    }
  }

  async function declineDailyPayAccess(reason: string) {
    if (!token || !id || !email) {
      setError('Missing required parameters: token, id, or email');
      return;
    }

    if (!reason.trim()) {
      setError('Please provide a reason for declining the request');
      return;
    }

    setIsDeclineLoading(true);
    setError(null);

    try {
      const response = await dailypayResource.declineMandateRequest({
        encryptedEmail: email,
        id: id,
        token: token,
        declineReason: reason.trim(),
      });

      if (response.data?.success) {
        setIsDeclined(true);
        setShowDeclineModal(false);
        setShowSuccessModal(true);
      } else {
        setError(response.data?.message || 'Decline request failed');
      }
    } catch (error: any) {
      console.error('Error declining mandate:', error);
      setError(error.response?.data?.message || 'An error occurred while declining the request');
    } finally {
      setIsDeclineLoading(false);
    }
  }

  const [formData, setFormData] = useState({
    employeeName: '',
    monthlySalary: '',
    takeHomePay: '',
    role: '',
    employer: '',
    employerAddress: '',
    duration: '',
    hrEmail: '',
    hrPhone: '',
  });

  const [hrInfo, setHrInfo] = useState({
    companySize: '',
    contactPhone: '',
    employerAddress: '',
    employerName: '',
    employerType: DailyPayJobStep4ApproveMandateEmployerTypeEnum.Government,
    hrEmail: '',
    hrFirstName: '',
    hrJobTitle: '',
    hrLastName: '',
    industry: '',
    employerRCNumber: '',
    employerWebsite: '',
  });

  const [approvalData, setApprovalData] = useState({
    salaryPaidBy3rd: false,
    employeeCurrentlyWorks: false,
    salaryToDailyPayAccount: false,
    notifyDailyPayFirst: false,
    acceptRepresentation: false,
    copyOnTermination: false,
  });

  const [additionalComment, setAdditionalComment] = useState('');

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
      alert('Please confirm all required approvals before proceeding.');
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

    const allHrFieldsFilled = requiredHrFields.every((field) => field.trim() !== '');

    if (!allHrFieldsFilled) {
      alert('Please fill in all required HR information fields before proceeding.');
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

  // Show error if URL parameters are missing
  if (error) {
    return (
      <Container size="lg" py={80}>
        <Alert title="Error" color="red" variant="light" icon={<IconInfoCircle size={16} />}>
          {error}
        </Alert>
      </Container>
    );
  }

  // Show error if required parameters are missing
  if (!token || !id || !email) {
    return (
      <Container size="lg" py={80}>
        <Alert
          title="Missing Required Parameters"
          color="red"
          variant="light"
          icon={<IconInfoCircle size={16} />}
        >
          This approval link is missing required parameters. Please ensure you have a valid approval
          link.
          <br />
          <Text size="sm" mt="xs">
            Missing: {!token ? 'token ' : ''}
            {!id ? 'id ' : ''}
            {!email ? 'email' : ''}
          </Text>
        </Alert>
      </Container>
    );
  }

  // Show loading if parsing data
  if (data && !parsedData) {
    return (
      <Container size="lg" py={80}>
        <Stack align="center" gap="lg">
          <Text>Loading employee information...</Text>
        </Stack>
      </Container>
    );
  }

  const SuccessModal = () => (
    <Modal
      opened={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
      size="md"
      centered
      withCloseButton={false}
    >
      <Stack align="center" gap="lg" py={40}>
        <ThemeIcon size={80} radius="xl" color={isDeclined ? 'red' : 'green'}>
          {isDeclined ? <IconX size={40} /> : <IconCircleCheck size={40} />}
        </ThemeIcon>
        <Title order={2} ta="center" c={isDeclined ? 'red' : 'green'}>
          {isDeclined ? 'Request Declined' : 'Approval Successful!'}
        </Title>
        <Text ta="center" size="lg" c="gray.7">
          {isDeclined
            ? `The DailyPay access request for ${formData.employeeName} has been declined.`
            : `${formData.employeeName} has been approved for DailyPay access. They will receive a notification and can start earning daily wages immediately.`}
        </Text>
        <Button
          size="lg"
          onClick={() => setShowSuccessModal(false)}
          leftSection={isDeclined ? <IconX size={20} /> : <IconCheck size={20} />}
        >
          Done
        </Button>
      </Stack>
    </Modal>
  );

  const DeclineModal = () => (
    <Modal
      opened={showDeclineModal}
      onClose={() => setShowDeclineModal(false)}
      size="md"
      centered
      title="Decline DailyPay Request"
    >
      <Stack gap="lg">
        <Alert
          title="Important Notice"
          color="red"
          variant="light"
          icon={<IconInfoCircle size={16} />}
        >
          Declining this request will prevent the employee from accessing DailyPay services. Please
          provide a clear reason for the decline.
        </Alert>

        <Text size="sm" fw={500}>
          Reason for Decline *
        </Text>
        <Textarea
          placeholder="Please provide a detailed reason for declining this DailyPay request..."
          rows={4}
          value={declineReason}
          onChange={(event) => setDeclineReason(event.currentTarget.value)}
          required
        />

        <Group justify="flex-end" gap="md">
          <Button
            variant="outline"
            onClick={() => setShowDeclineModal(false)}
            disabled={isDeclineLoading}
          >
            Cancel
          </Button>
          <Button
            color="red"
            onClick={handleConfirmDecline}
            disabled={!declineReason.trim() || isDeclineLoading}
            leftSection={<IconX size={16} />}
          >
            {isDeclineLoading ? 'Declining...' : 'Decline Request'}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );

  return (
    <>
      <PageHeaderSection
        title="HR Approval"
        caption="Employee DailyPay Request Approval"
        badge="HR Approval"
      />

      <Container size="lg" py={80}>
        {/* Debug Information - Remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <Alert title="Debug Information" color="blue" variant="light" mb="lg">
            <Text size="sm">
              <strong>Token:</strong> {token.substring(0, 20)}...
              <br />
              <strong>ID:</strong> {id.substring(0, 20)}...
              <br />
              <strong>Email:</strong> {email.substring(0, 20)}...
              <br />
              <strong>Category:</strong> {category}
              <br />
              <strong>Data:</strong> {data.substring(0, 50)}...
            </Text>
          </Alert>
        )}

        {/* Introduction */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Employee DailyPay Request
          </Text>
          <Title ta="center" size={rem(32)} fw={400} c="#0b4650" maw={600}>
            Review and Approve
            <Text component="span" fw={600} c="#329aae">
              {' '}
              DailyPay Access
            </Text>
          </Title>
          <Text ta="center" size="lg" c="gray.7" maw={550} lh={1.6} fw={300}>
            Please review the employee information below and confirm the required approvals to
            enable DailyPay access.
          </Text>
          <Divider w={60} size="sm" color="#329aae" />
        </Stack>

        <Grid gutter="xl">
          {/* Employee Information */}
          <GridCol span={{ base: 12, md: 5 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
              <Stack gap="lg">
                <Group>
                  <ThemeIcon size={50} radius="xl" color="blue">
                    <IconUser size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">
                      Employee Information
                    </Title>
                    <Text size="sm" c="gray.6">
                      DailyPay Request Details
                    </Text>
                  </div>
                </Group>

                <Divider />

                <Stack gap="md">
                  <Group>
                    <IconUser size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Employee Name
                      </Text>
                      <Text size="lg">{formData.employeeName}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconBriefcase size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Role
                      </Text>
                      <Text size="lg">{formData.role}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconBuilding size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Employer
                      </Text>
                      <Text size="lg">{formData.employer}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconMapPin size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Employer Address
                      </Text>
                      <Text size="lg">{formData.employerAddress}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconCalendarTime size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Duration
                      </Text>
                      <Text size="lg">{formData.duration}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconCurrency size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Monthly Salary
                      </Text>
                      <Text size="lg">{formData.monthlySalary}</Text>
                    </div>
                  </Group>

                  <Group>
                    <IconWallet size={20} color="#329aae" />
                    <div>
                      <Text size="sm" fw={500}>
                        Take Home Pay
                      </Text>
                      <Text size="lg" fw={600} c="green">
                        {formData.takeHomePay}
                      </Text>
                    </div>
                  </Group>
                </Stack>
              </Stack>
            </Card>
          </GridCol>

          {/* Approval Form */}
          <GridCol span={{ base: 12, md: 7 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
              <Stack gap="lg">
                <Group>
                  <ThemeIcon size={50} radius="xl" color="green">
                    <IconCheck size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">
                      Required Approvals
                    </Title>
                    <Text size="sm" c="gray.6">
                      Please confirm the following
                    </Text>
                  </div>
                </Group>

                <Divider />

                <Alert
                  title="Important Information"
                  color="blue"
                  variant="light"
                  icon={<IconInfoCircle size={16} />}
                >
                  By approving this request, you confirm that the employee's salary will be paid
                  into their DailyPay virtual account going forward.
                </Alert>

                <Stack gap="md">
                  <Checkbox
                    label="Confirm that salaries are usually paid by the 3rd of next month latest"
                    checked={approvalData.salaryPaidBy3rd}
                    onChange={(event) =>
                      handleApprovalChange('salaryPaidBy3rd', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that this employee currently works in the organisation"
                    checked={approvalData.employeeCurrentlyWorks}
                    onChange={(event) =>
                      handleApprovalChange('employeeCurrentlyWorks', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that employee salaries would be paid into the dedicated DailyPay virtual accounts going forward"
                    checked={approvalData.salaryToDailyPayAccount}
                    onChange={(event) =>
                      handleApprovalChange('salaryToDailyPayAccount', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that DailyPay will be notified first if the employee wants to change the salary account subsequently"
                    checked={approvalData.notifyDailyPayFirst}
                    onChange={(event) =>
                      handleApprovalChange('notifyDailyPayFirst', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Accept that DailyPay becomes the representative of the employee"
                    checked={approvalData.acceptRepresentation}
                    onChange={(event) =>
                      handleApprovalChange('acceptRepresentation', event.currentTarget.checked)
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Agree to copy DailyPay in emails when employee is being fired, fined, or anything affecting financial performance"
                    checked={approvalData.copyOnTermination}
                    onChange={(event) =>
                      handleApprovalChange('copyOnTermination', event.currentTarget.checked)
                    }
                    size="md"
                  />
                </Stack>

                <Divider />

                <Stack gap="md">
                  <Text size="sm" fw={500}>
                    Additional Comments (Optional)
                  </Text>
                  <Textarea
                    placeholder="Any additional comments or special instructions..."
                    rows={3}
                    value={additionalComment}
                    onChange={(event) => setAdditionalComment(event.currentTarget.value)}
                  />
                </Stack>

                <Group justify="space-between" pt="md">
                  <Button variant="outline" color="gray" leftSection={<IconMail size={16} />}>
                    Contact Support
                  </Button>

                  <Group gap="md">
                    <Button
                      variant="outline"
                      color="red"
                      leftSection={<IconX size={16} />}
                      onClick={handleDecline}
                      disabled={isLoading || isDeclineLoading}
                    >
                      Decline Request
                    </Button>

                    <Button
                      size="lg"
                      color="green"
                      leftSection={<IconCheck size={20} />}
                      onClick={handleApprove}
                      disabled={
                        !Object.values(approvalData).every((value) => value) ||
                        !hrInfo.employerName.trim() ||
                        !hrInfo.employerAddress.trim() ||
                        !hrInfo.industry.trim() ||
                        !hrInfo.companySize.trim() ||
                        !hrInfo.hrFirstName.trim() ||
                        !hrInfo.hrLastName.trim() ||
                        !hrInfo.hrJobTitle.trim() ||
                        !hrInfo.hrEmail.trim() ||
                        !hrInfo.contactPhone.trim() ||
                        isLoading ||
                        isDeclineLoading
                      }
                    >
                      {isLoading ? 'Approving...' : 'Approve DailyPay Access'}
                    </Button>
                  </Group>
                </Group>
              </Stack>
            </Card>
          </GridCol>
        </Grid>

        {/* HR Information Form */}
        <Box mt={40}>
          <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Stack gap="lg">
              <Group>
                <ThemeIcon size={50} radius="xl" color="blue">
                  <IconUser size={25} />
                </ThemeIcon>
                <div>
                  <Title order={3} size="h4">
                    HR Information
                  </Title>
                  <Text size="sm" c="gray.6">
                    Please provide additional company and HR details
                  </Text>
                </div>
              </Group>

              <Divider />

              <Alert
                title="Required Information"
                color="blue"
                variant="light"
                icon={<IconInfoCircle size={16} />}
              >
                To complete the approval process, please provide the following additional information about your organization and HR contact details.
              </Alert>

              <Grid gutter="lg">
                {/* Company Information */}
                <GridCol span={{ base: 12, md: 6 }}>
                  <Stack gap="md">
                    <Title order={4} size="h5">
                      Company Information
                    </Title>
                    
                    <TextInput
                      label="Company Name"
                      placeholder="Enter company name"
                      value={hrInfo.employerName}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, employerName: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="Company Address"
                      placeholder="Enter company address"
                      value={hrInfo.employerAddress}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, employerAddress: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="Company Website"
                      placeholder="https://example.com"
                      value={hrInfo.employerWebsite}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, employerWebsite: event.currentTarget.value }))}
                    />

                    <TextInput
                      label="RC Number (if applicable)"
                      placeholder="Enter RC number"
                      value={hrInfo.employerRCNumber}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, employerRCNumber: event.currentTarget.value }))}
                    />

                    <TextInput
                      label="Industry"
                      placeholder="e.g., Technology, Healthcare, Finance"
                      value={hrInfo.industry}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, industry: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="Company Size"
                      placeholder="e.g., 50-100 employees"
                      value={hrInfo.companySize}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, companySize: event.currentTarget.value }))}
                      required
                    />
                  </Stack>
                </GridCol>

                {/* HR Contact Information */}
                <GridCol span={{ base: 12, md: 6 }}>
                  <Stack gap="md">
                    <Title order={4} size="h5">
                      HR Contact Information
                    </Title>
                    
                    <TextInput
                      label="HR First Name"
                      placeholder="Enter first name"
                      value={hrInfo.hrFirstName}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, hrFirstName: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="HR Last Name"
                      placeholder="Enter last name"
                      value={hrInfo.hrLastName}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, hrLastName: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="HR Job Title"
                      placeholder="e.g., HR Manager, HR Director"
                      value={hrInfo.hrJobTitle}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, hrJobTitle: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="HR Email"
                      type="email"
                      placeholder="hr@company.com"
                      value={hrInfo.hrEmail}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, hrEmail: event.currentTarget.value }))}
                      required
                    />

                    <TextInput
                      label="Contact Phone"
                      placeholder="+234 123 456 7890"
                      value={hrInfo.contactPhone}
                      onChange={(event) => setHrInfo(prev => ({ ...prev, contactPhone: event.currentTarget.value }))}
                      required
                    />
                  </Stack>
                </GridCol>
              </Grid>
            </Stack>
          </Card>
        </Box>

        {/* Process Timeline */}
        <Box mt={80}>
          <Title ta="center" size={rem(28)} fw={400} c="#0b4650" mb={40}>
            What Happens Next?
          </Title>

          <Timeline active={isApproved ? 3 : isDeclined ? 0 : 1} bulletSize={24} lineWidth={2}>
            <TimelineItem bullet={<IconCheck size={12} />} title="HR Approval">
              <Text size="sm" c="gray.6" mt={4}>
                HR reviews and approves the employee's DailyPay request
              </Text>
            </TimelineItem>

            <TimelineItem bullet={<IconMail size={12} />} title="Employee Notification">
              <Text size="sm" c="gray.6" mt={4}>
                Employee receives email and in-app notification of approval
              </Text>
            </TimelineItem>

            <TimelineItem bullet={<IconWallet size={12} />} title="DailyPay Activation">
              <Text size="sm" c="gray.6" mt={4}>
                Employee can start earning and claiming daily wages immediately
              </Text>
            </TimelineItem>

            <TimelineItem bullet={<IconCircleCheck size={12} />} title="Daily Earnings">
              <Text size="sm" c="gray.6" mt={4}>
                Employee receives daily notifications and can claim earned wages
              </Text>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>

      <SuccessModal />
      <DeclineModal />
    </>
  );
}

function LoadingFallback() {
  return (
    <Container size="lg" py={80}>
      <Stack align="center" gap="lg">
        <Text>Loading...</Text>
      </Stack>
    </Container>
  );
}

export default function HrApprovalPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HrApprovalContent />
    </Suspense>
  );
}
