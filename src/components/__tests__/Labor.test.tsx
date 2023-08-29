import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';

import Labor from 'components/Labor';

describe('Labor', () => {
  test('should render properly', async () => {
    renderWithProviders(<Labor />);

    await act(
      async () =>
        await waitFor(() => expect(screen.getByText(/labor/i)).toBeInTheDocument())
    );
  });
});
