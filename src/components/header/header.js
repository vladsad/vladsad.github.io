import { Link } from "gatsby";
import React from "react";
import "./header.scss";

const Header = (props) => {
  const { pageContext, children } = props;

  return (
    <header>
      <div>Vladislav Sadretdinov</div>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="activeLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" activeClassName="activeLink">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
