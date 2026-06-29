import type { Post } from "@/lib/types";
import Reveal from "./Reveal";

const labels = ["Summer Workout", "Hybrid Athlete", "Challenges"];

export default function Posts({ posts }: { posts: Post[] }) {
  const three = posts.slice(0, 3);
  return (
    <section id="posts" className="py-12" style={{ background: "#000000" }}>
      <div className="max-w-md mx-auto px-6">
        <h2 className="display text-white text-3xl sm:text-4xl text-center mb-8">Our Posts</h2>

        <div className="flex flex-col gap-8">
          {three.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <a href={post.instagram_url} target="_blank" rel="noopener noreferrer" className="group block">
                <img
                  src={post.image}
                  alt={labels[i]}
                  className="w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <p className="text-white font-bold text-sm uppercase tracking-wider mt-3">{labels[i] ?? "Post"}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
