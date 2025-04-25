import React from "react";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <>
      <h1 className={styles.notFound}>Not found Error 404</h1>
      <p className={styles.message}>Go to another page</p>
    </>
  );
}

export default NotFound;
