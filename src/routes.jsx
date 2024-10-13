import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout } from "./components";
import { Videos } from "./pages";

import VideoPage from "./pages/VideoPage/VideoPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Videos />} />
      <Route path="videos/:name" element={<VideoPage />} />
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
