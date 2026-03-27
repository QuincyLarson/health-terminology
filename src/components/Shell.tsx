import { NavLink } from "react-router-dom";
import type { PropsWithChildren } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Curriculum", to: "/curriculum" },
  { label: "Review", to: "/review" },
  { label: "Settings", to: "/settings" },
  { label: "About", to: "/about" },
];

export function Shell({ children }: PropsWithChildren) {
  return (
    <div className="shell">
      <header className="masthead">
        <div>
          <p className="eyebrow">HealthTerms.com</p>
          <h1>Serious medical terminology, taught for decoding.</h1>
        </div>
        <p className="masthead-copy">
          Learn roots, affixes, combining forms, and common exceptions without
          an account or a backend.
        </p>
      </header>
      <nav className="nav-bar" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            end={item.to === "/"}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <main className="page-frame">{children}</main>
    </div>
  );
}
