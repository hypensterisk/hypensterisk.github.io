/** @format */

import 'bootstrap/dist/css/bootstrap.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
const children = <StrictMode></StrictMode>
root.render(children)
