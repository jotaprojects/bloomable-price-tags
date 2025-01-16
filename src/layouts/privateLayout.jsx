import { Outlet, Navigate, useNavigate, redirect } from "react-router";

// Context
import { useAuth } from "../contexts/AuthContext";

function privateLayout() {
  const { currentUser } = useAuth();
  let navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to={`/login`} />;
  }

  return <Outlet />;
}

export default privateLayout;
