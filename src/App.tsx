import { Stack, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";

import { theme } from "./theme";

import ScrollToTop from "./ScrollToTop";
import Nav from "./Nav";
import Home from "./Home";
import Essentials from "./tips-and-tricks/Essentials";
import MoveInChecklist from "./tips-and-tricks/MoveInChecklist";
import DollarStoreFinds from "./tips-and-tricks/DollarStoreFinds";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Stack minHeight="100vh" width="100%">
            <Nav />
            <ScrollToTop />
            <Routes>
              <Route
                path="/tips-and-tricks/essentials"
                element={<Essentials />}
              />
              <Route
                path="/tips-and-tricks/move-in"
                element={<MoveInChecklist />}
              />
              <Route
                path="/tips-and-tricks/dollar-store-finds"
                element={<DollarStoreFinds />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </Stack>
        </ThemeProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
