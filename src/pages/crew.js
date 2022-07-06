import { useState, useEffect } from "react";

import Data from "../data.json";
import styles from "../styles/crew.module.css";

const CrewPage = () => {
  const [subPg, setSubPg] = useState(0);
  const [currData] = useState(Data.crew);

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "crew";
  }, []);

  return (
    <section className={`flex ${styles["content-wrapper"]}`}>
      <h1 className={styles["pg-info"]}>
        <span>02</span> Meet your crew
      </h1>

      <div className={`flex ${styles["content"]}`}>
        <div className={`flex ${styles["member-img"]}`}>
          <img
            src={currData[subPg].images.webp}
            alt={`${currData[subPg].role} ${currData[subPg].name}`}
          />
        </div>

        <div className={`flex ${styles["nonImg-content"]}`}>
          <div className={`flex ${styles["main-content"]}`}>
            <h2 className={`flex ${styles["member-info"]}`}>
              <span>{currData[subPg].role}</span>
              <span>{currData[subPg].name}</span>
            </h2>

            <main className={styles.bio}>{currData[subPg].bio}</main>
          </div>

          <div className={`flex ${styles["member-switcher"]}`}>
            {[0, 1, 2, 3].map((subPgNum) => (
              <div
                key={subPgNum}
                className={`circle-btn ${
                  subPg === subPgNum ? "active" : undefined
                } ${styles["custom-circle"]}`}
                onClick={() => setSubPg(subPgNum)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewPage;
