import React from "react";
import { useState } from "react";

import styles from "./Styles/Accordion.module.css";
import stylesGrid from "./Styles/Grid.module.css";

import arrowClose from "./Assets/ARROWCLOSE.svg";
import arrowOpen from "./Assets/ARROWOPEN.svg";

const AccordionItem = ({
  title,
  id,
  content,
}: {
  title: string;
  id: string;
  content: any;
}) => {
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
  //Accordion states
  const [isActive, setIsActive] = useState(false);

  //Style classes
  const accordionTitle = `${styles.accordionTitle}`;
  const accordionContent = `${styles.accordionContent}`;
  const gridContainer = `${stylesGrid.gridContainer}`;
  const gridItem = `${stylesGrid.gridItem}`;
  const gridItem1 = `${stylesGrid.gridItem1}`;

  return (
    <div className="accordion-item" key={id}>
      <div className={accordionTitle} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={arrowClose} alt="arrow close" />
          ) : (
            <img src={arrowOpen} alt="arrow open" />
          )}
        </div>
      </div>
      {isActive && (
        <div className={accordionContent}>
          <div className={gridContainer}>
            <>
              <div className={gridItem1}>Planet Name</div>
              <div className={gridItem}> Rotation period</div>
              <div className={gridItem}> Orbital period</div>
              <div className={gridItem}>Diameter</div>
              <div className={gridItem}>Climate</div>
              <div className={gridItem}>Surface water</div>
              <div className={gridItem}>Population</div>
            </>
            {content.map((planet: planetDetails) => (
              <>
                <div className={gridItem1}>{planet.name}</div>
                <div className={gridItem}>{planet.rotationPeriod}</div>
                <div className={gridItem}>{planet.orbitalPeriod}</div>
                <div className={gridItem}>{planet.diameter}</div>
                <div className={gridItem}>{planet.climates}</div>
                <div className={gridItem}>{planet.surfaceWater}</div>
                <div className={gridItem}>{planet.population}</div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
