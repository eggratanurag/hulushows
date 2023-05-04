/* eslint-disable no-unused-vars */
import React from 'react'
import {PublicDataProvider} from './context/DataProvider'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PublicDataProvider>
    <App />
  </PublicDataProvider>,
)
