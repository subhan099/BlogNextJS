import React, { Children, useState } from "react";
import Link from "next/link";
import Layout from "./components/Layout/Layout";

export default function About() {
  return (
    <div className="container">
      <Layout heading={"Your Name"}>
        <div className="text_color text-content">
          <p style={{ marginBottom: "10px" }}>
            Hey, I'm a Senior Software Engineer at Company. I enjoy working with
            Next.js and crafting beautiful front-end experiences.
          </p>
          <br />
          <p style={{ marginBottom: "10px" }}>
            This portfolio is built with{" "}
            <span style={{ fontWeight: "bold" }}>Next.js </span> and a library
            called
            <Link
              style={{ textDecoration: "underline", marginBottom: "66px" }}
              className="link_color buttons"
              target={"_blank"}
              href="https://nextra.site/"
            >
              Nextra.
            </Link>
            It allows you to write Markdown and focus on the content of your
            portfolio.
          </p>
          <br />
          <p style={{ marginBottom: "37px" }}>
            <Link
              style={{ textDecoration: "underline" }}
              className="text_color buttons"
              href="/Posts"
            >
              Deploy your own
            </Link>{" "}
            in a few minutes.
          </p>
          <hr style={{ marginBottom: "48px" }} />
          <p style={{ marginBottom: "66px" }}>
            Twitter
            <Link
              style={{ textDecoration: "underline" }}
              className="link_color buttons"
              target={"_blank"}
              href="https://twitter.com/"
            >
              @yourname
            </Link>
          </p>
          <p style={{ marginBottom: "66px" }}>
            GitHub
            <Link
              style={{ textDecoration: "underline", marginBottom: "66px" }}
              className="link_color buttons"
              target={"_blank"}
              href="https://github.com/"
            >
              @yourname
            </Link>
          </p>
          <p style={{ marginBottom: "66px" }}>
            Instagram
            <Link
              style={{ textDecoration: "underline", marginBottom: "66px" }}
              className="link_color buttons"
              target={"_blank"}
              href="https://instagram.com/"
            >
              @yourname
            </Link>
          </p>
          <p style={{ marginBottom: "66px" }}>
            Email
            <Link
              style={{ textDecoration: "underline", marginBottom: "66px" }}
              className="link_color buttons"
              target={"_blank"}
              href="https://gmail.com/"
            >
              @yourname
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  );
}
