import { Outlet, Navigate } from "react-router";

// Context
import { useAuth } from "../contexts/AuthContext";

function privateLayout() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={`/login`} />;
  }

  return <Outlet />;
}

export default privateLayout;
