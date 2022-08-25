import React from "react";
import { useState } from "react";

import ArrowClose from "./ArrowClose";
import ArrowOpen from "./ArrowOpen";
import ArrowSort from "./Assets/ARROWSORT.png";
import { planetDetails } from "./Types";
import styles from "./Styles/Accordion.module.css";

const AccordionItem = ({
  title,
  id,
  content,
}: {
  title: string;
  id: string;
  content: any;
}) => {
  //Accordion states
  const [isActive, setIsActive] = useState(false);

  //Style classes
  const accordionTitle = `${styles.accordionTitle}`;
  const accordionContent = `${styles.accordionContent}`;
  const gridContainer = `${styles.gridContainer}`;
  const gridItem = `${styles.gridItem}`;
  const gridItem1 = `${styles.gridItem1}`;

  return (
    <div className="accordion-item" key={id}>
      <div className={accordionTitle} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div> {isActive ? <ArrowClose /> : <ArrowOpen />} </div>
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
