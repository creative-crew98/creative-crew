'use client'
import LegalLayout from './Legallayout'

const sections = [
    {
        id: 'information-we-collect',
        title: '1. Information We Collect',
        content: (
            <>
                <p>Because the NCF Funnel involves landing pages, lead capture forms, CRM integration, and appointment booking, we may collect the following types of information:</p>
                <p><strong>Information you provide directly</strong></p>
                <ul>
                    <li>Name, email address, and phone number</li>
                    <li>Business name and details submitted through lead capture forms</li>
                    <li>Messages, inquiries, or communications sent to us</li>
                    <li>Appointment/booking details (date, time, service requested)</li>
                    <li>Payment and billing information (processed via third-party payment providers)</li>
                </ul>
                <p><strong>Information collected automatically</strong></p>
                <ul>
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited, time spent on pages, and referral source</li>
                    <li>Cookies and similar tracking technologies</li>
                </ul>
                <p><strong>Information from automation & communication channels</strong></p>
                <ul>
                    <li>WhatsApp and email interactions processed through our automation systems</li>
                    <li>CRM records generated as part of your customer journey through the funnel</li>
                </ul>
            </>
        ),
    },
    {
        id: 'how-we-use-it',
        title: '2. How We Use Your Information',
        content: (
            <ul>
                <li>Operate, maintain, and improve the NCF Funnel and related services</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send follow-ups, appointment reminders, and confirmations via WhatsApp, email, or SMS</li>
                <li>Process bookings and manage your customer journey through our CRM</li>
                <li>Analyze website and funnel performance</li>
                <li>Send marketing communications where you've consented, with an option to opt out anytime</li>
                <li>Comply with legal obligations and enforce our agreements</li>
            </ul>
        ),
    },
    {
        id: 'legal-basis',
        title: '3. Legal Basis for Processing',
        content: (
            <>
                <p>Where applicable law requires, we process your personal data based on one or more of the following:</p>
                <ul>
                    <li>Your consent (e.g., submitting a lead form or opting into WhatsApp/email communications)</li>
                    <li>The necessity of processing to perform a contract with you (e.g., booking an appointment)</li>
                    <li>Our legitimate business interests (e.g., improving our funnel and services)</li>
                    <li>Compliance with a legal obligation</li>
                </ul>
            </>
        ),
    },
    {
        id: 'sharing',
        title: '4. How We Share Your Information',
        content: (
            <>
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul>
                    <li><strong>Service providers</strong> — CRM platforms, WhatsApp Business API and email automation providers, appointment scheduling tools, hosting providers, and analytics providers</li>
                    <li><strong>Business partners</strong>, only where necessary to deliver a requested service</li>
                    <li><strong>Legal authorities</strong>, where required by law, regulation, or legal process</li>
                    <li><strong>Successors</strong>, in the event of a merger, acquisition, or sale of business assets</li>
                </ul>
                <p>All third-party service providers are required to handle your data securely and only for the purposes we authorize.</p>
            </>
        ),
    },
    {
        id: 'retention',
        title: '5. Data Retention',
        content: (
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, including maintaining your CRM record, complying with legal obligations, resolving disputes, and enforcing our agreements. You may request deletion of your data as described in Section 8.</p>
        ),
    },
    {
        id: 'cookies',
        title: '6. Cookies and Tracking Technologies',
        content: (
            <>
                <p>Our website and landing pages may use cookies and similar technologies to remember your preferences, understand how visitors interact with our funnel, and measure the effectiveness of our marketing and analytics.</p>
                <p>You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features, including lead forms and booking tools.</p>
            </>
        ),
    },
    {
        id: 'security',
        title: '7. Data Security',
        content: (
            <p>We implement reasonable administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        ),
    },
    {
        id: 'your-rights',
        title: '8. Your Rights',
        content: (
            <>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent to marketing communications at any time</li>
                    <li>Object to or restrict certain processing of your data</li>
                    <li>Request a copy of your data in a portable format</li>
                </ul>
                <p>To exercise these rights, contact us using the details in Section 11.</p>
            </>
        ),
    },
    {
        id: 'third-party',
        title: '9. Third-Party Links and Integrations',
        content: (
            <p>Our funnel and website may contain links to, or integrations with, third-party platforms (e.g., WhatsApp, email providers, payment processors, social media). We are not responsible for the privacy practices of these third parties. We encourage you to review their respective privacy policies.</p>
        ),
    },
    {
        id: 'children',
        title: "10. Children's Privacy",
        content: (
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it.</p>
        ),
    },
    {
        id: 'contact',
        title: '11. Contact Us',
        content: (
            <>
                <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                <p>
                    <strong>Creative Crew</strong><br />
                    Email: <a href="mailto:crewcreative98@gmail.com">crewcreative98@gmail.com</a><br />
                    Phone: <a href="tel:+919971702329">+91 9971702329</a>
                </p>
            </>
        ),
    },
    {
        id: 'changes',
        title: '12. Changes to This Policy',
        content: (
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes are posted constitutes acceptance of the revised policy.</p>
        ),
    },
]

export default function PrivacyPolicy() {
    return (
        <LegalLayout
            eyebrow="Legal"
            title="Privacy Policy"
            lastUpdated="[Insert Date]"
            sections={sections}
        />
    )
}