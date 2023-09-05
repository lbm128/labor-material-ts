import { act, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from 'common/tests/utils';

import Labor from 'components/Labor';

describe('Labor', () => {
  test('should render properly', async () => {
    renderWithProviders(<BrowserRouter><Labor /></BrowserRouter>);

    expect(screen.getByText(/sqft/i)).toBeInTheDocument();
  });

  test('calculate button should not be disabled', async () => {
    renderWithProviders(<BrowserRouter><Labor /></BrowserRouter>);

    const calculateButton = screen.getByRole('button', {name: /calculate/i});

    expect(calculateButton).not.toBeDisabled();
  });
});
