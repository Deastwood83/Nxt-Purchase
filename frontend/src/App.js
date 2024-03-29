import React from "react";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header1 />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={HomeScreen()} exact />
            <Route path="/product/:id" element={ProductScreen()} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
