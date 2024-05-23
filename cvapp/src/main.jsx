import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import {General1} from './components/General1.jsx'
import Education from './components/Education.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <General1/>
    <Education/>
  </React.StrictMode>,
)
