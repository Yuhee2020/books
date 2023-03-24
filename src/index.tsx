import React from 'react'

import { Alert, ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { theme } from './assets/theme/theme'
import { store } from './store/Store'

const { ErrorBoundary } = Alert
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>,
)
