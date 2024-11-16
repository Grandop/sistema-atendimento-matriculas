import { createBrowserRouter } from "react-router-dom";
import { Home } from "../screens/Home";
import { InstitutionalView } from "../screens/Institutional";
import { StudentView } from "../screens/Student";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/institutional",
    element: <InstitutionalView />,
  },
  {
    path: "/student",
    element: <StudentView />,
  },
]);
