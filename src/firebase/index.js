import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7PvyY3uvPNtkxihVH8KAlStw5wgsPtHQ",
  authDomain: "auth-page-51de5.firebaseapp.com",
  projectId: "auth-page-51de5",
  storageBucket: "auth-page-51de5.appspot.com",
  messagingSenderId: "189339523011",
  appId: "1:189339523011:web:da242b5da044d22adf4f76",
  measurementId: "G-BJT532VEN6"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }