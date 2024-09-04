import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AppLayout } from "./components";
import {
  AboutUs,
  PrivacyPolicy,
  Videos,
  RegisterPage,
  Home,
  ManageVideos,
  ManageUser,
} from "./pages";
import RedefinePassword from "./pages/RedefinePassword/RedefinePassword";
import useAuthStore from "./stores/auth";

function PrivateRoutes() {
  const auth = useAuthStore((state) => state?.auth);

  if (auth) return <Outlet />;

  return <Navigate to="/register" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="video" element={<Videos />} />
          <Route path="manage-videos" element={<ManageVideos />} />
          <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="sobre-nos" element={<AboutUs />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="redefine-password/:token" element={<RedefinePassword />} />
      </Route>
    </Route>,
  ),
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
