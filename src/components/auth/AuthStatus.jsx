import { useState } from "react";
import { redirect } from "react-router";

import { useAuth } from "../../contexts/AuthContext";

function AuthStatus() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  // console.log("currentUser", currentUser);

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
      return redirect("/login");
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
