import React, { useEffect, useState } from "react";
import "./App.css";
import useSound from "use-sound";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupScreen from "./screens/signup";
import LoginScreen from "./screens/login";
import Dashboard from "./screens/dashboard";
import CreateUser from "./screens/createUser";
import Analytics from "./screens/analytics";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  { path: "signup", element: <SignupScreen /> },
  { path: "login", element: <LoginScreen /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "analytics", element: <Analytics /> },
  { path: "create", element: <CreateUser /> },
]);

// const requestPermission = async (messaging: Messaging) => {
//   try {
//     const token = await getToken(messaging);
//     return token;
//   } catch (error) {
//     throw error;
//   }
// };

function App() {
  // const [play] = useSound("../public/alert.mp3");
  // const [userGesture, setUserGesture] = useState(false);
  // useEffect(() => {
  //   const app = initializeApp(firebaseConfig);
  //   const messaging = getMessaging(app);

  //   requestPermission(messaging)
  //     .then((token: string) => {
  //       // console.log("Notification permission granted");
  //       // console.log("FCM token:", token);
  //       localStorage.setItem("emp.fcmToken", token);
  //     })
  //     .catch((error: any) => {
  //       console.error("Error getting FCM token:", error);
  //     });

  //   // Add listeners for incoming messages
  //   onMessage(messaging, (payload: any) => {
  //     // console.log("Message received. Data:", payload);
  //     window.alert(payload.data.body);
  //   });
  // }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
