import { useMemo } from 'react';

import { Bar, Line } from 'recharts';

import { Chart } from '@/components/Chart';
import { Drawer } from '@/components/Drawer';
import type { BairroProperties } from '@/models';
import { getPopulacaoBairros } from '@/services/bairros';
import { theme } from '@/styles';

import { PopulationContainer } from './styles';

type DrawerProps = Parameters<typeof Drawer>[0];
type PopulationDrawerProps = Omit<DrawerProps, 'children' | 'title'> & {
  bairro: BairroProperties;
};

export function PopulationDrawer({
  bairro: { id, name, setor, zona },
  ...restProps
}: PopulationDrawerProps) {
  const populacaoBairro = useMemo(() => {
    const population = getPopulacaoBairros();

    return population[id];
  }, [id]);

  return (
    <Drawer title={name} {...restProps}>
      <PopulationContainer>
        <span>
          <p>Setor: {setor}</p>
          <p>Zona: {zona}</p>
        </span>

        <section>
          <h2>Evolução Populacional</h2>

          <p>Em Barra</p>
          <Chart data={populacaoBairro}>
            <Bar
              dataKey="populacao"
              fill={theme.colors['purple-400']}
              label={{ position: 'inside', fill: theme.colors.white }}
            />
          </Chart>

          <p>Em Linha</p>
          <Chart type="line" data={populacaoBairro}>
            <Line dataKey="populacao" color={theme.colors['purple-400']} />
          </Chart>
        </section>
      </PopulationContainer>
    </Drawer>
  );
}
