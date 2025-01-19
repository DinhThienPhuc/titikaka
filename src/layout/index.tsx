import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
