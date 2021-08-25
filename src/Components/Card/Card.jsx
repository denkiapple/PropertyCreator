import React from "react";
import { shape } from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faHome,
  faCity,
  faDog,
  faToilet,
  faBed,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons'


import styles from "./Card.module.css";

const Card = ({ property }) => {
  const {
    type,
    address: {
      street,
      extNumber,
    },
    areas: {
      constructionSize,
    },
    characteristics: {
      rooms,
      bathrooms,
      parkingSpaces,
    },
    amenities: {
      petsAllowed,
    },
  } = property;

  const addressTitle = `${extNumber} ${street}`;
  const propertyIcon = () => {
    switch(type) {
      case 1:
        return <FontAwesomeIcon icon={faBuilding} className={styles.searchIcon} />;
      case 2:
        return <FontAwesomeIcon icon={faHome} className={styles.searchIcon} />;
      default:
        return <FontAwesomeIcon icon={faCity} className={styles.searchIcon} />;
    }
  };

  return (
    <div className={styles.layout}>
      <h2 data-testid="header">
        {addressTitle}
      </h2>

      <div className={styles.charsContainer}>
        <div>
          {propertyIcon()}
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
  property: {
    type: 0,
    address: {
      street: "Street",
      extNumber: 0,
    },
    areas: {
      constructionSize: 0,
    },
    characteristics: {
      rooms: 0,
      bathrooms: 0,
      parkingSpaces: 0,
    },
    amenities: {
      petsAllowed: false,
    },
  },
};

export default Card;