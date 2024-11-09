import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home.jsx"
import MemoryGame from './components/MemoryGame.jsx'
import Kanban from './components/Kanban.jsx'
import Apology from './components/Apology.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "memory-game",
        element: <MemoryGame />
      },
      {
        path: "kanban",
        element: <Kanban />
      }
      ,
      {
        path: "apology",
        element: <Apology />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
