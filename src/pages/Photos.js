import React from "react";
import Link from "next/link";
import Layout from "./components/Layout/Layout";

export default function Photos() {
  const arr = [
    {
      id: 1,
      imageURL:
        "https://demo.vercel.blog/_next/image?url=%2Fimages%2Fphoto2.jpg&w=3840&q=75",
      unsplash: "https://unsplash.com/photos/WeYamle9fDM",
    },
    {
      id: 2,
      imageURL:
        "https://demo.vercel.blog/_next/image?url=%2Fimages%2Fphoto.jpg&w=3840&q=75",
      unsplash: "https://unsplash.com/photos/ndN00KmbJ1c",
    },
  ];
  return (
    <div className="container">
      <Layout heading={"Photo"}>
        <>
          <div
            style={{ marginBottom: "20px" }}
            className="text_color text-content"
          >
            <p style={{ marginBottom: "10px" }}>
              Here's some of my photography.
            </p>
          </div>
          <div style={{ marginBottom: "130px" }}>
            {arr.map((item) => (
              <div style={{ marginBottom: "18px" }} key={item.id}>
                <img className="image_" src={item.imageURL} alt="image" />
                <Link
                  className="link_color buttons"
                  target={"_blank"}
                  href={item.unsplash}
                >
                  Unsplash ↗
                </Link>
              </div>
            ))}
          </div>
        </>
      </Layout>
    </div>
  );
}
