import styles from "./index.module.css";

const LoadingSpinner = ({ size = "3rem", thickness = "6px" }) => {
  return (
    <div
      style={{ width: size, height: size, borderWidth: thickness }}
      className={styles.spinner}
    />
  );
};

export default LoadingSpinner;
