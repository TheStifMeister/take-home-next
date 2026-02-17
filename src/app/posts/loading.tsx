export default function Loading() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl text-center text-white sm:text-5xl font-extrabold tracking-tight">
          Posts
        </h1>
        <h2 className="text-base text-center text-zinc-400 sm:text-lg">
          Posts fetched from JSONPlaceholder
        </h2>
        <div className="mt-8 space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200 bg-foreground p-5 shadow-sm"
            >
              <div className="bg-gray-400 h-5 w-2/3 rounded animate-pulse"></div>
              <div className="mt-3 bg-gray-400 h-4 w-4/5 rounded animate-pulse"></div>
              <div className="mt-2 bg-gray-400 h-4 w-full rounded animate-pulse"></div>
              <div className="mt-2 bg-gray-400 h-4 w-11/12 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
