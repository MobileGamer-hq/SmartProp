/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  doc,
  query,
  where,
  setDoc,
  increment,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./Data/FirebaseManager";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes, useNavigate } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Search from "./Pages/Search";
import ViewProperty from "./Pages/ViewProperty";
import WatchList from "./Pages/WatchList";
import Welcome from "./Pages/Welcome";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Authenticating...");
  const [isLogIn, setIsLogIn] = useState(false);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);

  const [userRole, setUserRole] = useState("buyer");

  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      setLoadingMessage("Authenticating...");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserId(uid);
        setIsLogIn(true);
        //console.log(userId)

        onSnapshot(doc(db, "Users", uid), (doc) => {
          setLoadingMessage("Getting User Data...");
          setUser(doc.data());

          //console.log("Current data: ", doc.data());
        });
        // ...
      } else {
        // User is signed out
        // ...
        setIsLogIn(false);
        navigate("/");
      }
      setIsLoading(false);
    });

    const usersSub = onSnapshot(collection(db, "Users"), (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setUsers(data);
    });
  }, [userId]);

  if (isLoading) {
    return <div className="App">Loading.... Authenticating User</div>;
  } else {
    return (
      <div>
        {!isLogIn ? (
          <div className="App" >
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        ) : (
          <div className="App">
            <Routes>
              <Route
                path={userRole === "buyer" ? "/" : "/home"}
                element={<Home />}
              />
              <Route
                path={userRole === "seller" ? "/" : "/dashboard"}
                element={<Dashboard />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/view-property" element={<ViewProperty />} />
              <Route path="/watchlist" element={<WatchList />} />
            </Routes>
          </div>
        )}
      </div>
    );
  }
}

export default App;
