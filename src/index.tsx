import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/Store";
import {BrowserRouter} from "react-router-dom";
import {Alert, ConfigProvider} from "antd";
import {theme} from "./assets/theme/theme";

const {ErrorBoundary} = Alert;
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <Provider store={store}>
                <ConfigProvider theme={theme}>
                    <App/>
                </ConfigProvider>
            </Provider>
        </BrowserRouter>
    </ErrorBoundary>
);

