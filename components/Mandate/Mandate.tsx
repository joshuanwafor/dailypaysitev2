"use client";

import { Suspense } from "react";
import {
  IconCheck,
  IconCircleCheck,
  IconInfoCircle,
  IconMail,
  IconWallet,
  IconX,
  IconShield,
} from "@tabler/icons-react";
import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Modal,
  rem,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Timeline,
  TimelineItem,
  Title,
} from "@mantine/core";

import Link from "next/link";
import { useMandateForm } from "@/hooks/useMandateForm";

function HrApprovalContent() {
  const {
    isApproved,
    isDeclined,
    showSuccessModal,
    showDeclineModal,
    isLoading,
    isDeclineLoading,
    approvalData,
    hrInfo,
    setHrInfo,
    additionalComment,
    setAdditionalComment,
    handleApprovalChange,
    handleApprove,
    handleConfirmDecline,
    setShowSuccessModal,
    setShowDeclineModal,
    error,
    declineReason,
    setDeclineReason,
    formData,
    token,
    id,
    email,
    parsedData,
    data,
  } = useMandateForm();
  // Show error if URL parameters are missing
  if (error) {
    return (
      <Container size="lg" py={80}>
        <Alert
          title="Error"
          color="red"
          variant="light"
          icon={<IconInfoCircle size={16} />}
        >
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
          This approval link is missing required parameters. Please ensure you
          have a valid approval link.
          <br />
          <Text size="sm" mt="xs">
            Missing: {!token ? "token " : ""}
            {!id ? "id " : ""}
            {!email ? "email" : ""}
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
        <ThemeIcon size={80} radius="xl" color={isDeclined ? "red" : "green"}>
          {isDeclined ? <IconX size={40} /> : <IconCircleCheck size={40} />}
        </ThemeIcon>
        <Title order={2} ta="center" c={isDeclined ? "red" : "green"}>
          {isDeclined ? "Request Declined" : "Approval Successful!"}
        </Title>
        <Text ta="center" size="lg" c="gray.7">
          {isDeclined
            ? `The DailyPay access request for ${formData.employeeName} has been declined.`
            : `${formData.employeeName} has been approved for DailyPay access. They will receive a notification and can start earning daily wages immediately.`}
        </Text>
        <Button
          size="lg"
          onClick={() => setShowSuccessModal(false)}
          leftSection={
            isDeclined ? <IconX size={20} /> : <IconCheck size={20} />
          }
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
          Declining this request will prevent the employee from accessing
          DailyPay services. Please provide a clear reason for the decline.
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
            {isDeclineLoading ? "Declining..." : "Decline Request"}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );

  return (
    <>
      {/* <PageHeaderSection
        title="HR Approval"
        caption="Employee DailyPay Request Approval"
        badge="HR Approval"
      /> */}
      <div className="border-b-[#E0E2E7] border-b px-4 py-4 flex justify-between">
        <Link href="/" className="shrink-0">
          <img
            src="/images/logo-brand.png"
            alt="DailyPay"
            className="h-14 w-auto object-contain"
          />
        </Link>
        <div className="flex gap-5 items-center">
          <div className="md:flex hidden gap-1 items-center text-[#0D542B] font-medium">
            <IconShield size={20} color="#0D542B" />
            Secure & Encrypted
          </div>
          <Button
            variant="outline"
            radius={50}
            size="lg"
            // color="white"
            // className="border-[#1F1F1F33] bg-red-500"
            style={{
              borderColor: "#1F1F1F33",
              fontSize: "16px",
              fontColor: "#1F1F1F",
              fontWeight: "medium",
            }}
          >
            Contact support
          </Button>
        </div>
      </div>

      <Container size="xl" py={80}>
        {/* Debug Information - Remove in production */}
        {/* {process.env.NODE_ENV === "development" && (
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
        )} */}

        {/* Introduction */}
        <Stack align="start" gap="lg" mb={40}>
          <Text
            size="xl"
            // tt="uppercase"
            fw={600}
            c="#00636D"
            style={{
              fontSize: "38px",
            }}
          >
            Employer Mandate Approval Request
          </Text>
          <Title ta="start" size={18} fw={400} c="#0b4650">
            An employee from your organization has requested access to DailyPay
            services. As the authorized representative of your organisation,
            please review the details below and make a decision on this request.
            <Text component="span" fw={600} c="#00636D">
              {" "}
              <Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Learn more about Dailypay
              </Link>
            </Text>
          </Title>
          <Alert
            // title="Important Information"
            color="#973C00"
            bg="#FFFBEB"
            variant="light"
            style={{
              width: "100%",
              borderColor: "#FEF3C6",
              borderWidth: "1.21px",
            }}
            // icon={<IconInfoCircle size={16} />}
          >
            <div className="flex gap-4 items-center text-[#973C00]">
              <div>
                <img
                  src="/images/alert-circle.svg"
                  alt="DailyPay"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <h4 className="text-lg font-medium">Important Information</h4>
                <p className="text-[15px]">
                  This approval will allow the employee to receive their salary
                  through DailyPay, access early wage withdrawal features, and
                  manage their earnings more flexibly. Review all information
                  carefully before making your decision.
                </p>
              </div>
            </div>
          </Alert>
        </Stack>

        <Grid gutter="xl" align="stretch">
          {/* Employee Information */}
          <GridCol span={{ base: 12, md: 5 }}>
            <Card
              shadow="sm"
              padding="xl"
              radius="md"
              withBorder
              h="100%"
              style={{
                padding: "20px 0px",
              }}
            >
              <Stack gap="lg">
                <Group px="md">
                  <div>
                    <img
                      src="/images/user-icon.svg"
                      alt="DailyPay"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <Title order={3} size="h4" fw={500}>
                      Employee Information
                    </Title>
                  </div>
                </Group>

                <Divider />

                <Stack gap="md" px="md">
                  <p className="mb-4 text-[#1E1E1ECC]">
                    Kindly review employee information
                  </p>
                  <Group>
                    <div>
                      <Text size="15px" fw={400} c="#1E1E1ECC">
                        Employee full name
                      </Text>
                      <Text size="lg" c="#1E1E1E">
                        {formData.employeeName}
                      </Text>
                    </div>
                  </Group>

                  <Group>
                    <div>
                      <Text size="15px" fw={400} c="#1E1E1ECC">
                        Job Title
                      </Text>
                      <Text size="lg" c="#1E1E1E">
                        {formData.role}
                      </Text>
                    </div>
                  </Group>

                  <Group>
                    <div>
                      <Text size="15px" fw={400} c="#1E1E1ECC">
                        Employer
                      </Text>
                      <Text size="lg" c="#1E1E1E">
                        {formData.employer}
                      </Text>
                    </div>
                  </Group>

                  <Group>
                    <div>
                      <Text size="15px" fw={400} c="#1E1E1ECC">
                        Employer Address
                      </Text>
                      <Text size="lg" c="#1E1E1E">
                        {formData.employerAddress}
                      </Text>
                    </div>
                  </Group>

                  <Group>
                    <div>
                      <Text size="15px" fw={400} c="#1E1E1ECC">
                        Monthly Salary
                      </Text>
                      <Text size="lg" c="#1E1E1E">
                        {formData.monthlySalary}
                      </Text>
                    </div>
                  </Group>

                  <Group>
                    <div>
                      <Text size="15px" fw={400} c="#1E1E1ECC">
                        Take Home Pay
                      </Text>
                      <Text size="lg" fw={600} c="#00636D">
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
            <Card
              shadow="sm"
              radius="md"
              withBorder
              h="100%"
              style={{
                padding: "20px 0px",
              }}
            >
              <Stack gap="lg">
                <Group px="md">
                  <div>
                    <img
                      src="/images/user-icon-2.svg"
                      alt="DailyPay"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <Title order={3} size="h4" fw={500}>
                      Please take action by confirming each item
                    </Title>
                  </div>
                </Group>

                <Divider />

                <Stack gap="md" px="md">
                  <p className="mb-4 text-[#1E1E1ECC]">
                    By approving, you confirm that you have the authority to
                    make this decision on behalf of your organisation
                  </p>
                  <Checkbox
                    label="Confirm that salaries are usually paid by the 3rd of next month latest"
                    fw={600}
                    checked={approvalData.salaryPaidBy3rd}
                    onChange={(event) =>
                      handleApprovalChange(
                        "salaryPaidBy3rd",
                        event.currentTarget.checked,
                      )
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that this employee currently works in the organisation"
                    fw={600}
                    checked={approvalData.employeeCurrentlyWorks}
                    onChange={(event) =>
                      handleApprovalChange(
                        "employeeCurrentlyWorks",
                        event.currentTarget.checked,
                      )
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that employee salaries would be paid into the dedicated DailyPay virtual accounts going forward"
                    fw={600}
                    checked={approvalData.salaryToDailyPayAccount}
                    onChange={(event) =>
                      handleApprovalChange(
                        "salaryToDailyPayAccount",
                        event.currentTarget.checked,
                      )
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Confirm that DailyPay will be notified first if the employee wants to change the salary account subsequently"
                    fw={600}
                    checked={approvalData.notifyDailyPayFirst}
                    onChange={(event) =>
                      handleApprovalChange(
                        "notifyDailyPayFirst",
                        event.currentTarget.checked,
                      )
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Accept that DailyPay becomes the representative of the employee"
                    fw={600}
                    checked={approvalData.acceptRepresentation}
                    onChange={(event) =>
                      handleApprovalChange(
                        "acceptRepresentation",
                        event.currentTarget.checked,
                      )
                    }
                    size="md"
                  />

                  <Checkbox
                    label="Agree to copy DailyPay in emails when employee is being fired, fined, or anything affecting financial performance"
                    fw={600}
                    checked={approvalData.copyOnTermination}
                    onChange={(event) =>
                      handleApprovalChange(
                        "copyOnTermination",
                        event.currentTarget.checked,
                      )
                    }
                    size="md"
                  />
                </Stack>

                <Stack gap="md" px="md">
                  <Textarea
                    placeholder="Write additional note"
                    rows={3}
                    value={additionalComment}
                    onChange={(event) =>
                      setAdditionalComment(event.currentTarget.value)
                    }
                    radius={10}
                  />
                </Stack>
              </Stack>
            </Card>
          </GridCol>
        </Grid>

        {/* HR Information Form */}
        <Box mt={40}>
          <Card
            shadow="sm"
            radius="md"
            withBorder
            style={{
              padding: "20px 0px",
            }}
          >
            <Stack gap="lg">
              <Group px="md">
                <img
                  src="/images/user-icon.svg"
                  alt="DailyPay"
                  className="h-6 w-auto object-contain"
                />
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
              <Group px="md">
                <Alert
                  color="#973C00"
                  bg="#FFFBEB"
                  variant="light"
                  style={{
                    width: "100%",
                    borderColor: "#FEF3C6",
                    borderWidth: "1.21px",
                  }}
                >
                  <div className="flex gap-4 items-center text-[#973C00]">
                    <div>
                      <img
                        src="/images/alert-circle.svg"
                        alt="DailyPay"
                        className="h-14 w-auto object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h4 className="text-lg font-medium">
                        Important Information
                      </h4>
                      <p className="text-[15px]">
                        To complete the approval process, please provide the
                        following additional information about your organization
                        and HR contact details.
                      </p>
                    </div>
                  </div>
                </Alert>
              </Group>

              <Grid gutter="lg" px="md">
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
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          employerName: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="Company Address"
                      placeholder="Enter company address"
                      value={hrInfo.employerAddress}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          employerAddress: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="Company Website"
                      placeholder="https://example.com"
                      value={hrInfo.employerWebsite}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          employerWebsite: event.currentTarget.value,
                        }))
                      }
                    />

                    <TextInput
                      label="RC Number (if applicable)"
                      placeholder="Enter RC number"
                      value={hrInfo.employerRCNumber}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          employerRCNumber: event.currentTarget.value,
                        }))
                      }
                    />

                    <TextInput
                      label="Industry"
                      placeholder="e.g., Technology, Healthcare, Finance"
                      value={hrInfo.industry}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          industry: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="Company Size"
                      placeholder="e.g., 50-100 employees"
                      value={hrInfo.companySize}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          companySize: event.currentTarget.value,
                        }))
                      }
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
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          hrFirstName: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="HR Last Name"
                      placeholder="Enter last name"
                      value={hrInfo.hrLastName}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          hrLastName: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="HR Job Title"
                      placeholder="e.g., HR Manager, HR Director"
                      value={hrInfo.hrJobTitle}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          hrJobTitle: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="HR Email"
                      type="email"
                      placeholder="hr@company.com"
                      value={hrInfo.hrEmail}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          hrEmail: event.currentTarget.value,
                        }))
                      }
                      required
                    />

                    <TextInput
                      label="Contact Phone"
                      placeholder="+234 123 456 7890"
                      value={hrInfo.contactPhone}
                      onChange={(event) =>
                        setHrInfo((prev) => ({
                          ...prev,
                          contactPhone: event.currentTarget.value,
                        }))
                      }
                      required
                    />
                  </Stack>
                </GridCol>
              </Grid>
            </Stack>
            <Group justify="center" pt="md" px="md" mt="16px">
              <Button
                size="xl"
                color="#00636D"
                fw={500}
                radius={50}
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
                style={{
                  fontSize: "16px",
                  minWidth: "260px",
                }}
              >
                {isLoading ? "Approving..." : "Approve Request"}
              </Button>
            </Group>
          </Card>
        </Box>

        {/* Process Timeline */}
        <Box mt={80}>
          <Title ta="center" size={rem(28)} fw={400} c="#0b4650" mb={40}>
            What Happens Next?
          </Title>

          <Timeline
            active={isApproved ? 3 : isDeclined ? 0 : 1}
            bulletSize={24}
            lineWidth={2}
          >
            <TimelineItem bullet={<IconCheck size={12} />} title="HR Approval">
              <Text size="sm" c="gray.6" mt={4}>
                HR reviews and approves the employee's DailyPay request
              </Text>
            </TimelineItem>

            <TimelineItem
              bullet={<IconMail size={12} />}
              title="Employee Notification"
            >
              <Text size="sm" c="gray.6" mt={4}>
                Employee receives email and in-app notification of approval
              </Text>
            </TimelineItem>

            <TimelineItem
              bullet={<IconWallet size={12} />}
              title="DailyPay Activation"
            >
              <Text size="sm" c="gray.6" mt={4}>
                Employee can start earning and claiming daily wages immediately
              </Text>
            </TimelineItem>

            <TimelineItem
              bullet={<IconCircleCheck size={12} />}
              title="Daily Earnings"
            >
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

export default function Mandate() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HrApprovalContent />
    </Suspense>
  );
}
