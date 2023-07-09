import { useMemo } from 'react';

import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  LineChart,
} from 'recharts';

import { ChartTooltip } from './ChartTooltip';

interface ChartProps {
  data: any[];
  type?: 'bar' | 'line';
}

export function Chart({
  data,
  type = 'bar',
  children,
}: React.PropsWithChildren<ChartProps>) {
  const ChartComponent = useMemo(
    () => (type === 'bar' ? BarChart : LineChart),
    [type],
  );

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ChartComponent data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 14 }} />

        <Tooltip content={<ChartTooltip />} />

        {children}
      </ChartComponent>
    </ResponsiveContainer>
  );
}
