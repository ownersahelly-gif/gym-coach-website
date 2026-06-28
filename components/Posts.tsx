import type { Post } from "@/lib/types";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <section id="posts" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-3">From the Feed</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Latest Posts</h2>
          <p className="text-white/30 mt-4 text-sm">Click any post to view it on Instagram.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const isPlaceholder = post.image.startsWith("/placeholders/");
            return (
              <a
                key={post.id}
                href={post.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface-2 rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden bg-surface-3">
                  {isPlaceholder ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1a0a2e] to-surface-3">
                      <span className="text-5xl opacity-20">🖼️</span>
                      <p className="text-white/20 text-xs">Post image</p>
                    </div>
                  ) : (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-xs font-bold text-primary-light uppercase tracking-wider">Fitness Tips</span>
                  <h3 className="font-bold text-white text-sm mt-2 mb-3 leading-snug group-hover:text-primary-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-white/30 text-xs border-t border-border pt-3">
                    <span>View on Instagram</span>
                    <span className="text-primary-light">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
