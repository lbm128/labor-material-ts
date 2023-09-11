import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

  test('should display 504 when calculate button is pressed with specific inputs', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <BrowserRouter>
        <Labor />
      </BrowserRouter>
    );

    const calculateButton = screen.getByRole('button', {
      name: /calculate/i,
    });

    const dollarSqftInput = screen.getByRole('textbox', {
      name: /dollarSqft/i,
    });

    const lengthInput = screen.getByRole('textbox', {
      name: /length/i,
    });

    const widthInput = screen.getByRole('textbox', {
      name: /width/i,
    });

    user.type(dollarSqftInput, '7');
    await waitFor(() => expect(dollarSqftInput).toHaveValue('7'));

    user.type(lengthInput, '8');
    await waitFor(() => expect(lengthInput).toHaveValue('8'));

    user.type(widthInput, '9');
    await waitFor(() => expect(widthInput).toHaveValue('9'));

    await waitFor(() => user.click(calculateButton));

    await waitFor(() => expect(screen.getByText(/504.00/i)).toBeInTheDocument());
  });
});
