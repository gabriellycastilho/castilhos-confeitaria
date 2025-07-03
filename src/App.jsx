import React from "react";
import Topnav from "./components/topnav/topnav";
import Mainav from "./components/mainav/mainav";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Pedido from "./pages/pedido/pedido";
import Eventos from "./pages/eventos/eventos";
import Promocoes from "./pages/promocoes/promocoes";
import Doces from "./pages/dropdown/doces/doces";
import Bolos from "./pages/dropdown/bolos/bolos";
import Salgados from "./pages/dropdown/salgados/salgados";
import Todos from "./pages/dropdown/todos/todos";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarrinhoPopup from "./components/carrinhoPopup/carrinhoPopup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
      <CarrinhoProvider>
        <CarrinhoPopup />
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
      </CarrinhoProvider>
    </Router>
  );
}

export default App;
