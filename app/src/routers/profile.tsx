import { createFileRoute, Navigate } from "@tanstack/react-router";
import { memo } from "react";

const RouteComponent = memo(() => {
  return <div>Profile Page</div>;
});

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
  errorComponent: () => <Navigate to="/not-found" />,
  beforeLoad: () => {
    console.log("Collections route is loading");
  },
});
