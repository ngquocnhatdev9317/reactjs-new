import { Outlet, useRouter, useRouterState } from "@tanstack/react-router";
import { memo, useCallback } from "react";
import { clsx } from "clsx";

import style from "@/components/Layout/style.module.css";
import { BookMarked, FileText, House, LogIn, User } from "lucide-react";
import NavButton from "@/components/common/NavButton";
import Button from "@/components/common/Button";

const Layout = memo(() => {
  const router = useRouter();

  const currentPath = useRouterState({
    select: (state) => state.location.pathname,
  })

  const login = useCallback(() => {
    router.navigate({ to: "/login" });
  }, []);

  return (
    <>
      <header className={clsx(style.header_wrapper, currentPath.includes("login") && style.header_wrapper__blue)}>
        <h1 className={clsx(style.header_title)}>Let&lsquo;s Learn JP</h1>
        {
          0 === 0 ? (
            <Button onClick={login} icon={<LogIn size="1.25rem" color="#fff" />}>
              Login
            </Button>
          ) : null
        }
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={clsx(style.footer, currentPath.includes("login") && style.footer__blue)}>
        <nav className={clsx(style.navbar)}>
          <NavButton className="" to="/" icon={<House />}>
            Home
          </NavButton>
          <NavButton className="" to="/collections" icon={<BookMarked />}>
            Collections
          </NavButton>
          <NavButton className="" to="/test" icon={<FileText />}>
            Test
          </NavButton>
          <NavButton className="" to="/profile" icon={<User />}>
            Profile
          </NavButton>
        </nav>
      </footer>
    </>
  );
});

Layout.displayName = "Layout";
export default Layout;
