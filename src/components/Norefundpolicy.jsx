'use client'
import LegalLayout from './LegalLayout'

const sections = [
    {
        id: 'general',
        title: '1. General Policy',
        content: (
            <p>All payments made to Creative Crew for the NCF Funnel and related services are <strong>final and non-refundable</strong>, except where required by applicable law. This applies regardless of whether you have used the deliverables, are satisfied with the outcome, or decide to discontinue the engagement after work has begun.</p>
        ),
    },
    {
        id: 'why',
        title: '2. Why We Have a No Refund Policy',
        content: (
            <>
                <p>The NCF Funnel is a customized service that involves:</p>
                <ul>
                    <li>Immediate allocation of strategy, design, and development resources</li>
                    <li>Custom configuration of landing pages, forms, CRM, and automation systems specific to your business</li>
                    <li>Third-party platform setup and integration costs incurred on your behalf</li>
                    <li>Time-intensive planning across strategy, design, automation, testing, and launch</li>
                </ul>
                <p>Because significant time, labor, and resources are committed from the moment an engagement begins, we are unable to offer refunds once a project has been initiated.</p>
            </>
        ),
    },
    {
        id: 'deposits',
        title: '3. Deposits and Milestone Payments',
        content: (
            <ul>
                <li>Deposits paid to secure a project slot or begin work are non-refundable.</li>
                <li>Milestone payments cover work already completed or in progress up to that stage and are non-refundable.</li>
            </ul>
        ),
    },
    {
        id: 'cancellations',
        title: '4. Cancellations by the Client',
        content: (
            <>
                <p>If you choose to cancel a project after work has begun:</p>
                <ul>
                    <li>Any amount paid up to the point of cancellation is non-refundable.</li>
                    <li>You will not receive access to incomplete deliverables unless otherwise agreed in writing.</li>
                    <li>Creative Crew reserves the right to invoice for any additional work completed beyond amounts already paid.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'consultations',
        title: '5. Consultations',
        content: (
            <p>Free consultations booked through our funnel are complimentary and are not subject to this policy, as no payment is made. Paid strategy sessions or audits, if applicable, are non-refundable once delivered.</p>
        ),
    },
    {
        id: 'results',
        title: '6. Results and Performance',
        content: (
            <p>As stated in our Terms and Conditions, Creative Crew does not guarantee specific business outcomes such as lead volume, conversion rates, or sales figures. Dissatisfaction with performance results — where the agreed deliverables have been provided as described — does not qualify for a refund.</p>
        ),
    },
    {
        id: 'technical-issues',
        title: '7. Technical Issues and Support',
        content: (
            <p>If you experience a technical issue directly caused by an error in our delivered work, we will make reasonable efforts to correct it at no additional cost as part of our support terms. This remedy — correcting the issue — applies in place of a refund.</p>
        ),
    },
    {
        id: 'third-party-costs',
        title: '8. Third-Party Costs',
        content: (
            <p>Any third-party subscription fees, hosting costs, domain fees, WhatsApp Business API charges, or similar costs incurred or paid on your behalf are non-refundable, as these are typically non-refundable from the third-party provider itself.</p>
        ),
    },
    {
        id: 'exceptions',
        title: '9. Exceptions',
        content: (
            <>
                <p>Refunds may only be considered in cases of:</p>
                <ul>
                    <li>Duplicate payment made in error</li>
                    <li>Non-delivery of any service where no work has commenced</li>
                </ul>
                <p>Any exception is at the sole discretion of Creative Crew and must be requested in writing within [Insert Number] days of payment.</p>
            </>
        ),
    },
    {
        id: 'contact',
        title: '10. Contact Us',
        content: (
            <>
                <p>If you believe you have been charged in error or have questions about this policy, please contact us promptly:</p>
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
        title: '11. Changes to This Policy',
        content: (
            <p>We may update this No Refund Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
        ),
    },
]

export default function NoRefundPolicy() {
    return (
        <LegalLayout
            eyebrow="Legal"
            title="No Refund Policy"
            lastUpdated="[Insert Date]"
            sections={sections}
        />
    )
}