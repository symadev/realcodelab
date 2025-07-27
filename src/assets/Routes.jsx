import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from "../Components/HomeMain";
import Home from "../Components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children: [
      { 
        path: "/",
    element: <Home></Home>,

      }
    ]
  },
]);

export default router;