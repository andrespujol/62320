// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { productos } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSQ_uXzcWAx2HrCMWVM9b6835T1UBGzU8",
  authDomain: "tienda-62320.firebaseapp.com",
  projectId: "tienda-62320",
  storageBucket: "tienda-62320.appspot.com",
  messagingSenderId: "229773726131",
  appId: "1:229773726131:web:b4eb184d3e4859a4f53bc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((data) =>
//       console.log(`El producto ${data.id} se subió correctamente`)
//     )
//     .catch((error) => console.log(error));
// });
