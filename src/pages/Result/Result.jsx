import React from "react";
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import useRoutes from "../../hooks/useRoutes";

import { useSelector } from "react-redux";

function Result() {
  const router = useRoutes();
  const walls = useSelector((state) => state.walls);

  return (
    <div id="container">
      <Aside />
      <main>
        <div className="main-content">
          <h2>Você precisa de: 3 galoes</h2>
          <div className="wrapper">
            <Button onClick={(e) => router("/")}>Ir para o inicio</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Result;
