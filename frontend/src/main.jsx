import ResumeProvider from "./context/ResumeContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResumeProvider>
      <GoogleOAuthProvider clientId="296028710262-iibhi4oinms7786m0c93a3qse5351mi3.apps.googleusercontent.com">
        <AppRoutes />
      </GoogleOAuthProvider>
    </ResumeProvider>
  </>
);