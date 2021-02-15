import Head from "next/head";
import Page, { Section } from "../components/Page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Page>
        <Section className="flex justify-between h-screen items-center">
          <div>
            <h3 className="font-extrabold text-3xl">
              Hello, 👋 I am Michael Madumere
            </h3>
            <h1>Web Developer</h1>
          </div>
          <div>
            <img
              src="/static/images/home-page-pattern.svg"
              alt="MMI"
              className="h-screen"
            />
          </div>
        </Section>
        <Section className="flex justify-center h-screen items-center">
          <div>
            <h3>About Me</h3>
          </div>
        </Section>
        <Section className="flex justify-center h-screen items-center">
          <div>
            <h3>Skills</h3>
          </div>
        </Section>
        <Section className="flex justify-center h-screen items-center">
          <div>
            <h3>Portfolio</h3>
          </div>
        </Section>
        <Section className="flex justify-center h-screen items-center">
          <div>
            <h3>Contact</h3>
          </div>
        </Section>
      </Page>
      <style jsx>
        {`
          .slide {
            scroll-snap-align: start;
            scroll-snap-stop: normal;
            scroll-margin: 10rem;
          }
        `}
      </style>
    </>
  );
}
