import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Refund Policy — Ola Voloshina" };

export default function RefundPolicy() {
  return (
    <PolicyPage
      title="Refund Policy"
      updated="June 2026"
      sections={[
        { heading: "Digital coaching services", body: "Because coaching plans are personalised and prepared specifically for you, payments are generally non-refundable once your plan has been delivered." },
        { heading: "Before your plan is delivered", body: "If you change your mind before your customised plan has been created and sent, contact us within 48 hours of payment for a full refund." },
        { heading: "Cancellations", body: "You may cancel a recurring plan at any time before the next billing cycle. Already-paid periods are not refunded but you keep access until they end." },
        { heading: "How to request", body: "To request a refund or cancellation, contact us through the email or social channels in the footer with your name and payment details." },
      ]}
    />
  );
}
