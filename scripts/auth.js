// scripts/auth.js

import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Definir persistência: só dura enquanto a aba estiver aberta
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistência de sessão ativada");
    
    // Pega o formulário de login
    const loginForm = document.getElementById("login-form");
    
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm["email"].value;
        const password = loginForm["password"].value;

        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            window.location.href = "index.html"; // Redireciona após login
          })
          .catch((error) => {
            alert("Erro ao fazer login: " + error.message);
          });
      });
    }
  })
  .catch((error) => {
    console.error("Erro ao definir persistência de sessão:", error);
  });


// Função para logout (pode ser chamada em um botão)
export function logout() {
  signOut(auth).then(() => {
    window.location.href = "login.html"; // Volta para o login
  }).catch((error) => {
    console.error("Erro ao sair:", error);
  });
}


// Verificador de autenticação (pode usar nas páginas privadas)
export function verificaLoginOuRedireciona() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}
