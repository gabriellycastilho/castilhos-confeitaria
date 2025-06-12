import React from "react";
import Topnav from "../src/components/topnav/topnav";
import Mainav from "../src/components/mainav/mainav";
import Footer from "../src/components/footer/footer";
import Home from "../src/pages/home/home";
import Pedido from "../src/pages/pedido/pedido";
import Eventos from "../src/pages/eventos/eventos";
import Promocoes from "../src/pages/promocoes/promocoes";
import Doces from "../src/pages/dropdown/doces/doces";
import Bolos from "../src/pages/dropdown/bolos/bolos";
import Salgados from "../src/pages/dropdown/salgados/salgados";
import Todos from "../src/pages/dropdown/todos/todos";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topnav />
      <Mainav />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/pedido"
          element={<Pedido />}
        />
        <Route
          path="/eventos"
          element={<Eventos />}
        />
        <Route
          path="/promocoes"
          element={<Promocoes />}
        />
        <Route
          path="/doces"
          element={<Doces />}
        />
        <Route
          path="/bolos"
          element={<Bolos />}
        />
        <Route
          path="/salgados"
          element={<Salgados />}
        />
        <Route
          path="/todos"
          element={<Todos />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
