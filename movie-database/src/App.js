// import logo from './logo.svg';
// import Header from './Component/Header';
// import Main from './Component/Main';
// import Footer from './Component/Footer';
// import './App.css';

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./Component/Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import theme from "./utils/contanst/theme";


function App() {
  return (
      <div>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/created" element={<CreateMovie />} />
              <Route path="/movie/popular" element={<Popular />} />
              <Route path="/movie/now" element={<NowPlaying />} />
              <Route path="/movie/top" element={<TopRated />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </div>
  )
}

export default App;
