import { ReactNode } from "react";
import Navbar from "../../NavBar";
import Footer from "../../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-pop h-screen w-screen">
      <Navbar />
      <main className="h-auto overflow-y-scroll">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
