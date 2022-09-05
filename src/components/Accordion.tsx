import React from "react";
import ReactLoading from "react-loading";

import useFilms from "./Films";
import AccordionItem from "./AccordionItem";
import Header from "./Header";
import styles from "./Styles/Accordion.module.css";
import stylesSpin from "./Styles/Spin.module.css";

const Accordion = () => {
  interface filmDetails {
    id: string;
    title: string;
    planetConnection: planetConnectionDetails;
  }

  interface planetConnectionDetails {
    planets: planetDetails[];
  }

  interface planetDetails {
    id: string;
    name: string;
    diameter: number;
    rotationPeriod: number;
    orbitalPeriod: number;
    population: number;
    climates: string[];
    surfaceWater: number;
  }

  //Data
  const { data, isLoading, error } = useFilms();

  //Style classes
  const accordion = `${styles.accordion}`;
  const spinPosition = `${stylesSpin.spinPosition}`;

  //Loading spin if data is loading
  if (isLoading) {
    return (
      <div className={spinPosition}>
        <ReactLoading type="spin" color="black" width={100} height={100} />
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
