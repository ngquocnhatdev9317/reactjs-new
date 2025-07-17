import { createFileRoute, Navigate } from "@tanstack/react-router";
import { memo } from "react";

const RouteComponent = memo(() => {
  return <h2>Home Page</h2>;
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  errorComponent: () => <Navigate to="/not-found" />,
  beforeLoad: () => {
    console.log("Collections route is loading");
  },
});