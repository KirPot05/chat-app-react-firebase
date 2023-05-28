import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, dbInstance } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function signUp(email, password, displayName) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName,
    });

    addDoc(collection(dbInstance, "users"), {
      uid: user.uid,
      name: displayName,
      authProvider: "email",
      email: user.email,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return user;
  } catch (err) {
    throw err;
  }
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}
