import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = (onSearchChange) => {
  const keyChange = (e) => {
    const searchKey = e.target.value;
    onSearchChange && onSearchChange(searchKey);
  };
  return (
    <input
      className={styles["input"]}
      placeholder="Search"
      type="search"
      onChange={keyChange}
    />
  );
};
export default SearchInput;
