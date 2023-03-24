import "./App.css";
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BrowsePage from "./pages/Browse";
import HomePage from "./pages/Home";
import CardPage from "./pages/demo";
import PasswordPage from "./pages/demo/add";
import TestPage from "./pages/demo/test";
import CustCardPage from "./pages/Card";
import Ticket from "./pages/Home/testing";
import RandomNumbersArray from "./pages/Home/demok";
import DemoTest from "./pages/Card/demo";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path='/card' element={<CardPage/>} />
      <Route path="/pass" element={<PasswordPage/>} />
      <Route path="/test" element={<TestPage/>} />
      <Route path="/cc" element={<CustCardPage/>} />
      <Route path="/k" element={<Ticket/>} />
      {/* <Route path="/a" element={<RandomNumbersArray/>} /> */}
      <Route path="/b" element={<DemoTest/>} />

      <Route
          path="*"
          element={
            <>
              <p>There's nothing here: 404!</p>
              <Link to="/">Go Home</Link>
            </>
          }
        />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
