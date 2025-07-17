import { createFileRoute, Navigate } from "@tanstack/react-router";
import { memo } from "react";

const RouteComponent = memo(() => {
  return <h2>Collections Page</h2>;
});

export const Route = createFileRoute("/collections")({
  component: RouteComponent,
  errorComponent: () => <Navigate to="/not-found" />,
  beforeLoad({ context }) {
    console.log(context);
  },
  loader: () => {
    console.log("Collections route is loading");
  },
  shouldReload: true
});
