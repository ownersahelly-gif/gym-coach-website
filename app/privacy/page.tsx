import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Privacy Policy — Ola Voloshina" };

export default function Privacy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      updated="June 2026"
      sections={[
        { heading: "Information we collect", body: "When you sign up for coaching or contact us, we collect the details you provide — such as your name, email address, phone number and payment confirmation. We do not collect any data you do not voluntarily submit." },
        { heading: "How we use your information", body: "Your information is used solely to deliver and personalise your coaching, communicate with you about your program, and process your enrollment. We never sell or rent your personal data to third parties." },
        { heading: "Data storage & security", body: "Your data is stored securely and access is limited to what is necessary to provide our services. We take reasonable measures to protect it against unauthorised access." },
        { heading: "Your rights", body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us through the details in the footer." },
        { heading: "Contact", body: "For any privacy questions, reach out via the email or social channels listed in the footer." },
      ]}
    />
  );
}
