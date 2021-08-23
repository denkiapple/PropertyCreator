import React from "react";
import { Header } from "../../Components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faCodeBranch, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

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
          <a href="https://github.com/denkiapple/PropertyCreator" alt="github repository link">
            Link to Github
          </a>
        </p>
      </section>

      <section>
        <h3>Libraries and used tools</h3>
        <p>
          <FontAwesomeIcon icon={faIcons} />
          Icons by <a href="https://fontawesome.com/" alt="font awesome link">Font Awesome</a>
        </p>

        <p>
          <FontAwesomeIcon icon={faClipboardCheck} />
          Unit Testing by <a 
            href="https://testing-library.com/docs/react-testing-library/intro"
            alt="React testing library link"
          >React-Testing-Library</a>
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