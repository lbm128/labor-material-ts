import { act, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from 'common/tests/utils';
import laborPreloadedState from 'store/preloaded-states/labor';
import materialPreloadedState from 'store/preloaded-states/material';

import Home from 'components/Home';

const emptyLaborHistory: string[] = [];
const emptyMaterialHistory: string[] = [];

const noMaterialState = {
  labor: laborPreloadedState,
  material: { materialHistory: emptyMaterialHistory }
}

const noLaborState = {
  labor: { laborHistory: emptyLaborHistory },
  material: materialPreloadedState
}

describe('Home', () => {
  test('should render properly', async () => {
    renderWithProviders(<Home />);

    await act(
      async () =>
        await waitFor(() => expect(screen.getByText(/Home/i)).toBeInTheDocument())
    );
  });

  test('should have 0 material history values', async () => {
    const { store } = renderWithProviders(<Home />, { preloadedState: noMaterialState });
    
    await act(
      async () =>
        await waitFor(() => expect(store.getState().material.materialHistory.length).toBe(0))
    );
  });

  test('should have 0 labor history values', async () => {
    const { store } = renderWithProviders(<Home />, { preloadedState: noLaborState });
    
    await act(
      async () =>
        await waitFor(() => expect(store.getState().labor.laborHistory.length).toBe(0))
    );
  });
});
