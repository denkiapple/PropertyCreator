import React, { useState } from "react";
import { string, bool } from "prop-types";
import { classes } from "../../constants";

import styles from "./Toggle.module.css";

const Toggle = ({ text, initiallyOn }) => {
  const [selected, setSelected] = useState(initiallyOn);

  return (
    <div className={styles.layout}>
      <p>
        {text}
      </p>
      
      <button
        className={classes(
          styles.toggler,
          selected && styles.optionSelected
        )}
        onClick={() => setSelected(!selected)}
      >
        <div className={styles.bolis}></div>
      </button>
    </div>
  );
};

Toggle.propTypes = {
  text: string,
  initiallyOn: bool,
};

Toggle.defaultProps = {
  text: "Placehoder",
  initiallyOn: false,
};

export default Toggle;