import type { Post } from "@/lib/types";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <section id="posts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
            From the Feed
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-dark">
            Latest Posts
          </h2>
          <p className="text-gray-400 mt-4">
            Tips, workouts, and nutrition advice — click any post to see it on Instagram.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const isPlaceholder = post.image.startsWith("/placeholders/");
            return (
              <a
                key={post.id}
                href={post.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {isPlaceholder ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-purple-50 to-gray-100">
                      <span className="text-5xl">🖼️</span>
                      <p className="text-gray-300 text-xs">Post image</p>
                    </div>
                  ) : (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Instagram icon overlay */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-pink-500">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Fitness Tips
                  </span>
                  <h3 className="font-bold text-dark text-base mt-2 mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-100 pt-3">
                    <span>View on Instagram</span>
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-primary">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
