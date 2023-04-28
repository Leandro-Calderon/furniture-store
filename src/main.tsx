import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, About, Store,Blog, Gallery, Contact,Error, EntradaBlog } from "./routes"
// import styles from "./app.css"

const router = createBrowserRouter([
{
  path:"/",
  element:<Home/>,
  errorElement:<Error/>,
  // children:[
  //   {
  //     path:"contacts/:contactid",
  //     element:<Contact/>
  //   }
  // ]
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
  element:<Blog/>,
  children: [
    {
      path:"entradaBlog",
      element:<EntradaBlog/>
    }
  ]
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
