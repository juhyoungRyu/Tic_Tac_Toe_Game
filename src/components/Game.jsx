import React, { useState, useEffect } from "react";
import "./Game.css";
import { Grid } from "./Grid";

export const Game = () => {
  const [girdBoolean, setGridBoolean] = useState(
    { one: [null, ""], four: [null, ""], seven: [null, ""] }, // Grid1
    { two: [null, ""], five: [null, ""], eight: [null, ""] }, // Grid2
    { three: [null, ""], six: [null, ""], nine: [null, ""] } // Grid3
  );

  const [userArr, setUserArr] = useState([]);
  const [comArr, setComArr] = useState([]);

  const clickBox = (position) => {
    // Array에 추가하기
    let arrTemp = [...userArr];
    arrTemp.push(position);
    setUserArr(arrTemp);
    // Grid 안에 체크하기
    let booleanTemp = [...girdBoolean];
    setGridBoolean();
  };

  useEffect(() => {
    return console.log(userArr);
  }, [userArr]);

  return (
    <div className="Game">
      <section className="grid1">
        <Grid click={clickBox} position={1} status={girdBoolean.one} />
        <Grid click={clickBox} position={4} status={girdBoolean.two} />
        <Grid click={clickBox} position={7} status={girdBoolean.three} />
      </section>
      <section className="grid2">
        <Grid click={clickBox} position={2} status={girdBoolean.four} />
        <Grid click={clickBox} position={5} status={girdBoolean.five} />
        <Grid click={clickBox} position={8} status={girdBoolean.six} />
      </section>
      <section className="grid3">
        <Grid click={clickBox} position={3} status={girdBoolean.seven} />
        <Grid click={clickBox} position={6} status={girdBoolean.eight} />
        <Grid click={clickBox} position={9} status={girdBoolean.nine} />
      </section>
    </div>
  );
};
