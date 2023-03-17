import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Store from './routes/Store'
import Blog from './routes/Blog'
import Gallery from './routes/Gallery'
import Contact from "./routes/Contact"

const router = createBrowserRouter([
{
  path:"/",
  element:<Home/>,
  errorElement:<h1>Error</h1>
},
{
  path:"/about",
  element:<About/>
},
{
  path:"/store",
  element:<Store/>
},
{
  path:"/blog",
  element:<Blog/>
},
{
  path:"/gallery",
  element:<Gallery/>
},
{
  path:"/contact",
  element:<Contact/>
}

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>
 

)
