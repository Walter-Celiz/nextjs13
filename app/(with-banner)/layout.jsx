// import Counter from "./Counter";

export default function PostLayout({ children }) {
  return (
    <div>
      {/* <Counter /> */}
      <marquee
        style={{ margin: "0.5rem", color: "purple", background: "white" }}
      >
        Walter Wolzzzzzzzzzzzzzzzzzzzzzzzzzzz
      </marquee>
      {children}
    </div>
  );
}
