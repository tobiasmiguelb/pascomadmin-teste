// scripts/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDULQdfX1QQGqi3Y3LzOPfhhvP6lvp6kcU",
  authDomain: "pascomadmin-teste.firebaseapp.com",
  projectId: "pascomadmin-teste",
  storageBucket: "pascomadmin-teste.appspot.com",
  messagingSenderId: "824218409362",
  appId: "1:824218409362:web:e285e07882c9ca8faa894b"
};

// Inicializa o Firebase e exporta o auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
