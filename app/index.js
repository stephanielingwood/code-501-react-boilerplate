import React from 'react'
import { render } from 'react-dom'

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

const page = (
  <div>
    <h1>Welcome to Code 501</h1>
    <h2>Building Web Apps with React + Redux</h2>
  </div>
)

render(page, document.getElementById('app'))
