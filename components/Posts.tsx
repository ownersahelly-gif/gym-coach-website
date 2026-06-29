import type { Post } from "@/lib/types";
import Reveal from "./Reveal";

const items = [
  { label: "Summer Workout", image: "/about3.jpg", url: "https://www.instagram.com/REPLACE_WITH_POST_ID/" },
  { label: "Hybrid Athlete", image: "/about4.jpg", url: "https://www.instagram.com/REPLACE_WITH_POST_ID/" },
  {
    label: "Challenges",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=700&fit=crop&q=80",
    url: "https://www.instagram.com/REPLACE_WITH_POST_ID/",
  },
];

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <section id="posts" className="py-12" style={{ background: "#000000" }}>
      <div className="max-w-md mx-auto px-6 lg:max-w-6xl">
        <h2 className="display text-white text-3xl sm:text-4xl text-center">Our Posts</h2>
        <div className="heading-rule mb-8" />

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-6">
          {items.map((post, i) => (
            <Reveal key={post.label} delay={i * 100}>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="lift group block rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.label}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-[600ms]"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <p className="text-white font-bold text-sm uppercase tracking-wider mt-3">{post.label}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
