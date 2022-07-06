import { useState, useEffect } from "react";

import Data from "../data.json";
import styles from "../styles/home.module.css";

const HomePage = () => {
  const [subPg, setSubPg] = useState(0);
  const [data] = useState();

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "home";
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
