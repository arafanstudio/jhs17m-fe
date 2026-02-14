import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAdminAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    if (!authStatus) {
      // Redirect to login page if not authenticated
      setLocation("/admin/login");
    }
  }, [setLocation]);

  return isAuthenticated;
}

export function logoutAdmin() {
  localStorage.removeItem("isAdminAuthenticated");
  // The component using useAdminAuth will handle the redirect
}
