import React from "react";
import ReactLoading from "react-loading";

import useFilms from "./Films";
import { filmDetails } from "./Types";
import AccordionItem from "./AccordionItem";
import Header from "./Header";
import styles from "./Styles/Accordion.module.css";

const Accordion = () => {
  //Data
  const { data, isLoading, error } = useFilms();

  //Style classes
  const spin = `${styles.spin}`;
  const accordion = `${styles.accordion}`;

  //Loading spin if data is loading
  if (isLoading) {
    return (
      <div className={spin}>
        <ReactLoading type="spin" color="black" height={100} width={100} />
      </div>
    );
  }

  //Error check
  if (error) {
    console.log(error);
    return <h1>Nie działa... magia</h1>;
  }

  return (
    <div className={accordion}>
      <Header />
      {data.films.map((films: filmDetails) => (
        <AccordionItem
          title={films.title}
          id={films.id}
          content={films.planetConnection.planets}
        />
      ))}
    </div>
  );
};

export default Accordion;
