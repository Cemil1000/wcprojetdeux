import Head from "next/head";
import Layout from "../components/Layout";
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";

export default function Portfolio() {
  return (
    <>
      <Layout>
        <section id="navbar-Body">
          <h2>Portfolio</h2>
          <div className="test">
            <a href="">Home</a>
            <p className="before">Portfolio</p>
          </div>
        </section>
        <Section4 />
        <Section3 />
        <Section7 />
      </Layout>
    </>
  );
}
