import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "./app/Layouts/HomepageLayout/HomepageLayout";
import { dragToScroll } from "./scripts/reeltalk";

function App() {
  // Script Initializations
  dragToScroll();

  // Variable Initialization

  // App
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reeltalk" element={<HomepageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
