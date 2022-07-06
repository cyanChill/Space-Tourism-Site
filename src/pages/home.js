import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/home.module.css";

const HomePage = () => {
  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "home";
  }, []);

  return (
    <section className={`flex ${styles["content-wrapper"]}`}>
      <main class={`flex ${styles["main-content"]}`}>
        <p class={styles["catch-phrase"]}>So, you want to travel to</p>
        <h1>Space</h1>
        <p class={styles["text-content"]}>
          Let&apos;s face it; if you want to go to, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we&apos;ll give you a truly out of this world
          experience!
        </p>
      </main>

      <div class={styles["main-btn"]}>
        <Link to="/destination" class={styles["explore-btn"]}>
          Explore
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
