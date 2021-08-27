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
  faRuler,
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
        return (
          <div>
            <FontAwesomeIcon icon={faBuilding} className={styles.searchIcon} />
            <span className={styles.info}>
              Apartment
            </span>
          </div>
        );
      case 2:
        return (
          <div>
            <FontAwesomeIcon icon={faHome} className={styles.searchIcon} />
            <span className={styles.info}>
              House
            </span>
          </div>
        );
      default:
        return (
          <div>
            <FontAwesomeIcon icon={faCity} className={styles.searchIcon} />
            <span className={styles.info}>
              Development
            </span>
          </div>
        );
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
          <FontAwesomeIcon icon={faRuler} className={styles.searchIcon} />
          <span className={styles.info}>
            {constructionSize}mt<sup>2</sup>
          </span>
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