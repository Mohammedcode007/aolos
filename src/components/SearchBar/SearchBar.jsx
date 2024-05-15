import React from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const SearchBar = () => {
  return (
    <div className={`${styles.searchBar}`}>
      <FaSearch className={`${styles.searchIcon}`} />
      <input type="text" placeholder="Search..." className={`${styles.searchInput}`} />
    </div>
  );
};

export default SearchBar;
