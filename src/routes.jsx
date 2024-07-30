import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout } from "./components";
import { AboutUs, PrivacyPolicy, Video } from "./pages";
import ManageVideos from "./pages/ManageVideos/ManageVideos";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="video" element={<Video />} />
        <Route path="manage-videos" element={<ManageVideos />} />
        <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="sobre-nos" element={<AboutUs />} />
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
