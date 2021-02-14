import Head from "next/head";
import Page from "../components/Page";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <div className="flex justify-between h-screen items-center">
        <div>
          <h3>Hello, 👋 I am Michael Madumere </h3>
          <h1>Web Developer</h1>
        </div>
        <div>
          <img
            src="/static/images/home-page-pattern.svg"
            alt="MMI"
            className="h-screen"
          />
        </div>
      </div>
    </Page>
  );
}
