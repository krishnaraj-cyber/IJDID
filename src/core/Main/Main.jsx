import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../../src/App.css";
import Sidebar from "../../shared/Sidebar/Sidebar";
import MiniSidebar from "../../shared/Sidebar/MiniSidebar";

export default function Main() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <MiniSidebar/>

        <main className="min-h-screen mt-20">  {/* this is for scrollbar to avoid lil space on rightside*/}
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
