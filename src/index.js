import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

global.jQuery = require('jquery')
require('bootstrap')

render(<App />, document.getElementById('root'))

registerServiceWorker()
