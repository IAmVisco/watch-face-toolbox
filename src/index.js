import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/scss/bootstrap.scss'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()
