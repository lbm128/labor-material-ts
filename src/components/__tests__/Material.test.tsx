import { act, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from 'common/tests/utils';

import Material from 'components/Material';
import userEvent from '@testing-library/user-event';

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

  test('should display 504 when calculate button is pressed with specific inputs', async () => {
    const user = userEvent.setup();

    renderWithProviders(<BrowserRouter><Material /></BrowserRouter>);

    const calculateButton = screen.getByRole('button', {
      name: /calculate/i,
    });

    const sqftGallonInput = screen.getByRole('textbox', {
      name: /sqftGallon/i,
    });

    const lengthInput = screen.getByRole('textbox', {
      name: /length/i,
    });

    const widthInput = screen.getByRole('textbox', {
      name: /width/i,
    });

    await user.type(sqftGallonInput, '300');
    await waitFor(() => expect(sqftGallonInput).toHaveValue('300'));

    await user.type(lengthInput, '10');
    await waitFor(() => expect(lengthInput).toHaveValue('10'));

    await user.type(widthInput, '10');
    await waitFor(() => expect(widthInput).toHaveValue('10'));

    await waitFor(async () => {
      await user.click(calculateButton);
    });

    expect(screen.getByText(/0.33/i)).toBeInTheDocument();
  });
});
