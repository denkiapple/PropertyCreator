import React from "react";
import { Header } from "../../Components";

import { Grid } from "../../Components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faCodeBranch, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

import styles from "./About.module.css";

const About = () => {
  return (
    <main>
      <Header title="About this app" />
      <section>
        <h3>Hello there!</h3>
        <p>
          This app was created using the Create-React-App tool, npm, webpack, and of course React. 
          This software is not production ready! It is just a simple demo/test of some utilities 
          and frameworks. Feel free to look at the code and give me some feedback if you desire.
        </p>
      </section>

      <section>
        <h3>Get the code</h3>
        <a
          href="https://github.com/denkiapple/PropertyCreator"
          alt="github repository link"
          className={styles.largeLink}
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          <span>
            Github repository
          </span>
        </a>
      </section>

      <section>
        <h3>Libraries and used tools</h3>
        <p>The following links will redirect you to the respective projects:</p>
        <Grid>
          <a
            href="https://fontawesome.com/"
            alt="font awesome link"
            className={styles.largeLink}
          >
            <FontAwesomeIcon icon={faIcons} />
            <span>
              Icons by Font Awesome
            </span>
          </a>
          
          <a
            href="https://testing-library.com/docs/react-testing-library/intro"
            alt="React testing library link"
            className={styles.largeLink}
          >
            <FontAwesomeIcon icon={faClipboardCheck} />
            <span>
              Unit Testing by React-Testing-Library
            </span>
          </a>
        </Grid>
      </section>

      <section>
        <p>
          Developed in August 2021 by Ulises Torner Campuzano
        </p>
      </section>
    </main>
  );
};

export default About;