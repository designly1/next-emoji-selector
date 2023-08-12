import React from "react";
import Head from "next/head";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout(props: Props) {
  const { children, title = "Next.js Emoji Selector" } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
      </div>
    </>
  );
}
