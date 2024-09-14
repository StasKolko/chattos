import {
  RouteObject,
  useRouteError
} from "react-router-dom"

import { NotFoundPage } from "@/pages/NotFoundPage";
import { Suspense } from "react";
import { App } from "../App";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang! </div>;
}

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        async lazy() {
          let { MainPage } = await import("../../pages/MainPage/ui/MainPage");
          return { Component: MainPage };
        },
      },
      {
        path: '/about',
        async lazy() {
          let { AboutPage } = await import("../../pages/AboutPage/ui/AboutPage");
          return { Component: AboutPage };
        },
      },
      {
        path: "/*",
        element: (<Suspense fallback={<div>Loading</div>}>
          <NotFoundPage />
        </Suspense>),
      }
    ]
  }
]