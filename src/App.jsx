import Topnav from "./components/topnav/topnav";
import Mainav from "./components/mainav/mainav";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Cestas from "./pages/dropdown/cestas/cestas";
import Bolos from "./pages/dropdown/bolos/bolos";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarrinhoPopup from "./components/carrinhoPopup/carrinhoPopup";
import ProdutosPorCategoria from './components/ProdutosPorCategoria/ProdutosPorCategoria'



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
          <Route path="/home" element={<Home />} />
          <Route path="/doces" element={<ProdutosPorCategoria categoria="doces" />} />
          <Route path="/salgados" element={<ProdutosPorCategoria categoria="salgados" />} />
          <Route path="/cestas" element={<Cestas />} />
          <Route path="/bolos" element={<Bolos />} />
          <Route path="/promocoes" element={<ProdutosPorCategoria categoria="promocoes" />} />
          <Route path="/todos" element={<ProdutosPorCategoria categoria="" />} /> 
        </Routes>
        <Footer />
      </CarrinhoProvider>
    </Router>
  );
}

export default App;
