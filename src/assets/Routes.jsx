import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from "../Components/Files/HomeMain";
import Home from "../Components/Files/Home";
import Register from "../Components/Pages/Register";

import Room from "../Components/Pages/Room";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children: [
      { 
        path: "/",
    element: <Home></Home>,
      },
      {
        path: "enter",
    element: <Register></Register>,

      },
      {
        path: "/code/:id",
    element: <Room></Room>,

      }
    ]
  },
]);

export default router;