import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
