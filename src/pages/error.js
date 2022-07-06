import { useEffect } from "react";

const ErrorPage = () => {
  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "home";
  }, []);

  return (
    <section
      style={{ fontSize: "1.25rem", textAlign: "center", padding: "2rem" }}
    >
      <span style={{ fontWeight: 500 }}>Error:</span> The page you were looking
      for was not found.
    </section>
  );
};

export default ErrorPage;
