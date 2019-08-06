import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
