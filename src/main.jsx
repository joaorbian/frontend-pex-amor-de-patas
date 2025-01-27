import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './routes/About.jsx'
import Announce from './routes/Announce.jsx'
import HeplUs from './routes/HeplUs.jsx'
import Login from './routes/Login.jsx'
import Adopt from './routes/Adopt.jsx'
import Home from './routes/Home.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children: [
   {
    path: "/", element: <Home/>,
    },
    {
      path: "about", element: <About />
    },
    {
      path: "helpUs", element: <HeplUs />
    },
    {
      path: "announce", element: <Announce />
    },
    {
      path: "adopt", element: <Adopt />
    },
    {
      path: "login", element: <Login />
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
