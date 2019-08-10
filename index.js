import React from 'react';
// import Navbar from './/Navbar';
// import './layout.css';
// import layoutStyles from './layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <div className={layoutStyles.layout}> */}
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <main className={layoutStyles.content}>{children}</main> */}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
