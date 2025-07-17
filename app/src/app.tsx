import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import useAuth from "@/auth/firebase";

const router = createRouter({
  routeTree,
  defaultPreload: false,
  scrollRestoration: true,
  trailingSlash: "never",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { user, login, logout } = useAuth();

  return <RouterProvider router={router} context={{ user, login, logout }} />;
}

export default App;
