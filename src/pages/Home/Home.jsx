import React from "react";
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import useRoutes from "../../hooks/useRoutes";
import welcome from "../../assets/images/welcome.svg";

import "./home.scss";

function Home() {
  const router = useRoutes();

  return (
    <div id="container">
      <Aside />
      <main>
        <div className="main-content">
          <img src={welcome} alt="welcome" />
          <h2>Bem-vindo à nossa calculadora de tinta</h2>
          <div className="wrapper">
            <Button onClick={(e) => router("/calculator/A")}>Començar</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
