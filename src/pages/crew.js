import { useState, useEffect } from "react";

import Data from "../data.json";
import LoadingSpinner from "../components/ui/loadingSpinner";
import styles from "../styles/crew.module.css";

const CrewPage = () => {
  const [subPg, setSubPg] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [currData, setCurrData] = useState(Data.crew[0]);

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "crew";
  }, []);

  useEffect(() => {
    setLoadingData(true);
    setCurrData(Data.crew[subPg]);
    setLoadingData(false);
  }, [subPg]);

  if (loadingData) {
    return <LoadingSpinner />;
  }

  return (
    <section className={`flex ${styles["content-wrapper"]}`}>
      <h1 className={styles["pg-info"]}>
        <span>02</span> Meet your crew
      </h1>

      <div className={`flex ${styles["content"]}`}>
        <div className={`flex ${styles["member-img"]}`}>
          <img
            src={currData.images.webp}
            alt={`${currData.role} ${currData.name}`}
          />
        </div>

        <div className={`flex ${styles["nonImg-content"]}`}>
          <div className={`flex ${styles["main-content"]}`}>
            <h2 className={`flex ${styles["member-info"]}`}>
              <span>{currData.role}</span>
              <span>{currData.name}</span>
            </h2>

            <main className={styles.bio}>{currData.bio}</main>
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
