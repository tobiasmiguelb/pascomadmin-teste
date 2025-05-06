// scripts/auth.js

import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

// Função de login
export function login(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

// Função de logout
export function logout() {
  return signOut(auth);
}

// Função pra verificar se tá logado
export function verificarUsuario(callback) {
  onAuthStateChanged(auth, user => {
    callback(user);
  });
}
