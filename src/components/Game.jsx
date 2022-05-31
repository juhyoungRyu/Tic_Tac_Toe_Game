import React, { useState, useEffect } from "react";
import "./Game.css";
import { Grid } from "./Grid";

export const Game = () => {
  const [girdBoolean, setGridBoolean] = useState({
    1: [false, "none"], // Grid1
    4: [false, "none"],
    7: [false, "none"],
    2: [false, "none"], // Grid2
    5: [false, "none"],
    8: [false, "none"],
    3: [false, "none"], // Grid3
    6: [false, "none"],
    9: [false, "none"],
  });

  const judgeArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const [userArr, setUserArr] = useState([]);
  const [comArr, setComArr] = useState([]);

  const clickBox = (position) => {
    // Array에 추가하기
    let arrTemp = [...userArr];
    arrTemp.push(position);
    setUserArr(arrTemp);
    // Grid 안에 체크하기
    let booleanTemp = JSON.parse(JSON.stringify(girdBoolean));
    booleanTemp[position] = [true, "user"];
    setGridBoolean(booleanTemp);
  };

  useEffect(() => {
    console.log(girdBoolean);
  }, [girdBoolean]);

  return (
    <div className="Game">
      <section className="grid1">
        <Grid click={clickBox} position={1} status={girdBoolean} />
        <Grid click={clickBox} position={4} status={girdBoolean} />
        <Grid click={clickBox} position={7} status={girdBoolean} />
      </section>
      <section className="grid2">
        <Grid click={clickBox} position={2} status={girdBoolean} />
        <Grid click={clickBox} position={5} status={girdBoolean} />
        <Grid click={clickBox} position={8} status={girdBoolean} />
      </section>
      <section className="grid3">
        <Grid click={clickBox} position={3} status={girdBoolean} />
        <Grid click={clickBox} position={6} status={girdBoolean} />
        <Grid click={clickBox} position={9} status={girdBoolean} />
      </section>
    </div>
  );
};
