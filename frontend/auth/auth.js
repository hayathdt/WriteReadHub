import { auth, db, firebaseConfig } from "../shared/firebase-init.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

console.log("Configuration Firebase:", firebaseConfig);
auth.useDeviceLanguage();

// Enregistrement email/mot de passe
export async function registerUser(email, password) {
  try {
    console.log("Tentative d'inscription avec:", email);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Réponse Firebase:", userCredential);
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: email,
      createdAt: serverTimestamp(),
    });
    return userCredential;
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    throw error; // Important pour que l'erreur soit traitée dans le code appelant
  }
}

// Connexion Google
const googleProvider = new GoogleAuthProvider();
export async function signInWithGoogle() {
  try {
    console.log("Tentative de connexion avec Google");
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Réponse Firebase:", result);
    const user = result.user;
    await setDoc(
      doc(db, "users", user.uid),
      {
        email: user.email,
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
    return user;
  } catch (error) {
    console.error("Erreur lors de la connexion Google:", error);
    throw error; // Important pour que l'erreur soit traitée dans le code appelant
  }
}
