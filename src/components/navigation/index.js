import { useRef } from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

const MainNav = () => {
  const btnRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleMenuToggle = () => {
    const visibility = navMenuRef.current.getAttribute("data-visible");
    if (visibility === "false") {
      navMenuRef.current.setAttribute("data-visible", true);
      btnRef.current.setAttribute("data-toggle", true);
    } else {
      navMenuRef.current.setAttribute("data-visible", false);
      btnRef.current.setAttribute("data-toggle", false);
    }
  };

  return (
    <nav className={`flex ${styles["main-nav"]}`}>
      <div className={styles.logo}>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <button
        className={styles["nav-control"]}
        data-toggle="false"
        onClick={handleMenuToggle}
        ref={btnRef}
      />

      <div className={`flex ${styles.action}`}>
        <div className={styles.line} />

        <ul
          className={`flex ${styles["nav-menu"]}`}
          data-visible="false"
          ref={navMenuRef}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span>00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
