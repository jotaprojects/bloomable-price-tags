import { useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../../contexts/AuthContext";

function AuthStatus() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // TODO: Remove this after development
  if (!currentUser) {
    return (
      <div className="auth-wrapper">
        <span>You are not logged in</span>
      </div>
    );
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      console.log("Logged out");
      navigate("/login", { replace: true });
    } catch (e) {
      setError("Failed to log out.");
    }
  }

  return (
    <div className="auth-wrapper">
      <strong>Logged in as:</strong> {currentUser.email}
      <button className="btn--sm" onClick={handleLogout}>
        Log Out
      </button>
      {error && <span>{error}</span>}
    </div>
  );
}

export default AuthStatus;
