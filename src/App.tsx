import React from 'react'

import './App.scss'
import { FloatButton } from 'antd'

import { AppHeader } from './components/appHeader/AppHeader'
import { RequestErrorHandler } from './components/requestErrorHandler/requestErrorHandler'
import { Routing } from './components/rotes/Rotes'

const App = () => {
  return (
    <div className="App">
      <RequestErrorHandler />
      <AppHeader />
      <Routing />
      <FloatButton.BackTop shape="square" />
    </div>
  )
}

export default App
