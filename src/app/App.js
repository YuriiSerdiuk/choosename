import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { MainWrapper } from "../components/mainWrapper/mainWrapper";

import { getInitLocalstorageDataEmpty, setDefaultLocalstorageData } from "../helpers/helpers";
import SignUp from "../components/sign-up/SignUp";
import SignInSide from "../components/sign-in/SignInSide";

import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainWrapper />,
      errorElement: <div>Ops 404</div>,
    },
    {
      path: "/signin",
      element: <SignInSide />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  useEffect( () => {
    // set default localstorage data
    if (getInitLocalstorageDataEmpty()) {
      setDefaultLocalstorageData();
    }
  }, []);

  return (<div className="App">
    <RouterProvider router={router} />
  </div>);
}

export default App;
