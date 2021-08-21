import React from "react";
import { shape } from "prop-types";
import { PROPERTY_TYPES } from "../../constants";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faHome,
  faDog,
  faToilet,
  faBed,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons'


import styles from "./Card.module.css";

const Card = ({ property }) => {
  const {
    type = 0,
    address: {
      street = "Street",
      extNumber = 0,
    },
    areas: {
      constructionSize = 0,
    },
    characteristics: {
      rooms = 0,
      bathrooms = 0,
      parkingSpaces = 0,
    },
    amenities: {
      petsAllowed = false,
    },
  } = property;

  const addressTitle = `${extNumber} ${street}`;

  return (
    <div className={styles.layout}>
      <h2 data-testid="header">
        {addressTitle}
      </h2>

      <div className={styles.charsContainer}>
        <div>
          {type === 1 ? (
            <FontAwesomeIcon icon={faBuilding} className={styles.searchIcon} />
          ) : (
            <FontAwesomeIcon icon={faHome} className={styles.searchIcon} />
          )}
        </div>
        <div>
          {constructionSize}mt<sup>2</sup>
        </div>
      </div>

      <div className={styles.charsContainer}>
        <div>
          <FontAwesomeIcon icon={faBed} className={styles.searchIcon} />
          <span className={styles.info}>
            {rooms}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faToilet} className={styles.searchIcon} />
          <span className={styles.info}>
            {bathrooms}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCarSide} className={styles.searchIcon} />
          <span className={styles.info}>
            {parkingSpaces}
          </span>
        </div>

        {petsAllowed && (
          <div>
            <FontAwesomeIcon icon={faDog} className={styles.searchIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  property: shape({}),
};

Card.defaultProps = {
  property: {},
};

export default Card;