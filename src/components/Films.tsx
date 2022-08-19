import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

import { client } from "../graphql/client";

const getFilms = gql`
    query{
        allFilms{
            films{
                id
                title
                planetConnection{
                    planets{
                    id
                    name
                    rotationPeriod
                    orbitalPeriod
                    diameter
                    climates
                    surfaceWater
                    population
                    }
                }
            }
        }
    }
    
`

const useFilms = () => {
    return useQuery(["getFilms"], async () => {
            const data = await client.request(getFilms);
            return data.allFilms;
        }
    );
}

export default useFilms;
