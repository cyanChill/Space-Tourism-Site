import { useState, useEffect } from "react";

import Data from "../data.json";
import styles from "../styles/technology.module.css";

const TechnologyPage = () => {
  const [subPg, setSubPg] = useState(0);
  const [currData] = useState(Data.technology);

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "technology";
  }, []);

  return (
    <section className={`flex ${styles["content-wrapper"]}`}>
      <h1 className={styles["pg-info"]}>
        <span>03</span> Space launch 101
      </h1>

      <div className={`flex ${styles["content"]}`}>
        <div className={`flex ${styles["tech-img"]}`}>
          <picture>
            <source
              srcSet={currData[subPg].images.portrait}
              media="(min-width: 768px)"
            />
            <img
              src={currData[subPg].images.landscape}
              alt={`${currData[subPg].name}`}
            />
          </picture>
        </div>

        <div className={`flex ${styles["nonImg-content"]}`}>
          <div className={`flex ${styles["tech-switcher"]}`}>
            {currData.map((_, idx) => (
              <div
                key={idx}
                className={`circle-btn outline ${
                  subPg === idx ? "active" : undefined
                } ${styles["custom-circle"]}`}
                onClick={() => setSubPg(idx)}
              >
                {idx}
              </div>
            ))}
          </div>

          <div className={`flex ${styles["main-content"]}`}>
            <h2 className={`flex ${styles["tech-info"]}`}>
              <span>The terminology...</span>
              <span>{currData[subPg].name}</span>
            </h2>

            <main className={styles.description}>
              {currData[subPg].description}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
