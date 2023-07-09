import geometria_bairros from '@/api/geometrias_bairros.json';
import populacao_bairros from '@/api/populacao_bairros.json';
import type { PopulationGrowth } from '@/models';

export function getGeometriaBairros() {
  return geometria_bairros as any as GeoJSON.FeatureCollection;
}

export function getPopulacaoBairros() {
  const formattedPopulacao = populacao_bairros.reduce(
    (acc, { id_geometria, ...restProps }) => ({
      ...acc,
      [id_geometria]: (acc?.[id_geometria] ?? []).concat({ ...restProps }),
    }),
    {} as PopulationGrowth,
  );

  return formattedPopulacao;
}
