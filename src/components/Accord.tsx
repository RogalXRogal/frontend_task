import React from "react";
import { useState } from "react";

import ArrowClose from "./ArrowClose";
import ArrowOpen from "./ArrowOpen";
import { planetDetails } from "./Types";

const Accord = ({
  title,
  id,
  content,
}: {
  title: string;
  id: string;
  content: any;
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div
        className="accordion-title"
        key={id}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div> {isActive ? <ArrowClose /> : <ArrowOpen />} </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((planet: planetDetails) => (
            <li>{planet.name}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accord;
