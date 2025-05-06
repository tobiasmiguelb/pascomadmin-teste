// scripts/auth.js

import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Quando o DOM estiver carregado
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const errorText = document.getElementById("login-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    try {
      // Mantém a sessão só até o navegador/aba ser fechado
      await setPersistence(auth, browserSessionPersistence);

      // Faz login
      await signInWithEmailAndPassword(auth, email, password);

      // Redireciona pra página principal
      window.location.href = "index.html";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      errorText.textContent = "Email ou senha incorretos.";
    }
  });

  // Se o usuário já estiver logado, redireciona direto
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "index.html";
    }
  });
});
