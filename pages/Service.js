import Head from "next/head";
import Layout from "../components/Layout";
import Section11 from "../components/Section11";
import Section12 from "../components/Section12";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";

export default function Service() {
  return (
    <>
      <Layout>
        <section id="navbar-Body">
          <h2>Service</h2>
          <div className="test">
            <a href="">Home</a>
            <p className="before">Service</p>
          </div>
        </section>
        <Section11 />
        <Section12 />
        <Section5 />
        <Section6 />
        <Section7 />
      </Layout>
    </>
  );
}
