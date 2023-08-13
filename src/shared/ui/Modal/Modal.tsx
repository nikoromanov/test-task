import classNames from "classnames";
import React from "react";
import Portal from "../Portal/Portal";
import { DeleteIcon } from "./DeleteIcon";

import styles from "./Modal.module.css";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title: string;
}

const Modal: React.FC<IProps> = ({
  children,
  isOpen,
  onClose,
  className,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles.container}>
        <div className={styles.shadow} onClick={onClose} />
        <section className={classNames(styles.modal, className)}>
          <header className={styles.headline}>
            <div className={styles.title}>{title}</div>
            <button className={styles.close} onClick={onClose}>
              <DeleteIcon />
            </button>
          </header>
          {children}
        </section>
      </div>
    </Portal>
  );
};

export default Modal;
