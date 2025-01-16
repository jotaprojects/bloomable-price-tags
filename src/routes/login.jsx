import { Form, redirect, useActionData, useNavigation } from "react-router";

// Api
import { login } from "../api/supa-auth";

// Helpers
import { requireAuth } from "../utils";

export function meta() {
  return [
    { title: "Log In" },
    { name: "description", content: "Log in to Bloomable Price tags." },
  ];
}

function LoginPage() {
  const { state } = useNavigation();
  const errors = useActionData();
  const isSubmitting = state === "submitting";

  return (
    <>
      <h1>Log In</h1>
      <div className="box">
        {errors && <p className="error">{errors}</p>}
        <Form method="post" id="login-form" className="form">
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form__group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
        </Form>
      </div>
    </>
  );
}

export async function clientLoader() {
  const isLoggedIn = await requireAuth();

  if (isLoggedIn) return redirect("/");

  return null;
}

// TODO: Add proper error handling
export async function clientAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (typeof email !== "string" || email.length === 0) {
    errors.email = "Email is required.";
  }

  if (typeof password !== "string" || password.length === 0) {
    errors.password = "Password is required.";
  }

  if (Object.keys(errors).length > 0) {
    return "Failed to log in. Please check your details.";
  }

  try {
    await login(email, password);
    return redirect("/");
  } catch (e) {
    return { message: e.message };
  }
}

export default LoginPage;
