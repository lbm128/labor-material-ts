import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'common/tests/utils';
import Navigation from 'components/Navigation';

describe('Labor', () => {
  test('should render properly', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const navMenu = screen.getByTitle('navMenu');

    expect(navMenu).toHaveClass('swdc-hidden');
  });

  test('should show nav menu when clicking Menu button', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const navMenu = screen.getByTitle('navMenu');

    expect(navMenu).toHaveClass('swdc-hidden');

    const menuButton = screen.getByRole('button', {
      name: /menu/i,
    });

    await waitFor(() => user.click(menuButton));

    await waitFor(() => expect(navMenu).not.toHaveClass('swdc-hidden'));
  });
});
