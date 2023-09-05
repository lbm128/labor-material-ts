import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';

import Labor from 'components/Labor';

describe('Labor', () => {
  test('should render properly', async () => {
    renderWithProviders(<Labor />);

    expect(screen.getByText(/sqft/i)).toBeInTheDocument();
    // await act(
    //   async () =>
    //     await waitFor(() => expect(screen.getByText(/sqft/i)).toBeInTheDocument())
    // );
  });

  test('calculate button should not be disabled', async () => {
    renderWithProviders(<Labor />);

    const calculateButton = screen.getByRole('button', {name: /calculate/i});

    expect(calculateButton).not.toBeDisabled();
    // await act(
    //   async () =>
    //     await waitFor(() => expect(calculateButton).not.toBeDisabled())
    // );
  });
});
