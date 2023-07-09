import { TooltipContainer } from './styles';

type Payload = {
  color: string;
  dataKey: string;
  name: string;
  value: string | number;
  payload: Record<string, string | number>;
};

interface ChartTooltipProps {
  active?: boolean;
  payload?: Payload[];
  label?: string | number;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p>Em {label}</p>
        <h4>População: {payload[0].value}</h4>
      </TooltipContainer>
    );
  }

  return null;
}
