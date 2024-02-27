import './styles/index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
//
import store from "./store/store"
import {Provider} from "react-redux";
// import { BrowserRouter } from 'react-router-dom'
//
// import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import HomePage from './pages/Home/Home';

(async () => {
    // const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        // <React.StrictMode>
        // <ReduxProvider store={configureAppStore(preloadedState)}>
        <Provider store={store}>
            <AppContextProvider>
                <HomePage />
            </AppContextProvider>
        </Provider>
        // </ReduxProvider>
        // </React.StrictMode>
    );
})();
