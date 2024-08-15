  import { initializeApp } from "firebase/app";
  import { getAuth, GoogleAuthProvider} from "firebase/auth"
  // TODO: Add SDKs for Firebase products that you want to use

  const firebaseConfig = {
    apiKey: "AIzaSyCgtTAtGl1k2RGMokQ0QI1SHe51tI1SftU",
    authDomain: "my-food-website-74b3c.firebaseapp.com",
    projectId: "my-food-website-74b3c",
    storageBucket: "my-food-website-74b3c.appspot.com",
    messagingSenderId: "216793524486",
    appId: "1:216793524486:web:171159fbac2252ace21687",
    measurementId: "G-CPEFNP8DVD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();