import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <main className="w-full mx-auto max-w-3xl py-16 px-4 bg-background">
        <div className="flex flex-col items-center rounded-2xl space-y-4 border p-8 shadow-sm border-zinc-800 bg-zinc-950">
          <h1 className="text-3xl text-center text-white sm:text-5xl font-extrabold tracking-tight">
            Take-Home: Posts Viewer
          </h1>
          <h2 className="text-base text-center text-zinc-400 sm:text-lg">
            Next.js + Tailwind + JSONPlaceholder
          </h2>
          <Link
            href="/posts"
            className="mt-8 bg-white items-center justify-center inline-flex px-5 py-3 rounded-full text-zinc-900 transition-colors hover:opacity-90 hover:bg-foreground "
          >
            Vai ai post
          </Link>
        </div>
      </main>
    </div>
  );
}
