"use client";

import { useState } from "react";
import PostsList from "@/components/PostsList";
import { Post } from "@/types/post";

type Props = { posts: Post[] };

export default function PostsSearch({ posts }: Props) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filteredPosts =
    q.length === 0
      ? posts
      : posts.filter((p) => (p.title + " " + p.body).toLowerCase().includes(q));

  return (
    <div className="mt-8">
      <label className="block text-sm font-medium text-foreground">
        Cerca nei post
      </label>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca titolo o testo..."
        className="mt-2 w-full rounded-xl border border-zinc-300 bg-background px-4 py-3 text-foreground shadow-sm"
      />
      <div className="mt-3 text-sm text-zinc-500">
        Mostrati:<span className="font-medium">{filteredPosts.length}</span> /{" "}
        {posts.length}
      </div>

      <PostsList posts={filteredPosts} />
    </div>
  );
}
