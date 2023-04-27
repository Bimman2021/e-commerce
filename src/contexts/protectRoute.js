import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./userAuth";
const RequireAuth = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user.isLogin ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
