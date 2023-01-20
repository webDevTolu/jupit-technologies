import { Fragment, ReactNode } from "react";
import Navbar from "../../NavBar";
import Footer from "../../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <div className="font-pop h-auto w-screen min-h-screen overflow-y-scroll mb-20">
        <Navbar />
        <main className="h-auto">{children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
