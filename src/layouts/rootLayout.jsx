// import { Outlet, Link, NavLink, useNavigation } from "react-router-dom";

// // Context
// import { useAuth } from "../contexts/AuthContext";

// // Components
// import AuthStatus from "../components/auth/AuthStatus";

import { Link, Outlet } from "react-router";
import AuthStatus from "../components/auth/AuthStatus";

function rootLayout() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="app-title">
            <Link to={`/`}>Bloomable - Price tags</Link>
          </div>
          <AuthStatus />
        </div>
      </header>
      <main>
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
  // const navigation = useNavigation();
  // const { currentUser } = useAuth();

  // return (
  //   <>
  //     <header>
  //       <div className="wrapper">
  //         <div className="app-title">
  //           <Link to={`/`}>Bloomable - Price tags</Link>
  //         </div>
  //         <AuthStatus />
  //       </div>
  //     </header>
  //     <main>
  //       <div
  //         className={[
  //           "wrapper",
  //           navigation.state === "loading" ? "loading" : "",
  //         ].join(" ")}
  //       >
  //         <Outlet />
  //       </div>
  //     </main>
  //   </>
  // );
}

export default rootLayout;
