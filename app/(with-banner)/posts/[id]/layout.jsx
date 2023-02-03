import Link from "next/link";

const fetchSinlgePosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // cache: "no-store",
    next: {
      revalidate: 60,
    },
  });
  return await res.json();
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinlgePosts(id);

  return (
    <article style={{ margin: "1rem" }}>
      <h1 style={{ margin: "0.5rem" }}>{post.title}</h1>
      <p style={{ margin: "0.5rem" }}>{post.body}</p>
      <Link href={`/posts/${id}/comments`} style={{ margin: "0.5rem" }}>
        Ver comentarios
      </Link>
      {children}
    </article>
  );
}
