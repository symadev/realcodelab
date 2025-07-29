import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from "../Components/Files/HomeMain";
import Home from "../Components/Files/Home";



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