import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/home'
//import About from './pages/About'
import Users from './pages/Users'
//import Settings from './pages/settings'
import UserDetail from './pages/UserDetail'
import Dogs from './pages/dogs'
import DogDetail from './pages/DogDetail'

//import './App.css'

function App() {
  
  const router = createBrowserRouter([
    
    {
      path: "users",
      element: <Users/>
    },
    {
      path: "dogs",
      element: <Dogs/>
    },
    {
      path: "dogs/:id",
      element: <DogDetail/>
    },
    {
      path: "users/:id",
      element: <UserDetail/>
    },
    {
      path: "/",
      element: <Home />
    },
  ])

  return (
    
      <RouterProvider router={router} />
   
  )
}

export default App
