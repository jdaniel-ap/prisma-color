import React, { useState } from "react";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Aside from "../../components/Aside/Aside";

import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setWallDimentions } from "../../redux/slices/wallSlice";
import useRoutes from "../../hooks/useRoutes";

import { initialAlert, initialState, navigation } from "../../utils/utils";
import {
  halfAreaError,
  maximumHeightError,
  minHeightError,
  minimumError,
} from "../../utils/errors";

import "../Home/home.scss";

function WallCalculator() {
  const [dimensions, setDimensions] = useState(initialState);
  const [error, setError] = useState(initialAlert);
  const { wall } = useParams();
  const itemsSize = useSelector((state) => state.defaultValues);
  const dispatch = useDispatch();
  const router = useRoutes();

  const handleErrors = () => {
    try {
      const { doors, windows, width, height } = dimensions;
      const { doorDimension, windowDimension } = itemsSize;
      const wallArea = width * height;
      const minHeight = 2.2;
      const totalWindowArea = windowDimension.area * windows;
      const totalDoorArea = doorDimension.area * doors;

      if (dimensions.width < 1 || dimensions.height < 1)
        throw new Error(minimumError);

      if (dimensions.height > 15) throw new Error(maximumHeightError);

      if (doors > 0 && height < minHeight) throw new Error(minHeightError);

      if (totalDoorArea + totalWindowArea > wallArea * 0.5)
        throw new Error(halfAreaError);

      resolveData();
      resetValues();
    } catch (error) {
      setError(error.message);
    }
  };

  const resetValues = () => {
    setError("");
    setDimensions(initialState);
    router(navigation[wall]);
  };

  const resolveData = () => {
    dispatch(setWallDimentions({ [wall]: dimensions }));
  };

  const handleDimensions = ({ target }) => {
    const { name, value } = target;
    setDimensions((state) => ({ ...state, [name]: Number(value) }));
  };

  const saveData = () => {
    handleErrors();
  };

  return (
    <div id="container">
      <Aside page={wall} />
      <main>
        <div className="main-content">
          <h2>Por favor, insira as dimensões da parede {wall}</h2>
          <div className="wrapper">
            <input
              type="number"
              name="width"
              placeholder="Largura"
              value={dimensions.width}
              onChange={(e) => handleDimensions(e)}
            />
            <input
              type="number"
              name="height"
              value={dimensions.height}
              placeholder="Altura"
              onChange={(e) => handleDimensions(e)}
            />
            <input
              type="number"
              name="windows"
              placeholder="Janelas"
              value={dimensions.windows}
              onChange={(e) => handleDimensions(e)}
            />
            <input
              type="number"
              name="doors"
              placeholder="Portas"
              value={dimensions.doors}
              onChange={(e) => handleDimensions(e)}
            />
            <Button onClick={() => saveData()}>Salvar</Button>
          </div>
        </div>
        <Alert className={error && "error"} onClick={() => setError("")}>
          {error}
        </Alert>
      </main>
    </div>
  );
}

export default WallCalculator;
