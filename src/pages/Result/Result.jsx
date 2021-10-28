import React, { useCallback, useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import useRoutes from "../../hooks/useRoutes";
import { Calcule } from "../../service/calcule";

import { useSelector } from "react-redux";
import success from "../../assets/images/success.svg";

function Result() {
  const router = useRoutes();
  const [results, setResults] = useState([]);
  const walls = useSelector((state) => state.walls);
  const defaultValues = useSelector((state) => state.defaultValues);

  const totalizer = useCallback(() => {
    const calcule = new Calcule(walls, defaultValues);

    setResults(calcule.total());
  }, [defaultValues, walls]);

  useEffect(() => {
    totalizer();
  }, [totalizer]);

  return (
    <div id="container">
      <Aside />
      <main>
        <div className="main-content">
          <img src={success} alt="success" />
          <h2>O cálculo foi realizado com sucesso, você precisa de: </h2>
          <span>
            {" "}
            {results.map((item, index) => (
              <span key={item.product}>
                {item.qty} unidades de nossas tintas de {item.product}L{" "}
                {results.length - (index + 1) === 1 && "e "}
                <br></br>
              </span>
            ))}
          </span>
          <div className="wrapper">
            <Button onClick={(e) => router("/")}>Ir para o inicio</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Result;
