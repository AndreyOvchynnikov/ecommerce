import { Outlet } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SharedLayout = () => {

    return (
    <div className="Layout">
      <header className="header">
        <Navbar />
      </header>
        <section className="layout-section">
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SharedLayout;

