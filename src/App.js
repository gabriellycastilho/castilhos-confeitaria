import React from "react";
import Topnav from "../src/components/topnav/topnav";
import Mainav from "../src/components/mainav/mainav";
import Footer from "../src/components/footer/footer";
import Home from "../src/pages/home/home";
import Pedido from "../src/pages/pedido/pedido";
import Sabores from "../src/pages/sabores/sabores";
import Eventos from "../src/pages/eventos/eventos";
import Promocoes from "../src/pages/promocoes/promocoes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topnav />
      <Mainav />
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/pedido"
          element={<Pedido />}
        />
        <Route
          path="/sabores"
          element={<Sabores />}
        />
        <Route
          path="/eventos"
          element={<Eventos />}
        />
        <Route
          path="/promocoes"
          element={<Promocoes />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
