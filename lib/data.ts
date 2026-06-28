import type { Service, Transformation, Post } from "./types";

/*
  STATIC PLACEHOLDER DATA
  When you connect Supabase, replace each array with a fetch from your DB.
  See lib/supabase.ts for the query examples.
*/

export const services: Service[] = [
  {
    id: "1",
    title: "1-on-1 Online Coaching",
    description:
      "Personalised training and nutrition plan built around your schedule, goals, and lifestyle. Weekly check-ins included.",
    icon: "🏋️",
  },
  {
    id: "2",
    title: "Custom Meal Plans",
    description:
      "Science-backed nutrition tailored to your body type and goals — no starvation, no guesswork.",
    icon: "🥗",
  },
  {
    id: "3",
    title: "Transformation Program",
    description:
      "12-week structured program that takes you from where you are to where you want to be — guaranteed progress.",
    icon: "🔥",
  },
  {
    id: "4",
    title: "Group Challenges",
    description:
      "Monthly fitness challenges with a community of motivated people pushing each other to level up.",
    icon: "🏆",
  },
];

export const transformations: Transformation[] = [
  {
    id: "1",
    name: "Ahmed K.",
    before_image: "/placeholders/before1.jpg",
    after_image: "/placeholders/after1.jpg",
    duration: "12 weeks",
    result: "Lost 18 kg",
  },
  {
    id: "2",
    name: "Sara M.",
    before_image: "/placeholders/before2.jpg",
    after_image: "/placeholders/after2.jpg",
    duration: "16 weeks",
    result: "Lost 12 kg + toned",
  },
  {
    id: "3",
    name: "Omar T.",
    before_image: "/placeholders/before3.jpg",
    after_image: "/placeholders/after3.jpg",
    duration: "8 weeks",
    result: "Gained 6 kg muscle",
  },
  {
    id: "4",
    name: "Lina R.",
    before_image: "/placeholders/before4.jpg",
    after_image: "/placeholders/after4.jpg",
    duration: "20 weeks",
    result: "Lost 22 kg",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "5 mistakes killing your progress at the gym",
    image: "/placeholders/post1.jpg",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "2",
    title: "What I eat in a day as a coach",
    image: "/placeholders/post2.jpg",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "3",
    title: "The truth about cardio and fat loss",
    image: "/placeholders/post3.jpg",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "4",
    title: "How to stay consistent when motivation fades",
    image: "/placeholders/post4.jpg",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "5",
    title: "3-day full body workout for beginners",
    image: "/placeholders/post5.jpg",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "6",
    title: "Sleep is your #1 recovery tool",
    image: "/placeholders/post6.jpg",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
];
