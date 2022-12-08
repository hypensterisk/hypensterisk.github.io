/** @format */

import 'bootstrap/dist/css/bootstrap.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Navbar from './app/navbar'

const container = document.getElementById('root')
const root = createRoot(container)
const children = (
  <StrictMode>
    <Navbar />
  </StrictMode>
)
root.render(children)
