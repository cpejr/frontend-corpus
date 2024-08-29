import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout } from "./components";
import { AboutUs, PrivacyPolicy, Videos, RegisterPage } from "./pages";
import ManageVideos from "./pages/ManageVideos/ManageVideos";
import Home from "./pages/Home/Home";
import RedefinePassword from "./pages/RedefinePassword/RedefinePassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="video" element={<Videos />} />
        <Route path="manage-videos" element={<ManageVideos />} />
        <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="sobre-nos" element={<AboutUs />} />
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="redefine-password" element={<RedefinePassword/>}/>
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
