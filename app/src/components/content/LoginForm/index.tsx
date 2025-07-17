import useAuth from "@/auth/firebase";
import FieldInput from "@/components/common/FieldInput";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "@tanstack/react-router";
import { memo, useCallback } from "react";

const LoginForm = memo(() => {
  const router = useRouter()
  const { login } = useAuth();
  const formAPI = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      try {
        await login(value.email, value.password);
        router.navigate({ to: "/" })
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      formAPI.handleSubmit();
    },
    [formAPI],
  );

  return (
    <form onSubmit={handleSubmit}>
      <formAPI.Field name="email">
        {(field) => (
          <FieldInput
            field={field}
            label="Email"
            type="email"
            showLabel={false}
            handleBlur={field.handleBlur}
            handleChange={field.handleChange}
          />
        )}
      </formAPI.Field>
      <formAPI.Field name="password">
        {(field) => (
          <FieldInput
            field={field}
            label="Email"
            type="password"
            showLabel={false}
            handleBlur={field.handleBlur}
            handleChange={field.handleChange}
          />
        )}
      </formAPI.Field>
      <button type="submit">Login</button>
    </form>
  );
});

LoginForm.displayName = "LoginForm";
export default LoginForm;
