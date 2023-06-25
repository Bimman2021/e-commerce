// import { useEffect, useState } from "react";
// import { useAuth } from "./userAuth";
// import { Outlet } from "react-router-dom";
// import { refresh } from "../config/persistHook";
// import Spinner from "../component/spinner/index";

// export default function PersistUser() {
//   const { rememberMe, setUser, user } = useAuth();
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const verifyToken = async () => {
//       try {
//         const res = await refresh();
//         console.log(res);
//       } catch (err) {
//         console.log(err);
//         setIsLoading(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     !user.isLogin ? verifyToken() : setIsLoading(false);
//   }, [setUser, user.isLogin]);

//   return (
//     <>
//       {!rememberMe ? (
//         <Outlet />
//       ) : isLoading ? (
//         <div className="container d-flex flex-column card-bg-1">
//           <div className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
//             <div className="col-12 col-md-6 col-lg-5 col-xl-4">
//               <Spinner style={{ height: "50px" }} />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Outlet />
//       )}
//     </>
//   );
// }
