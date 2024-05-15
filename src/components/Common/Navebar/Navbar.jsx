import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = ({
  logoPath,
  profileImagePath,
  profileName,
  email,
  links,
  fullScreen,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={fullScreen === true ? styles.displayNone : styles.navbar}>
      <div className={styles.leftSide}>
        {/* Logo */}
        <img src={logoPath} alt="Logo" className={styles.logo} />
        <div className={styles.tab}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </div>
      </div>
      <div className={styles.rightSide}>
        {/* Upgrade button */}
        <button className={`${styles.upgradeButton} btn`}>
          <TbArrowWaveRightUp className={`${styles.icon}`} />
          Upgrade
        </button>
        {/* Profile image */}
        <img
          src={profileImagePath}
          alt="Profile"
          className={styles.profileImage}
        />
        {/* Profile info with dropdown */}
        <div className={styles.profileInfo} onClick={toggleDropdown}>
          <span className={styles.profileName}>{profileName}</span>
          <span className={styles.email}>{email}</span>
          {/* Dropdown */}
          {dropdownOpen && (
            <div className={styles.dropdownCustom}>
              <Link to="/setting" className={`${styles.ItemLink}`} href="#">
                Setting
              </Link>
              <Link to="/billing" className={`${styles.ItemLink}`} href="#">
                Billing
              </Link>
              <Link to="" className={`${styles.ItemLink}`} href="#">
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
