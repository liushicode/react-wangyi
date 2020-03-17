import React from 'react'
import ReatDom from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import './rem'
import './mock/mock-server'
import store from './redux/store'

ReatDom.render(
  // Provider包裹所有组件，提供使用store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)