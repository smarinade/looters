import React from "react";
import styles from "./Footer.module.css";
import Coffee from "../Coffee/Coffee";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Coffee></Coffee>
      <div className={styles.copywright}>©2022 Looters | All Rights Reserved</div>
    </footer>
  )
}

export default Footer
