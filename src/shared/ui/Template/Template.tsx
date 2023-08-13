import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styles from "./Template.module.css";

const Template: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Template;
