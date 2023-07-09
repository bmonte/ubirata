import { render, screen } from '@/__tests__/test-utils';

import { ChartTooltip } from '.';

type ChartTooltipProps = Parameters<typeof ChartTooltip>[0];

const MOCKED_PROPS: ChartTooltipProps = {
  active: true,
  label: '1999',
  payload: [
    {
      color: '#FFF',
      dataKey: 'ano',
      name: '',
      payload: {},
      value: 700000,
    },
  ],
};

describe('ChartTooltip', () => {
  it('should render population value at specific year', () => {
    render(<ChartTooltip {...MOCKED_PROPS} />);

    expect(screen.getByText(`Em ${MOCKED_PROPS.label}`)).toBeTruthy();

    expect(
      screen.getByText(`População: ${MOCKED_PROPS?.payload?.[0].value}`),
    ).toBeTruthy();
  });

  it('should not render when not has props', () => {
    render(<ChartTooltip />);

    expect(screen.queryByText('População')).not.toBeInTheDocument();
  });

  it('should not render when active is false', () => {
    const newProps = Object.assign(MOCKED_PROPS, { active: false });

    render(<ChartTooltip {...newProps} />);

    expect(screen.queryByText('População')).not.toBeInTheDocument();
  });

  it('should not render if payload is empty', () => {
    const newProps = Object.assign(MOCKED_PROPS, { payload: [] });

    render(<ChartTooltip {...newProps} />);

    expect(screen.queryByText('População')).not.toBeInTheDocument();
  });
});
