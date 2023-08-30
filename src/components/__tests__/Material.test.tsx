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

  test('calculate button should not be disabled', async () => {
    renderWithProviders(<Material />);

    const calculateButton = screen.getByRole('button', {name: /calculate/i});

    await act(
      async () =>
        await waitFor(() => expect(calculateButton).not.toBeDisabled())
    );
  });
});