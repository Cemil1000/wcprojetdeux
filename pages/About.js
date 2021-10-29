import Head from "next/head";
import Layout from "../components/Layout";
import Section1 from "../components/Section1";
import Section10 from "../components/Section10";
import Section5 from "../components/Section5";
import Section13 from "../components/Section13";

export default function About() {
  return (
    <>
      <Layout>
        <section id="navbar-Body">
          <h2>About Us</h2>
          <div className="test">
            <a href="">Home</a>
            <p className="before">About Us</p>
          </div>
        </section>
        <Section1 />
        <Section10 />
        <Section5 />
        <Section13 />
      </Layout>
    </>
  );
}
