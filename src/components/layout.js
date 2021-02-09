import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Header from "./header/header";

import "./layout.scss";

const Layout = (props) => {
  const { pageContext, children } = props;

  console.log(props);

  return (
    <>
      <Helmet>
        <title>Vladislav Sadretdinov | Developer | Engineer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta charSet="utf-8" />
        {/* <title>{pageContext.frontmatter.title}</title> */}
      </Helmet>

      <Header />

      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
