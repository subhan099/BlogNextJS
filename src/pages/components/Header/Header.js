"use client";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/pages/components/Header/Header.module.css";
import Link from "next/link";
export default function Header({ Heading }) {
  const router = useRouter();
  const isLinkActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div>
      <div>
        <h1 className={styles.heading}>{Heading}</h1>
      </div>
      <div className={styles.end_buttons}>
        <Link
          className={
            isLinkActive("/About") ? styles.NavActive : styles.NavNonActive
          }
          href="/About"
        >
          About
        </Link>
        <Link
          className={
            isLinkActive("/Photos") ? styles.NavActive : styles.NavNonActive
          }
          href="/Photos"
        >
          Photos
        </Link>
        <Link
          className={
            isLinkActive("/Posts") ? styles.NavActive : styles.NavNonActive
          }
          href="/Posts"
        >
          Posts
        </Link>
      </div>
    </div>
  );
}
