import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";


if (!getApps().length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!privateKey || !process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL) {
    throw new Error("Missing Firebase environment variables");
  }



  console.log("🔥 PRIVATE KEY CHECK START");
console.log(process.env.FIREBASE_PRIVATE_KEY);
console.log("🔥 AFTER REPLACE:");
console.log(process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"));
console.log("🔥 PRIVATE KEY CHECK END");



  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    }),
  });
}

export const auth = getAuth();
export const db = getFirestore();
