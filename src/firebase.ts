import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBec1xlVfu8BPjkHuQ7dd_5Zs34zb0Qq_A",
  authDomain: "oldage-home.firebaseapp.com",
  projectId: "oldage-home",
  storageBucket: "oldage-home.appspot.com",
  messagingSenderId: "250602628015",
  appId: "1:250602628015:web:be1bf2cc76bc18627bc55a",
  measurementId: "G-1XBE7MKC5H",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BMdOQon46R-Jrhn4t2JOuzbuSsK5OyxaKORdg0bIuuHcy-DqBtwgfKlfPd9eABdyLwTiY8MoVWJHfvynYGPtuTo",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
