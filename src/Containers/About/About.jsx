import React from "react";
import { Header } from "../../Components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <main>
      <Header title="About this app" />
      <section>
        <h3>Hello there!</h3>
        <p>
          This app was created using the Create-React-App tool, npm, webapack, and of course React.
        </p>
      </section>

      <section>
        <h3>Get the code</h3>
        <p>
          <FontAwesomeIcon icon={faCodeBranch} />
          Link to Github pending...
        </p>
      </section>

      <section>
        <h3>Librerías y herramientas notables</h3>
        <p>
          <FontAwesomeIcon icon={faIcons} />
          Íconos por <a href="https://fontawesome.com/">Font Awesome</a>
        </p>
      </section>

      <section>
        <p>
          Developed in 2021 by Ulises Torner Campuzano
        </p>
      </section>
    </main>
  );
};

export default About;