import type { Service, Transformation, Post } from "./types";

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
    before_image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&q=80",
    duration: "12 weeks",
    result: "Lost 18 kg",
  },
  {
    id: "2",
    name: "Sara M.",
    before_image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=500&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop&q=80",
    duration: "16 weeks",
    result: "Lost 12 kg",
  },
  {
    id: "3",
    name: "Omar T.",
    before_image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&h=500&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=400&h=500&fit=crop&q=80",
    duration: "8 weeks",
    result: "Gained 6 kg muscle",
  },
  {
    id: "4",
    name: "Lina R.",
    before_image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop&q=80",
    after_image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=500&fit=crop&q=80",
    duration: "20 weeks",
    result: "Lost 22 kg",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "5 mistakes killing your progress at the gym",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "2",
    title: "What I eat in a day as a coach",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "3",
    title: "The truth about cardio and fat loss",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "4",
    title: "How to stay consistent when motivation fades",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "5",
    title: "3-day full body workout for beginners",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
  {
    id: "6",
    title: "Sleep is your #1 recovery tool",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80",
    instagram_url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  },
];
