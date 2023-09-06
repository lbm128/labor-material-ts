import { act, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


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
    renderWithProviders(<BrowserRouter><Home /></BrowserRouter>);

    expect(screen.getByText(/page/i)).toBeInTheDocument();
  });

  test('should have 0 material history values', async () => {
    const { store } = renderWithProviders(<BrowserRouter><Home /></BrowserRouter>, { preloadedState: noMaterialState });
    
    await waitFor(async () => {
      expect(store.getState().material.materialHistory.length).toBe(0);
    });
  });

  test('should have 0 labor history values', async () => {
    const { store } = renderWithProviders(<BrowserRouter><Home /></BrowserRouter>, { preloadedState: noLaborState });
    
    await waitFor(async () => {
      expect(store.getState().labor.laborHistory.length).toBe(0);
    });
  });
});
