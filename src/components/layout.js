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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
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
