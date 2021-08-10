import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return isAuthenticated ? <a onClick={() => logout({ returnTo: window.location.origin })} href='#'>Logout</a> : <a onClick={() => loginWithRedirect()} href="#">Login</a>;
};

export default AuthenticationButton;