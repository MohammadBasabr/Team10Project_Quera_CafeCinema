import { Outlet } from "react-router-dom";
import { Nav } from "./header/navbar";
import Header from "./header/header";
import Footer from "./footer";

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FunctionComponent<LayoutProps> = (
  props
): JSX.Element => {
  return (
    <div className="font-display">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
