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

    expect(navMenu.classList.contains('swdc-hidden')).toBe(true);
  });

  test('should show nav menu when clicking Menu button', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const navMenu = screen.getByTitle('navMenu');

    expect(navMenu.classList.contains('swdc-hidden')).toBe(true);

    const menuButton = screen.getByRole('button', {
      name: /menu/i,
    });

    await waitFor(() => user.click(menuButton));

    await waitFor(() => expect(navMenu.classList.contains('swdc-hidden')).toBe(false));
  });
});
