import React from "react";

import logo from "./Assets/LOGO.svg";
import styles from "./Styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
