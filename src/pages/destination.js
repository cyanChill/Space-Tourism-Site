import { useState, useEffect } from "react";

import Data from "../data.json";
import styles from "../styles/destination.module.css";

const DestinationPage = () => {
  const [subPg, setSubPg] = useState(0);
  const [currData] = useState(Data.destinations);

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "destination";
  }, []);

  return (
    <section className={`flex ${styles["content-wrapper"]}`}>
      <h1 className={styles["pg-info"]}>
        <span>01</span> Pick Your Destination
      </h1>

      <div className={`flex ${styles["content"]}`}>
        <div className={`flex ${styles["dest-img"]}`}>
          <img
            src={currData[subPg].images.webp}
            alt={`${currData[subPg].name}`}
          />
        </div>

        <div className={`flex ${styles["nonImg-content"]}`}>
          <ul className={`flex ${styles["nav-container"]}`}>
            {currData.map((dest, idx) => (
              <li
                key={dest.name}
                className={`${styles["nav-item"]} ${
                  subPg === idx ? styles.active : undefined
                }`}
                onClick={() => setSubPg(idx)}
              >
                {dest.name}
              </li>
            ))}
          </ul>

          <div className={`flex ${styles["main-content"]}`}>
            <h2 className={`flex ${styles["dest-name"]}`}>
              {currData[subPg].name}
            </h2>

            <main className={styles.description}>
              {currData[subPg].description}
            </main>

            <div className={styles["facts-container"]}>
              <hr className={styles.line} />

              <div className={`flex ${styles["dest-info"]}`}>
                <div>
                  <p class="subheading-2">Avg. distance</p>
                  <p class="subheading-1">384,400 km</p>
                </div>
                <div>
                  <p class="subheading-2">Est. travel time</p>
                  <p class="subheading-1">3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;
