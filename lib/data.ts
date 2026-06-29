import type { Service, Transformation, Post, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "1",
    title: "1-on-1 Online Coaching",
    description:
      "A fully personalised training and nutrition plan built around your schedule, goals and lifestyle — with weekly check-ins.",
    icon: "🏋️",
  },
  {
    id: "2",
    title: "Custom Nutrition Plans",
    description:
      "Science-backed nutrition tailored to your body and goals. No starvation, no guesswork — just food that works.",
    icon: "🥗",
  },
  {
    id: "3",
    title: "12-Week Transformation",
    description:
      "A structured program that takes you from where you are to where you want to be, with guaranteed progress.",
    icon: "🔥",
  },
  {
    id: "4",
    title: "Group Challenges",
    description:
      "Monthly challenges with a community of motivated people pushing each other to level up — together.",
    icon: "🏆",
  },
];

export type ServicePlan = { name: string; price: string; perks: string[] };
export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  about: string;
  plans: ServicePlan[];
};

/*
  EDIT ME: prices, perks, and the payment number live here and on the
  signup form (components/ServiceSignupForm.tsx).
*/
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "1-on-1-training",
    title: "1-on-1 Training",
    tagline: "Personalised coaching built entirely around you",
    image: "/hero-photo.jpg",
    about:
      "A fully personalised training program designed around your goals, schedule and experience level — with weekly check-ins to keep you progressing and accountable.",
    plans: [
      { name: "1 Month", price: "EGP 2,000", perks: ["Custom training plan", "Weekly check-ins", "Form reviews"] },
      { name: "3 Months", price: "EGP 5,400", perks: ["Everything in 1 month", "Nutrition guidance", "Priority support"] },
      { name: "6 Months", price: "EGP 9,600", perks: ["Everything in 3 months", "Full transformation plan", "24/7 chat access"] },
    ],
  },
  {
    slug: "nutrition-planning",
    title: "Nutrition Planning",
    tagline: "Science-backed nutrition that fits your life",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=700&fit=crop&q=80",
    about:
      "A custom nutrition plan tailored to your body, goals and preferences. No starvation, no guesswork — just sustainable food strategies that get results.",
    plans: [
      { name: "1 Month", price: "EGP 1,500", perks: ["Custom meal plan", "Macro targets", "Weekly adjustments"] },
      { name: "3 Months", price: "EGP 4,000", perks: ["Everything in 1 month", "Recipe guide", "Supplement advice"] },
    ],
  },
  {
    slug: "transformation",
    title: "12-Week Transformation",
    tagline: "The complete body & mindset overhaul",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=700&fit=crop&q=80",
    about:
      "A structured 12-week program combining training, nutrition and mindset coaching to take you from where you are to where you want to be — with guaranteed progress.",
    plans: [
      { name: "12 Weeks", price: "EGP 7,000", perks: ["Training + nutrition", "Weekly 1-on-1 calls", "Guaranteed progress"] },
    ],
  },
  {
    slug: "group-challenges",
    title: "Group Challenges",
    tagline: "Train alongside a motivated community",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=700&fit=crop&q=80",
    about:
      "Monthly fitness challenges with a community of motivated people pushing each other to level up — structured workouts, leaderboards and accountability.",
    plans: [
      { name: "Monthly", price: "EGP 800", perks: ["Group workouts", "Community chat", "Monthly leaderboard"] },
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Apply & Assess",
    desc: "We start with a deep-dive consult to understand your goals, history, and lifestyle.",
  },
  {
    step: "02",
    title: "Build Your Plan",
    desc: "I design a training and nutrition system made specifically for your body and routine.",
  },
  {
    step: "03",
    title: "Train & Adjust",
    desc: "You train, I track. Weekly check-ins keep us adapting so progress never stalls.",
  },
  {
    step: "04",
    title: "Transform",
    desc: "Habits become second nature, results become permanent — and you keep them for life.",
  },
];

export const transformations: Transformation[] = [
  {
    id: "1",
    name: "Ahmed K.",
    before_image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=520&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=520&fit=crop&q=80",
    duration: "12 weeks",
    result: "Lost 18 kg",
  },
  {
    id: "2",
    name: "Sara M.",
    before_image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=520&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=520&fit=crop&q=80",
    duration: "16 weeks",
    result: "Lost 12 kg",
  },
  {
    id: "3",
    name: "Omar T.",
    before_image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&h=520&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=400&h=520&fit=crop&q=80",
    duration: "8 weeks",
    result: "+6 kg muscle",
  },
  {
    id: "4",
    name: "Lina R.",
    before_image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=520&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=520&fit=crop&q=80",
    duration: "20 weeks",
    result: "Lost 22 kg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sara M.",
    role: "Lost 12 kg in 16 weeks",
    quote:
      "Ola completely changed how I see fitness. For the first time the plan actually fit my life — and the results speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Ahmed K.",
    role: "Lost 18 kg in 12 weeks",
    quote:
      "I'd tried everything before. The difference here was the accountability — Ola never let me settle. Best decision I've made.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Lina R.",
    role: "Lost 22 kg in 20 weeks",
    quote:
      "Not just a coach — a partner. I gained strength, confidence and habits I'll keep forever. I can't recommend her enough.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "5 mistakes killing your progress at the gym",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&h=460&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "2",
    title: "What I eat in a day as a coach",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&h=460&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "3",
    title: "The truth about cardio and fat loss",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=700&h=460&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "4",
    title: "How to stay consistent when motivation fades",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=460&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "5",
    title: "3-day full body workout for beginners",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=700&h=460&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "6",
    title: "Sleep is your #1 recovery tool",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&h=460&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
];
