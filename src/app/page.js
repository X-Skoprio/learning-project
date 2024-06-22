import Hero from "./components/Hero";
import Services from "./components/Services";
import Matieres from "./components/Matieres";
import React from "react";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Matieres />
    </main>
  );
}
