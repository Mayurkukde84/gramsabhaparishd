import { Footer } from "../components/footer/Footer";
import { Navbars } from "../components/navbar/Navbars";
import { Outlet } from "react-router-dom";
const AppLayout = (props) => {
  return (
    <div>
      <div className="min-h-screen flex flex-col ">
        {/* Navbar at the top */}
        <header>
          {/* Navbar content */}
          <Navbars onChange={props.onChange} />
        </header>

        {/* Main content */}
        <main className="flex-grow dark:bg-black  ">
          {/* Your page content goes here */}
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
        {/* Footer in the last outlet in the middle */}
      </div>
    </div>
  );
};

export default AppLayout;
