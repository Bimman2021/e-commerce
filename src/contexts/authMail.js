import { createContext, useContext, useState } from "react";

const Mailcontext = createContext();

export function useMail() {
  return useContext(Mailcontext);
}

export function AuthMail({ children }) {
  const [email, setEmail] = useState({
    code: null,
    email: null,
  });

  return (
    <Mailcontext.Provider value={{ email, setEmail }}>
      {children}
    </Mailcontext.Provider>
  );
}
