import { useEffect, type PropsWithChildren } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppState } from "../app/AppState";

const navItems = [
  { label: "Curriculum", to: "/" },
  { label: "Drills", to: "/drills" },
  { label: "Profile", to: "/profile" },
];

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return null;
}

export function Shell({ children }: PropsWithChildren) {
  const { recoveryNotice, resolvedTheme, setThemePreference } = useAppState();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="shell">
      <ScrollToTopOnRouteChange />
      <header className="top-bar">
        <Link className="brand-link" to="/">
          HealthTerminology.com
        </Link>
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
        <button
          type="button"
          className={`theme-toggle${isDark ? " active" : ""}`}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          aria-pressed={isDark}
          onClick={() => setThemePreference(isDark ? "light" : "dark")}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" />
          </span>
          <span>{isDark ? "Dark" : "Light"}</span>
        </button>
      </header>
      {recoveryNotice ? (
        <section className="banner banner-warning">
          <p>{recoveryNotice}</p>
          <Link to="/profile">Open profile</Link>
        </section>
      ) : null}
      <main className="page-frame">{children}</main>
    </div>
  );
}
