import { act, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from 'common/tests/utils';

import Material from 'components/Material';

describe('Material', () => {
  test('should render properly', async () => {
    renderWithProviders(<BrowserRouter><Material /></BrowserRouter>);

    expect(screen.getByText(/sqft/i)).toBeInTheDocument();
  });

  test('calculate button should not be disabled', async () => {
    renderWithProviders(<BrowserRouter><Material /></BrowserRouter>);

    const calculateButton = screen.getByRole('button', {name: /calculate/i});

    expect(calculateButton).not.toBeDisabled();
  });
});
