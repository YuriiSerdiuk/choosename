
import { createBrowserRouter } from "react-router-dom";
import { MainWrapper } from "../components/mainWrapper/mainWrapper";
import SignUp from "../components/sign-up/SignUp";
import SignInSide from "../components/sign-in/SignInSide";

export const router = createBrowserRouter([
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