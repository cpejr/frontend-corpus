import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout } from "./components";
import { AboutUs, PrivacyPolicy, Video } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="video" element={<Video />} />
        <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="sobre-nos" element={<AboutUs />} />
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
