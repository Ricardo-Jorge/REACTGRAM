import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // usamos o use Effect para identificar se o usuário esta logado ou não.
  useEffect(() => {
    if (user) {
      if (user.errors) {
        setAuth(false);
        setLoading(false);
        return;
      }
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, [user]);

  return { auth, loading };
};
