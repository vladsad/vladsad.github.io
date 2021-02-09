import React from "react";
import Layout from "../components/layout";

import "../components/content.scss";

const IndexPage = () => {
  return (
    <Layout>
      <section
        className="content"
        style={{
          height: "700px",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome!</h1>
        <p>
          Hi, I’m Vladislav.
          <br />
          This blog is about my own development and learning, so be patient and
          enjoy.
        </p>

        {/* <p
          style={{
            fontSize: "25px",
            marginTop: "160px",
            textAlign: "center",
            letterSpacing: "10px",
          }}
        >
          ...
        </p> */}

        <h2>Contact</h2>
        <p style={{ marginTop: 0 }}>
          If you want to get in touch,{" "}
          <a href="mailto:vlad.sadretdinov@gmail.com">send me an email</a> or
          find me elsewhere on the web.
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;
