// scripts/auth.js

import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("Login feito com sucesso!");
      window.location.href = "index.html"; // Redireciona para o feed
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
});
