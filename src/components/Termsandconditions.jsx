'use client'
import LegalLayout from './Legallayout'

const sections = [
    {
        id: 'about',
        title: '1. About Our Services',
        content: (
            <>
                <p>Creative Crew provides the NCF Funnel — a sales funnel system that may include, depending on the package selected:</p>
                <ul>
                    <li>High-converting landing pages</li>
                    <li>Lead capture forms</li>
                    <li>CRM integration</li>
                    <li>WhatsApp and email automation</li>
                    <li>Appointment booking systems</li>
                    <li>Sales funnel strategy</li>
                    <li>Analytics and performance tracking</li>
                    <li>Ongoing technical support</li>
                </ul>
                <p>The specific deliverables included in your engagement will be outlined in a separate proposal, invoice, or service agreement provided to you before purchase.</p>
            </>
        ),
    },
    {
        id: 'eligibility',
        title: '2. Eligibility',
        content: (
            <p>By using our Services, you confirm that you are at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself or the business you represent.</p>
        ),
    },
    {
        id: 'booking',
        title: '3. Booking Consultations and Engagements',
        content: (
            <ul>
                <li>Submitting a lead form or booking a free consultation does not create a binding service agreement — it's a request for information and doesn't obligate either party until a formal agreement is confirmed.</li>
                <li>Once you agree to proceed with a paid engagement, the scope, timeline, and pricing will be documented in a proposal, contract, or invoice, which forms part of these Terms.</li>
            </ul>
        ),
    },
    {
        id: 'client-responsibilities',
        title: '4. Client Responsibilities',
        content: (
            <>
                <p>To deliver the NCF Funnel effectively, we may require you to:</p>
                <ul>
                    <li>Provide accurate business information, branding assets, and content in a timely manner</li>
                    <li>Grant access to necessary third-party accounts (CRM, WhatsApp Business, email platforms, hosting, or domain)</li>
                    <li>Respond to requests for feedback or approvals within agreed timeframes</li>
                    <li>Ensure any information or claims provided for use in the funnel are accurate and lawful</li>
                </ul>
                <p>Delays caused by incomplete or late information from you may extend project timelines and are not the responsibility of Creative Crew.</p>
            </>
        ),
    },
    {
        id: 'payments',
        title: '5. Payments',
        content: (
            <ul>
                <li>Fees for the NCF Funnel and related services are outlined in the applicable proposal or invoice.</li>
                <li>Payments must be made according to the agreed schedule (deposit and milestone-based, or full upfront, as specified at booking).</li>
                <li>Late payments may result in a pause or delay of services until payment is received.</li>
                <li>All fees are exclusive of applicable taxes unless stated otherwise.</li>
            </ul>
        ),
    },
    {
        id: 'third-party-platforms',
        title: '6. Third-Party Platforms and Tools',
        content: (
            <>
                <p>Our Services may involve integration with third-party platforms (CRM systems, WhatsApp Business API, email providers, hosting, payment gateways, etc.). We are not responsible for:</p>
                <ul>
                    <li>Downtime, policy changes, pricing changes, or feature limitations of third-party platforms</li>
                    <li>Suspension or restriction of your third-party accounts due to your own use or violation of that platform's terms</li>
                    <li>Ongoing subscription costs of third-party tools, unless explicitly included in the proposal</li>
                </ul>
            </>
        ),
    },
    {
        id: 'ip',
        title: '7. Intellectual Property',
        content: (
            <ul>
                <li>Upon full payment, the client receives ownership of the final deliverables specifically created for them, unless otherwise agreed in writing.</li>
                <li>Creative Crew retains ownership of pre-existing tools, templates, frameworks, automation scripts, and proprietary processes, and may reuse non-client-specific components in future projects.</li>
                <li>The client grants Creative Crew a limited license to use their name, logo, and project outcomes for portfolio and marketing purposes, unless the client opts out in writing.</li>
            </ul>
        ),
    },
    {
        id: 'disclaimer',
        title: '8. Performance and Results Disclaimer',
        content: (
            <p>While the NCF Funnel is designed to improve lead generation, conversion rates, and automation efficiency, Creative Crew does not guarantee specific results, including sales figures, lead volume, conversion percentages, or return on investment. Results depend on factors outside our control, including market conditions, your industry, pricing, offer quality, and how the funnel is used and maintained after launch.</p>
        ),
    },
    {
        id: 'support',
        title: '9. Support and Maintenance',
        content: (
            <ul>
                <li>Ongoing technical support is provided as specified in your service package.</li>
                <li>Support does not cover issues caused by third-party platform changes, unauthorized modifications, or misuse of the funnel system.</li>
                <li>Additional support beyond the agreed scope may be billed separately.</li>
            </ul>
        ),
    },
    {
        id: 'liability',
        title: '10. Limitation of Liability',
        content: (
            <p>To the maximum extent permitted by law, Creative Crew shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities, arising from your use of, or inability to use, our Services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
        ),
    },
    {
        id: 'termination',
        title: '11. Termination',
        content: (
            <ul>
                <li>Either party may terminate an ongoing engagement with written notice, subject to the applicable proposal or contract.</li>
                <li>Fees for work already completed, and any non-refundable amounts, remain payable upon termination.</li>
                <li>Upon termination, access to in-progress deliverables may be paused until outstanding payments are settled.</li>
            </ul>
        ),
    },
    {
        id: 'confidentiality',
        title: '12. Confidentiality',
        content: (
            <p>Both parties agree to keep confidential any non-public business, technical, or financial information shared during the engagement, and to use it solely for delivering or receiving the Services.</p>
        ),
    },
    {
        id: 'governing-law',
        title: '13. Governing Law',
        content: (
            <p>These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.</p>
        ),
    },
    {
        id: 'changes',
        title: '14. Changes to These Terms',
        content: (
            <p>We may update these Terms from time to time. Continued use of our Services after changes are posted constitutes your acceptance of the revised Terms.</p>
        ),
    },
    {
        id: 'contact',
        title: '15. Contact Us',
        content: (
            <p>
                <strong>Creative Crew</strong><br />
                Email: <a href="mailto:crewcreative98@gmail.com">crewcreative98@gmail.com</a><br />
                Phone: <a href="tel:+919971702329">+91 9971702329</a>
            </p>
        ),
    },
]

export default function TermsAndConditions() {
    return (
        <LegalLayout
            eyebrow="Legal"
            title="Terms & Conditions"
            lastUpdated="[Insert Date]"
            sections={sections}
        />
    )
}