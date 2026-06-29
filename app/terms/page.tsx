import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Terms & Conditions — Ola Voloshina" };

export default function Terms() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      updated="June 2026"
      sections={[
        { heading: "Acceptance of terms", body: "By enrolling in any coaching program or using this website, you agree to these terms and conditions in full." },
        { heading: "Coaching services", body: "Coaching programs are personalised guidance and are not a substitute for medical advice. You should consult a physician before beginning any new training or nutrition program." },
        { heading: "Payments & enrollment", body: "Enrollment is confirmed once payment is received and verified. Prices are listed per plan on each service page and may change without notice for future enrollments." },
        { heading: "Client responsibility", body: "Results depend on your consistency and effort. You are responsible for following the plan safely and communicating any health concerns." },
        { heading: "Limitation of liability", body: "We are not liable for any injury or health issue arising from participation. Train within your limits and seek professional medical guidance where needed." },
      ]}
    />
  );
}
