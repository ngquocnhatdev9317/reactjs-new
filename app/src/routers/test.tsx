import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
  errorComponent: () => <Navigate to="/not-found" />,
  beforeLoad: () => {
    console.log("Collections route is loading");
  },
});

function RouteComponent() {
  return <div>Test Page</div>;
};
