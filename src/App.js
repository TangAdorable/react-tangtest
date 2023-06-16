import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AddNews from "./components/AddNews";
import Home from "./components/Home";
import ClonePMESII from "./components/ClonePMESII";
import GenaratePMESII from "./components/GenaratePMESII";
import Navbar from "./components/Navbar";
import NewsLabel from "./components/NewsLabel";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <br />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/news-add" element={<AddNews />} />
            <Route
              exact
              path="/news-label/:Label_name"
              element={<NewsLabel />}
            />
            <Route exact path="/clone-pmesii" element={<ClonePMESII />} />
            <Route exact path="/genarate-pmesii" element={<GenaratePMESII />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
