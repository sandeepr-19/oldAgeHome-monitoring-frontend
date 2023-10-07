import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupScreen from "./screens/signup";
import LoginScreen from "./screens/login";
import Dashboard from "./screens/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupScreen />,
  },
  { path: "signup", element: <SignupScreen /> },
  { path: "login", element: <LoginScreen /> },
  { path: "dashboard", element: <Dashboard /> },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
