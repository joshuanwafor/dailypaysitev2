import { Container, Stack } from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import { marked } from 'marked';

export default function PolicyPage() {
  return (
    <Stack>
      <PageHeaderSection
        title="Privacy Policy"
        badge="LEGAL"
        caption="Privacy policy for DailyPay by Alerts"
      />
      <Container size={'lg'}>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Container>
    </Stack>
  );
}

const content = `
# Privacy Notice

This Privacy Notice for DailyPay by Alerts ("**we**," "**us**," or "**our**"), describes how and why we might access, collect, store, use, and/or share ("**process**") your personal information when you use our services ("**Services**"), including when you:

- Visit our website at https://alerts.africa
- Download and use our mobile application (DailyPay), or any other application of ours that links to this Privacy Notice
- Use DailyPay, a fintech platform providing daily wage access, virtual accounts, wallet services, and financial management for the working class African population
- Engage with us in other related ways, including any sales, marketing, or events

**Questions or concerns?** Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@alerts.africa.

## Summary of Key Points

_**This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our [table of contents](#table-of-contents) below to find the section you are looking for.**_

- **What personal information do we process?** When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. [Learn more about personal information you disclose to us](#what-information-do-we-collect)

- **Do we process any sensitive personal information?** Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example financial records, salary information, bank account details, BVN, NIN, and employment verification data. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. [Learn more about sensitive information we process](#what-information-do-we-collect)

- **Do we collect any information from third parties?** We may collect limited information from third-party services when you connect your account to these services or import data from other platforms.

- **How do we process your information?** We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. [Learn more about how we process your information](#how-do-we-process-your-information)

- **In what situations and with which parties do we share personal information?** We may share information in specific situations and with specific third parties. [Learn more about when and with whom we share your personal information](#when-and-with-whom-do-we-share-your-personal-information)

- **How do we keep your information safe?** We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. [Learn more about how we keep your information safe](#how-do-we-keep-your-information-safe)

- **What are your rights?** Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. [Learn more about your privacy rights](#what-are-your-privacy-rights)

- **How do you exercise your rights?** The easiest way to exercise your rights is by submitting a data subject access request through our website, or by contacting us directly. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.

## Table of Contents

1. [What Information Do We Collect?](#what-information-do-we-collect)
2. [How Do We Process Your Information?](#how-do-we-process-your-information)
3. [When and With Whom Do We Share Your Personal Information?](#when-and-with-whom-do-we-share-your-personal-information)
4. [Do We Use Cookies and Other Tracking Technologies?](#do-we-use-cookies-and-other-tracking-technologies)
5. [How Do We Handle Your Social Logins?](#how-do-we-handle-your-social-logins)
6. [How Long Do We Keep Your Information?](#how-long-do-we-keep-your-information)
7. [How Do We Keep Your Information Safe?](#how-do-we-keep-your-information-safe)
8. [What Are Your Privacy Rights?](#what-are-your-privacy-rights)
9. [Controls for Do-Not-Track Features](#controls-for-do-not-track-features)
10. [Do We Make Updates to This Notice?](#do-we-make-updates-to-this-notice)
11. [How Can You Contact Us About This Notice?](#how-can-you-contact-us-about-this-notice)
12. [How Can You Review, Update, or Delete the Data We Collect From You?](#how-can-you-review-update-or-delete-the-data-we-collect-from-you)

## 1. What Information Do We Collect?<a id="what-information-do-we-collect"></a>

**Personal information you disclose to us**

_In Short: We collect personal information that you provide to us._

We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

**Personal Information Provided by You.** The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:

- names
- phone numbers
- email addresses
- residential addresses
- usernames
- passwords
- contact preferences
- contact or authentication data
- bank account details
- BVN (Bank Verification Number)
- NIN (National Identification Number)
- employment information (employer details, role, salary, duration)
- HR contact information
- government identification documents

**Sensitive Information.** When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:

- financial records (salary information, bank statements, transaction history)
- employment verification data (employer details, salary confirmation, HR approvals)
- government identification documents (passport, driver's license, national ID)
- BVN and NIN verification data
- daily wage earnings and claims data
- virtual account and wallet transaction records

**Payment Data.** We may collect data necessary to process your daily wage claims and transfers, such as your bank account details, virtual account information, and transaction records. All payment data is stored and processed by our secure payment processors and banking partners. You may find their privacy notice link(s) here: 
- Paystack: https://paystack.com/privacy
- Flutterwave: https://flutterwave.com/privacy
- Interswitch: https://interswitchgroup.com/privacy

**Social Media Login Data.** We may provide you with the option to register with us using your existing social media account details, like your Facebook, Google, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.

**Application Data.** If you use our web, desktop, or mobile application(s), we also may collect the following information if you choose to provide us with access or permission:

- Geolocation Information. We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
- Mobile and Desktop Device Data. We automatically collect device information (such as your mobile device ID, model, and manufacturer or desktop operating system and version), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.
- Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
- Data Import Information. If you choose to link your existing bank account for employment verification, we collect the information you choose to provide for income verification purposes.

This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.

**Information automatically collected**

_In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services._

We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

Like many businesses, we also collect information through cookies and similar technologies.

The information we collect includes:

- Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
- Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
- Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.

**Financial Data**

We collect and process financial and employment data when you use our DailyPay platform. This includes:
- Daily wage earnings records
- Salary information and employment verification
- Bank account transaction history (for verification purposes)
- Virtual account and wallet balances
- Transfer and transaction records
- Employment status and HR approval data
- KYC verification documents and status
- Daily wage claim history

## 2. How Do We Process Your Information?<a id="how-do-we-process-your-information"></a>

_In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent._

We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

- To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.
- To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service, including daily wage access, virtual account management, wallet services, transfer functionality, and financial management tools.
- To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
- To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
- To fulfill and manage your subscriptions. We may process your information to fulfill and manage your subscriptions, payments, renewals, and feature access.
- To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.
- To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.
- To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.
- To post testimonials. We post testimonials on our Services that may contain personal information.
- To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
- To evaluate and improve our Services, products, marketing, and your experience. We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
- To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.
- To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
- To generate financial insights and analytics. We may process your daily wage earnings, transaction data, and financial patterns to provide you with insights into your financial management and spending habits.
- To facilitate employment verification and KYC processes. We may process your employment information, bank statements, and identification documents to verify your eligibility for daily wage access and comply with regulatory requirements.
- To manage HR approvals and employer communications. We may process your employment details to facilitate communication with your HR department or employer for approval of daily wage services.

## 3. When and With Whom Do We Share Your Personal Information?<a id="when-and-with-whom-do-we-share-your-personal-information"></a>

_In Short: We may share information in specific situations described in this section and/or with the following third parties._

Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work.

The third parties we may share personal information with are as follows:

- Allow Users to Connect to Their Third-Party Accounts
  - Google account
  - Microsoft account
  - Banking institutions for employment verification
- Payment Processing and Banking
  - Paystack
  - Flutterwave
  - Interswitch
  - Nigerian banks for virtual accounts
- Cloud Data Storage
  - Amazon Web Services (AWS)
  - Microsoft Azure
  - Google Cloud Platform
- Analytics
  - Google Analytics
  - Mixpanel
  - Amplitude

We also may need to share your personal information in the following situations:

- Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
- When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). We use certain Google Maps Platform APIs to retrieve certain information when you make location-specific requests. This includes location data and other similar information. A full list of what we use information for can be found in this section and in the previous section titled "HOW DO WE PROCESS YOUR INFORMATION?" Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. This data helps provide accurate location services for your business. We obtain and store on your device ("cache") your location for 30 days. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.
- Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions that may enhance your use of our DailyPay platform.
- Employers and HR Departments. With your consent and as part of the daily wage approval process, we may share your employment information with your employer's HR department or relevant personnel to verify your employment status and salary information.
- Banking Partners. We may share your information with our banking partners to facilitate virtual account creation, transfers, and other financial services.

## 4. Do We Use Cookies and Other Tracking Technologies?<a id="do-we-use-cookies-and-other-tracking-technologies"></a>

_In Short: We may use cookies and other tracking technologies to collect and store your information._

We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.

We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to analyze usage patterns (depending on your communication preferences).

Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice available on our website.

**Google Analytics and Other Analytics Services**

We may share your information with Google Analytics and other analytics providers to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit [Google Analytics Opt-Out](https://tools.google.com/dlpage/gaoptout). You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. For more information on the privacy practices of Google, please visit the [Google Privacy & Terms page](https://policies.google.com/privacy).

## 5. How Do We Handle Your Social Logins?<a id="how-do-we-handle-your-social-logins"></a>

**In Short:** If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.

Our Services offer you the ability to register and log in using your third-party social media account details (like your Google or Microsoft logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, profile picture, and other information you choose to make public on such a social media platform.

We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.

## 6. How Long Do We Keep Your Information?<a id="how-long-do-we-keep-your-information"></a>

**In Short:** We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.

We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period of time in which users have an active account with us.

For financial data such as daily wage transactions, salary information, employment verification records, and KYC documents, we retain this information for at least seven (7) years to comply with various financial, employment, and regulatory requirements. You may request earlier deletion of certain information where not restricted by legal requirements.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.

## 7. How Do We Keep Your Information Safe?<a id="how-do-we-keep-your-information-safe"></a>

**In Short:** We aim to protect your personal information through a system of organizational and technical security measures.

We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. These measures include:

- Encryption of data at rest and in transit
- Regular security assessments and penetration testing
- Multi-factor authentication for administrative access
- Regular security updates and patches
- Employee security training and access controls
- Physical security measures for our servers and offices
- Secure data backups with encryption
- Intrusion detection systems
- Security incident response plan

However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment and take steps to protect your own devices and credentials.

## 8. What Are Your Privacy Rights?<a id="what-are-your-privacy-rights"></a>

**In Short:** Depending on your location, you may have various rights regarding your personal information.

**Withdrawing your consent:** If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

**Opting out of marketing and promotional communications:** You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.

**Account Information**

If you would at any time like to review or change the information in your account or terminate your account, you can:

- Log in to your account settings and update your user account information
- Contact us using the contact information provided

Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. Financial data required for legal and regulatory purposes, including daily wage records and employment verification data, may be retained for the required statutory periods even after account closure.

If you have questions or comments about your privacy rights, you may email us at support@alerts.africa.

## 9. Controls for Do-Not-Track Features<a id="controls-for-do-not-track-features"></a>

Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.

## 10. Do We Make Updates to This Notice?<a id="do-we-make-updates-to-this-notice"></a>

**In Short:** Yes, we will update this notice as necessary to stay compliant with relevant laws.

We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.

## 11. How Can You Contact Us About This Notice?<a id="how-can-you-contact-us-about-this-notice"></a>

If you have questions or comments about this notice, you may email us at privacy@alerts.africa or contact us by post at:

DailyPay by Alerts  
Lagos, Nigeria

## 12. How Can You Review, Update, or Delete the Data We Collect From You?<a id="how-can-you-review-update-or-delete-the-data-we-collect-from-you"></a>

You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information, request the transfer of your data to another entity, or object to certain processing activities.

These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please submit a request by:

- Visiting our website at: https://alerts.africa
- Emailing us at: privacy@alerts.africa
- Contacting us through our mobile application

We will respond to your request within 30 days.`;
