import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
