import React from "react";
import { Header } from "../../Components";

const About = () => {
  return (
    <main>
      <Header title="About" />
      <section>
        <h3>Hello there!</h3>
        <p>
          This app was created using the Create-React-App tool, npm, webapack, and of course React.
        </p>
        <p>
          Unit testing done with enzyme
        </p>
      </section>
      <section>
        <h3>Get the code</h3>
        <p>
          Link to Github pending..
        </p>
      </section>
    </main>
  );
};

export default About;