import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';

import AppTwo from './AppTwo';

describe('App', () => {
  test('should render properly', async () => {
    renderWithProviders(<AppTwo />);

    await act(
      async () =>
        await waitFor(() => expect(screen.getByText(/luciano/i)).toBeInTheDocument())
    );
  });
});