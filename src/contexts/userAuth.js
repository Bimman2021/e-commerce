import { createContext, useContext, useState, useEffect } from "react";

const PREFIX = "rangex-";
function saveLocal(key, user) {
  let prefixedKey = PREFIX + key;
  localStorage.setItem(prefixedKey, JSON.stringify(user.token));
}
// istantiate
const Auth = createContext();

// consume auth
export function useAuth() {
  return useContext(Auth);
}

// creating auth
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    token: "",
    user: {},
  });
  const [balance, setBalance] = useState({
    interest_balance: 0,
    main_balance: 0,
    bonus_balance: 0,
  });

  const [rememberMe, setRememberMe] = useState(() => {
    return JSON.parse(localStorage.getItem("rangex-rememberMe") || false);
  });

  useEffect(() => {
    if (user.isLogin) saveLocal("token", user);
  }, [user]);
  return (
    <Auth.Provider
      value={{
        user: user,
        setUser: setUser,
        rememberMe,
        setRememberMe,
        balance,
        setBalance,
      }}
    >
      {children}
    </Auth.Provider>
  );
}
