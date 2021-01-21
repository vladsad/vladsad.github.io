import { Link } from "gatsby";
import React from "react";
import "./header.scss";

const Header = (props) => {
  const { pageContext, children } = props;

  return (
    <header className="header">
      <div className="header_inner">
        <div className="header-logo">
          <span className="header-logo_img">👦🏼</span>
          <div>
            <div className="header-logo_text-top">Vladislav Sadretdinov</div>
            <div className="header-logo_text-bottom">Developer / Engineer</div>
          </div>
        </div>
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_element">
              <Link to="/" className="nav_link" activeClassName="activeLink">
                Home
              </Link>
            </li>
            <li className="nav_element">
              <Link
                to="/articles"
                className="nav_link"
                activeClassName="activeLink"
              >
                Articles
              </Link>
            </li>
            <li className="nav_element">
              <Link
                to="/notes"
                className="nav_link"
                activeClassName="activeLink"
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
