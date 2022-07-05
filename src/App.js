import { Routes, Route } from "react-router-dom";

import MainNav from "./components/navigation";
import HomePage from "./pages/home";
import DestinationPage from "./pages/destination";
import CrewPage from "./pages/crew";
import TechnologyPage from "./pages/technology";

const App = () => {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="technology" element={<TechnologyPage />} />
      </Routes>
    </>
  );
};

export default App;
