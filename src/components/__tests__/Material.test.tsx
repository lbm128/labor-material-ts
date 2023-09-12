import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'common/tests/utils';
import Material from 'components/Material';

describe('Material', () => {
  test('should render properly', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Material />
      </BrowserRouter>
    );

    expect(screen.getByText(/sqft/i)).toBeInTheDocument();
  });

  test('calculate button should not be disabled', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Material />
      </BrowserRouter>
    );

    const calculateButton = screen.getByRole('button', { name: /calculate/i });

    expect(calculateButton).not.toBeDisabled();
  });

  test('should display 504 when calculate button is pressed with specific inputs', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <BrowserRouter>
        <Material />
      </BrowserRouter>
    );

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

    user.type(sqftGallonInput, '300');
    await waitFor(() => expect(sqftGallonInput).toHaveValue('300'));

    user.type(lengthInput, '10');
    await waitFor(() => expect(lengthInput).toHaveValue('10'));

    user.type(widthInput, '10');
    await waitFor(() => expect(widthInput).toHaveValue('10'));

    await waitFor(() => user.click(calculateButton));

    await waitFor(() => expect(screen.getByText(/0.33/i)).toBeInTheDocument());
  });

  test('should reset inputs to 0 when clicking Reset', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <BrowserRouter>
        <Material />
      </BrowserRouter>
    );

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
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

    user.type(sqftGallonInput, '300');
    await waitFor(() => expect(sqftGallonInput).toHaveValue('300'));

    user.type(lengthInput, '10');
    await waitFor(() => expect(lengthInput).toHaveValue('10'));

    user.type(widthInput, '10');
    await waitFor(() => expect(widthInput).toHaveValue('10'));

    await waitFor(() => user.click(resetButton));

    await waitFor(() => expect(sqftGallonInput).toHaveValue('0'));
    await waitFor(() => expect(lengthInput).toHaveValue('0'));
    await waitFor(() => expect(widthInput).toHaveValue('0'));
  });
});
