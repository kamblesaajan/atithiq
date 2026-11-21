import { auth, db } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Super Admin Login
export async function adminLogin(email, password) {
  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = result.user;

  try {
    const adminRef = doc(db, "superAdmins", user.uid);
    const adminSnap = await getDoc(adminRef);
    console.log("ADMIN VALUES:", {
  uid: user.uid,
  active: adminSnap.data()?.active,
  role: adminSnap.data()?.role,
  activeOK: adminSnap.data()?.active === true,
  roleOK: adminSnap.data()?.role === "super_admin"
});
    if (
      !adminSnap.exists() ||
      adminSnap.data().active !== true ||
      adminSnap.data().role !== "super_admin"
    ) {
      await signOut(auth);
      throw new Error("Super Admin access denied.");
    }

    return user;
  } catch (error) {
    await signOut(auth);
    throw error;
  }
}

// Logout
export async function adminLogout() {
  await signOut(auth);
}

// Authentication status
export function watchAdminAuth(callback) {
  return onAuthStateChanged(auth, callback);
}
