import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupScreen from "./screens/signup.screen";
import LoginScreen from "./screens/login.screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupScreen />,
  },
  { path: "signup", element: <SignupScreen /> },
  { path: "login", element: <LoginScreen /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
