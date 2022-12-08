/** @format */

import 'bootstrap/dist/css/bootstrap.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Footer from './app/footer'
import Header from './app/header'

const container = document.getElementById('root')
const root = createRoot(container)
const children = (
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>
)
root.render(children)
