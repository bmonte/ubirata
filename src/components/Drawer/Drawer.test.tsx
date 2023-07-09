import { fireEvent, render, screen } from '@/__tests__/test-utils';

import { Drawer } from '.';

describe('Drawer', () => {
  const mockedOnRequestClose = jest.fn();

  beforeEach(() => {
    mockedOnRequestClose.mockClear();
  });

  it('should render', () => {
    const mockedTitle = 'Drawer';

    render(
      <Drawer show title={mockedTitle} onClose={mockedOnRequestClose}>
        <p>Content</p>
      </Drawer>,
    );

    expect(screen.getByText(mockedTitle)).toBeTruthy();
  });

  it('should be able to render children', () => {
    const mockedTitle = 'Drawer';

    render(
      <Drawer show title={mockedTitle} onClose={mockedOnRequestClose}>
        <p>Content</p>
      </Drawer>,
    );

    expect(screen.getByText('Content')).toBeTruthy();
  });

  it('should call onClose function when click on close button', () => {
    render(
      <Drawer show title="Drawer" onClose={mockedOnRequestClose}>
        <p>Content</p>
      </Drawer>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockedOnRequestClose).toBeCalledTimes(1);
  });

  it('should call onClose function when click ESC', () => {
    const mockedTitle = 'Drawer';

    render(
      <Drawer show title={mockedTitle} onClose={mockedOnRequestClose}>
        <p>Content</p>
      </Drawer>,
    );

    fireEvent.keyDown(screen.getByText(mockedTitle), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(mockedOnRequestClose).toBeCalledTimes(1);
  });
});
