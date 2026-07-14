import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "../common/Logo";

const navLinks = [
  {
    name: "Platform",
    path: "/",
  },
  {
    name: "Operations",
    path: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-800 md:hidden"
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;