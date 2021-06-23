import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import Head from "next/head";

export default function TOMHome() {
  return (
    <>
      <Head>
        <title>Tower of Mastery | HQ</title>
      </Head>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1 style={{ fontSize: "40px" }}>TOM</h1>
      </div>
      <Footer />
    </>
  );
}
