import { createContext, useState, useCallback, useContext } from "react";

const INITIAL = {
  user: {
    isLoggedIn: false,
    username: null,
  },
  login: () => {},
  logout: () => {},
};

const UserContext = createContext(INITIAL);

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    isLoggedIn: !!localStorage.getItem("token"),
    username: null,
  });

  const logout = useCallback(() => {
    setUser(INITIAL);
    localStorage.removeItem("token");
  }, []);

  console.log({ user });

  const login = useCallback(() => {
    setUser({
      isLoggedIn: true,
      username: null,
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
