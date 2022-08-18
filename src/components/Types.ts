export interface filmDetails {
    id: string,
    title: string,
    planetConnection: planetConnectionDetails,
}
  
export interface planetConnectionDetails {
    planets: Array<planetDetails>,
}
  
export interface planetDetails {
    id: string,
    name: string,
    diameter: number,
    rotationPeriod: number,
    orbitalPeriod : number,
    population: number,
    climates: string | string[],
    surfaceWater: number,
}

