import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import Clock from "../Clock/Clock";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = (props) => {
  const [searchKey, setSearchKey] = useState("");

  const searchChangeHandler = (searchKey) => {
    setSearchKey(searchKey);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["top-bar"]}>
        <img className={styles["logo"]} src={logo} alt="logo" />
        <Clock />
      </div>
      <div className={styles["header-content"]}>
        <h1>We find houses four you!</h1>
        <div className={styles["inputcontainer"]}>
          <div>
            <SearchInput onSearchChange={searchChangeHandler} />
            <div className={styles["search-summary"]}>
              <small>Search for: {searchKey}</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
