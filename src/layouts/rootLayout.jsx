import { Link, Outlet } from "react-router";

// Components
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
}

export default rootLayout;
