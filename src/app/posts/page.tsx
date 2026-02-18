import { Post } from "@/types/post";
import PostsList from "@/components/PostsList";
import PostsSearch from "@/components/PostsSearch";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Impossibile caricare i post");
  }

  const posts: Post[] = await res.json();

  return (
    <div className="min-h-screen font-sans bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl text-center text-white sm:text-5xl font-extrabold tracking-tight">
          Posts
        </h1>
        <h2 className="text-base text-center text-zinc-400 sm:text-lg">
          Posts fetched from JSONPlaceholder
        </h2>
        <PostsSearch posts={posts} />
      </div>
    </div>
  );
}
