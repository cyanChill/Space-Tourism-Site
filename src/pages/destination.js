import { useState, useEffect } from "react";

import Data from "../data.json";
import styles from "../styles/destination.module.css";

const DestinationPage = () => {
  const [subPg, setSubPg] = useState(0);
  const [data] = useState(Data.destinations);

  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "destination";
  }, []);

  return <div>Destination Page</div>;
};

export default DestinationPage;
