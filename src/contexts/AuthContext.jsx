import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";
import { login, logout } from "../api/supa-auth";

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [session, setSession] = useState(null);

  // Cleanup
  useEffect(() => {
    const { data, error } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setCurrentUser(null);
          setSession(null);
        } else if (session) {
          setCurrentUser(session.user);
          setSession(session);
        }
      }
    );

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
