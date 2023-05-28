import { Route, Routes, useLocation } from "react-router-dom";
import Paths from "./Routes";
import "./styles.scss";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentAuth) => {
      if (currentAuth !== null) {
        setUser(currentAuth);
      }
    });

    return () => unsub();
  }, []);

  return (
    <>
      {user === null ? (
        location.pathname === "/register" ? (
          <Register />
        ) : (
          <Login />
        )
      ) : (
        <Routes>
          {Paths.map(({ path, component: Component }, index) => {
            return <Route path={path} key={index} element={<Component />} />;
          })}
        </Routes>
      )}
    </>
  );
}

export default App;
