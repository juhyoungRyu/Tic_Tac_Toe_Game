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

  useEffect(() => {
    let temp = [...userArr];
    let com = Array.from(new Array(9), (x, i) => i + 1);

    for (let i = 1; i < temp.length + 1; i++) {
      com.filter((n) => n !== temp[i]);
    }

    let num = Math.floor(Math.random() * com.length);
    let comTemp = [...comArr];
    comTemp.push(com[num]);
    setComArr(comTemp);

    let booleanTemp = JSON.parse(JSON.stringify(girdBoolean));
    booleanTemp[num - 1] = [true, "com"];
    setGridBoolean(booleanTemp);
  }, [userArr]);

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
