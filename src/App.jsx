import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "./app/Layouts/HomepageLayout/HomepageLayout";
import { dragToScroll } from "./scripts/reeltalk";
import MovieDetailLayout from "./app/Layouts/MovieDetailLayout/MovieDetailLayout";

function App() {
  // Script Initializations
  dragToScroll();

  // Variable Initialization

  // App
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/movie/" element={<MovieDetailLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
