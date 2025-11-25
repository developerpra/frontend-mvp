import GuardedRoute from "./GuardedRoute";
import { safeLazy } from "@/shared/utils/safeLazy";
import NotFound from "@/shared/error/NotFound";
import { useRoutes } from "react-router-dom";

// Home Landing Page
const Home = safeLazy("/src/shared/components/Dashboard.tsx");

// Modules
const Maintenance = safeLazy("/src/modules/maintenance/pages/Maintenance.tsx");

// PWA modules
const Pwa1Home = safeLazy("/src/modules/pwa-module1/pages/Pwa1Home.tsx");

export default function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <GuardedRoute element={<Home />} isPwa={false} />,
    },
    {
      path: "/maintenance",
      element: <GuardedRoute element={<Maintenance />} isPwa={false} />,
    },
    {
      path: "/pwa-1",
      element: <GuardedRoute element={<Pwa1Home />} isPwa={true} />,
    },

    { path: "*", element: <NotFound /> },
  ]);
}
