import { render, screen } from '@/__tests__/test-utils';

import { PopulationDrawer } from '.';

const MOCK_BAIRRO = {
  id: 1,
  name: 'Jd. Colinas',
  setor: 'Aquarius',
  zona: 'Oeste',
};

describe('PopulationDrawer', () => {
  it('should render bairro info', () => {
    const mockedOnRequestClose = jest.fn();

    render(
      <PopulationDrawer
        show
        bairro={MOCK_BAIRRO}
        onClose={mockedOnRequestClose}
      />,
    );

    expect(screen.getByText(MOCK_BAIRRO.name)).toBeTruthy();

    expect(screen.getByText(`Setor: ${MOCK_BAIRRO.setor}`)).toBeTruthy();
    expect(screen.getByText(`Zona: ${MOCK_BAIRRO.zona}`)).toBeTruthy();
  });
});
