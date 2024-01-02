import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import Home from './pages/Home';
import Test from "./pages/Test";
import Tech from "./pages/Tech";
import Mobilite from "./pages/Mobilite";
import Science from "./pages/Science";
import Cine from "./pages/Cine";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import '@fortawesome/fontawesome-free/css/all.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/tech",
    element: <Tech/>,
  },
  {
    path: "/mobilite",
    element: <Mobilite/>,
  },
  {
    path: "/science",
    element: <Science/>,
  },
  {
    path: "/cine",
    element: <Cine/>,
  },
  {
    path: "/inscription",
    element: <Inscription/>,
  },
  {
    path: "/connexion",
    element: <Connexion/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/error",
    element: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);