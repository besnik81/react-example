import "./App.css";
import { useUser } from "./context/user-context";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const {
    user: { isLoggedIn },
    logout,
  } = useUser();

  useEffect(() => {
    navigate(isLoggedIn ? "/" : "/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div>
      <header>
        <Link className="text-blue-500 cursor-pointer" to="/">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link className="ml-4 text-blue-500 cursor-pointer" to="/about-us">
              About Us
            </Link>
            <span
              className="ml-4 text-blue-500 cursor-pointer"
              onClick={logout}
            >
              Logout
            </span>
          </>
        ) : (
          <Link className="ml-4 text-blue-500 cursor-pointer" to="/login">
            Login
          </Link>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
