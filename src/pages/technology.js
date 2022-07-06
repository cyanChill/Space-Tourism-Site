import { useState, useEffect } from "react";

import Data from "../data.json";
import styles from "../styles/technology.module.css";

const TechnologyPage = () => {
  const [subPg, setSubPg] = useState(0);
  const [data] = useState(Data.technology);

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "technology";
  }, []);

  return <div>Technology Page</div>;
};

export default TechnologyPage;
