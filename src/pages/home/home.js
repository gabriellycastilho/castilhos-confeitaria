import React from "react";
import Hero from "../../components/hero/hero";
import Produtos from "../../components/produtos/produtos";
import Sobre from "../../components/sobre/sobre";
import Contato from "../../components/testimonials/testimonials";
import Divisao from "../../components/divisao/divisao";

function Home() {
  return (
    <div>
      <Hero />
      <Produtos />
      <Divisao />
      <Sobre />
      <Divisao />
      <Contato />
    </div>
  );
}

export default Home;
