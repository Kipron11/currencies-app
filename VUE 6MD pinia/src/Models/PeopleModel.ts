export type PeopleModel = {
  count: number;
  next: string;
  previous: null;
  results: PeopleResultsModel[];
};

export type PeopleResultsModel = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [""];
  species: [];
  vehicles: [""];
  created: string;
  edited: string;
  url: string;
};
