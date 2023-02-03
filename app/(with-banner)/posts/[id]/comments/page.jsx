import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error al cargar los comentarios");

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    // cache: "no-store",
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ margin: "1rem 1.5rem", background: "grey" }}>
      {comments.map((comment) => (
        <li key={comment.id} style={{ margin: "1rem 0" }}>
          <Image
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            alt={comment.name}
            width="50"
            height="50"
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
