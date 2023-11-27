import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SharedLayout = () => {

    return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
        <section className="layout-section">
          <Suspense fallback={
            <div className="backdropSpinner">
              <div className="wrapperSpinner"> 
              <ThreeDots color="#191919" />
              </div>
          </div> }>
            
            
            <Outlet />
          </Suspense>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SharedLayout;

