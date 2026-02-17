import { Post } from "@/types/post";

type Props = { posts: Post[] };

export default function PostsList({ posts }: Props) {
  return (
    <ul className="mt-8 space-y-4">
      {posts.map((post) => (
        <li
          className="rounded-2xl border border-zinc-200 bg-foreground p-5 shadow-sm
             transition hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
          key={post.id}
        >
          <h3 className="text-lg font-semibold line-clamp-2 text-zinc-900">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-700">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
