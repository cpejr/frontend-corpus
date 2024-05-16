import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));
export default function Routes() {
  return <RouterProvider router={router} />;
}
