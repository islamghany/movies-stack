import HomeLayout from "@/layout/HomeLayout";
import Movie from "@/pages/movie";
import Movies from "@/pages/movies";
import NotFound from "@/pages/NotFound";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <HomeLayout />,
    children: [
      {
        element: <Movies />,
        index: true,
      },
      {
        element: <Movie />,
        path: "/movies/:id",
      },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
