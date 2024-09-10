/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore, addDoc, getDocs, collection, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getPerformance } from "firebase/performance";
import {Admin, Buyer, Seller, User} from "./DataModels"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const performance = getPerformance(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const signUp = async (usernaeme, email, password, role) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in 
      const userId = userCredential.user.uid;
      const newUser = User;
      newUser.name = usernaeme;
      newUser.login.email = email;
      newUser.login.password = password;

      if(password !== process.env.adminKey){
        if (role === "seller"){
            newUser.role = "seller"
            newUser.roleData = Seller
          }else{
            newUser.role = "buyer"
            newUser.roleData = Buyer
          }
      }else{
        newUser.role = "admin"
        newUser.roleData = Admin;
      }

      newUser.id = userId;
      await setDoc(doc(db, "Users", userId), newUser);
      

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


}

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user.uid;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export const signUpWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      const userId = user.uid;
      const docRef = doc(db, "Users", userId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists() === false) {
        const newUser = User;
        newUser.name = user.displayName;
        newUser.login.email = user.email;
        newUser.login.password = "password";
        newUser.id = userId;
        await setDoc(docRef, newUser);
      }
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error)
      // ...
    });
}

export const signUpWithGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      const userId = user.uid;
      const docRef = doc(db, "Users", userId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists() === false) {
        const newUser = User;
        newUser.name = user.displayName;
        newUser.login.email = user.email;
        newUser.login.password = "password";
        newUser.id = userId;
        await setDoc(docRef, newUser);
      }
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(error)
      // ...
    });
}

export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log(" Sign-out successful.");
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

