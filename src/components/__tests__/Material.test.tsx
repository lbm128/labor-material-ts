import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';

import Material from 'components/Material';

describe('Material', () => {
  test('should render properly', async () => {
    renderWithProviders(<Material />);

    await act(
      async () =>
        await waitFor(() => expect(screen.getByText(/gallons/i)).toBeInTheDocument())
    );
  });
});
