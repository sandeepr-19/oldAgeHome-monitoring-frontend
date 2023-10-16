import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupScreen from "./screens/signup";
import LoginScreen from "./screens/login";
import Dashboard from "./screens/dashboard";
import CreateUser from "./screens/createUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  { path: "signup", element: <SignupScreen /> },
  { path: "login", element: <LoginScreen /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "create", element: <CreateUser /> },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
