import { useEffect } from "react";

const ErrorPage = () => {
  /* Set Background Image */
  useEffect(() => {
    document.body.classList = "home";
  }, []);

  return <div>Error Page</div>;
};

export default ErrorPage;
