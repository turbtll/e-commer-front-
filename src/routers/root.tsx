import { Outlet, ScrollRestoration } from "react-router-dom";
import Inspx from "inspx";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <Inspx>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </Inspx>
  );
};

export default Root;
