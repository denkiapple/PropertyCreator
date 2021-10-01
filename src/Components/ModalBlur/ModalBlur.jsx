import React, { useEffect, useRef } from "react";
import { oneOfType, arrayOf, element, func, string } from "prop-types";

import styles from "./ModalBlur.module.css";

const ModalBlur = ({ title, closeLabel, actions, children, onClose }) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    // Alert if clicked on outside of element
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        alert("You clicked outside of me!");
        onClose();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, wrapperRef]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {children && (
        <div className={styles.layout} ref={wrapperRef}>
          <header className={styles.header}>
            <h2>{title}</h2>

            <div>
              {actions}
              <button
                type="button"
                onClick={handleClose}
                className={styles.closeBtn}
              >
                {closeLabel}
              </button>
            </div>
          </header>

          <div className={styles.content}>
            {children}
          </div>
        </div>
      )}
      <div className={styles.overlay}></div>
    </>
  );
};

ModalBlur.propTypes = {
  title: string,
  closeLabel: string,
  children: oneOfType([ element, arrayOf(element) ]),
  onClose: func,
};

ModalBlur.defaultProps = {
  title: "Modal title",
  closeLabel: "Close",
  children: {},
  onClose: () => {},
};

export default ModalBlur;