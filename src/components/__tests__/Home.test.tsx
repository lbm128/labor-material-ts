import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';

import Home from 'components/Home';

describe('Home', () => {
  test('should render properly', async () => {
    renderWithProviders(<Home />);

    await act(
      async () =>
        await waitFor(() => expect(screen.getByText(/Home/i)).toBeInTheDocument())
    );
  });
});
