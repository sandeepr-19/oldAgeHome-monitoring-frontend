importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBec1xlVfu8BPjkHuQ7dd_5Zs34zb0Qq_A",
  authDomain: "oldage-home.firebaseapp.com",
  projectId: "oldage-home",
  storageBucket: "oldage-home.appspot.com",
  messagingSenderId: "250602628015",
  appId: "1:250602628015:web:be1bf2cc76bc18627bc55a",
  measurementId: "G-1XBE7MKC5H",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  // console.log("Received background message ", payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
  };
  window.alert(payload.data.body);

  self.registration.showNotification(notificationTitle, notificationOptions);
});
