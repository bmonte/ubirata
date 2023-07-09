export type PopulationGrowth = Record<
  number,
  Array<{
    ano: string;
    populacao: number;
  }>
>;

export type BairroProperties = {
  id: number;
  name: string;
  setor: string;
  zona: string;
};
