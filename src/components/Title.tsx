import React from "react";

import useFilms from "./Films";
import { filmDetails } from "./Types";
import Accord from "./Accord";

const Title = () => {
  const { data, isLoading, error } = useFilms();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>zjebało się coś...</h1>;
  }

  return (
    <div className="accordion">
      {data.films.map((films: filmDetails) => (
        <Accord
          title={films.title}
          id={films.id}
          content={films.planetConnection.planets}
        />
      ))}
    </div>
  );
};

export default Title;
