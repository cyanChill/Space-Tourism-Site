import { Routes, Route } from "react-router-dom";

import MainNav from "./components/navigation";
import HomePage from "./pages/home";
import DestinationPage from "./pages/destination";
import CrewPage from "./pages/crew";
import TechnologyPage from "./pages/technology";
import ErrorPage from "./pages/error";

const App = () => {
  return (
    <>
      <MainNav />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="crew" element={<CrewPage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
