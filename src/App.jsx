import { createBrowserRouter,RouterProvider } from "react-router-dom"
import AdminDashBoard from './components/AdminDashBoard'
import SignIn from './auth_componets/SignIn'
import SignUp from './auth_componets/SignUp'
import './App.css'
import Home from "./components/Home"
import HomeLayout from "./components/HomeLayout"
import ContactUs from "./components/ContactUs"
import TestSeries from "./components/TestSeries"
import About from "./components/About"
import Resourse from "./components/Resourse"
import UserdashBoard from './components/UserdashBoard'

function App() {

  const Browser_router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "test-series", element: <TestSeries /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUp /> },
        { path:"about", element: <About/> },
        {path :"resources",element:<Resourse/>}
      ],
    },
    { path: "/admin", element: <AdminDashBoard /> },
    {
      path:'user-dashboard',
      element:<UserdashBoard/>
    }
  ]);

  return (
    <>
    <RouterProvider router={Browser_router}/>
    </>
  )
}

export default App
