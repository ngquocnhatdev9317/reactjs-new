import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";

import style from "@/routers/login/style.module.css";
import LoginForm from "@/components/content/LoginForm";
import { useEffect } from "react";
import loginStore from "@/store/loginStore";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    loginStore.getState().setLoggingIn();
  }, []);

  return (
    <div className={clsx(style.login_card)}>
      <h2 className={clsx(style.title_card)}>Login Form</h2>
      <p className={clsx(style.text_card)}>
        Please enter your credentials to log in.
      </p>
      <LoginForm />
    </div>
  );
}
