import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function Posts() {
  const arr = [
    {
      id: 1,
      title: "Markdown Examples",
      body: "View examples of all possible Markdown options.",
      buttonURL: "https://demo.vercel.blog/posts/markdown",
      Date: "Fri Mar 19 2021",
    },
    {
      id: 2,
      title: "Next.js Pages",
      body: "Learn more about Next.js pages.",
      buttonURL: "https://demo.vercel.blog/posts/markdown",
      Date: "Thu Mar 18 2021",
    },
  ];
  return (
    <div className="container">
      <Layout heading={"Posts"}>
        <div style={{ marginBottom: "127px" }}>
          {arr.map((item) => (
            <div style={{ color: "black", marginBottom: "30px" }} key={item.id}>
              <h3 className="title">{item.title}</h3>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>{item.body}</p>
                <Link
                  style={{ textDecoration: "underline", marginBottom: "10px" }}
                  className="buttons"
                  href={item.buttonURL}
                >
                  Read More →
                </Link>
              </div>
              {item.Date}
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
