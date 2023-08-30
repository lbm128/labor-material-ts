import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';

import Navigation from 'components/Navigation';

describe('Navigation', () => {
  test('should render properly', async () => {
    renderWithProviders(<Navigation />);

    await act(
      async () =>
        await waitFor(() => expect(screen.getByText(/Menu/i)).toBeInTheDocument())
    );
  });
});
