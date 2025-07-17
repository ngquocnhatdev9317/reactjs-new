import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { memo, type JSX, type ReactNode } from "react";

import style from "@/components/common/NavButton/style.module.css";

type NavButtonProps = {
  children: ReactNode | ReactNode[];
  to: string;
  className: string;
  icon: JSX.Element;
}

const NavButton = memo(({ children, to, icon, ...props }: NavButtonProps) => {
  return (<Link to={to} className={clsx(props.className, style.nav_button)}>
    <>
      {icon}
      <p className={clsx(style.nav_text)}>{children}</p>
    </>
  </Link>);
});

NavButton.displayName = "NavButton";

export default NavButton;
