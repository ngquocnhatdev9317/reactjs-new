import clsx from "clsx";
import { memo, type JSX, type ReactNode } from "react";

import style from "@/components/common/Button/style.module.css";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = memo(({ children, icon, ...props }: ButtonProps) => {
  return (
    <button className={clsx(props.className, style.button)} {...props}>
      {children}{icon ? <><span className={style.style_icon}>{icon}</span></> : null}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
