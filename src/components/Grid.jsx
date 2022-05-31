import React, { useState, useEffect } from "react";
import "./Gird.css";

export const Grid = (props) => {
  let user = false;
  if (props.status[props.position][1] === "user") {
    user = true;
  }

  return (
    <div
      className="Grid"
      onClick={() => {
        props.click(props.position);
      }}
    >
      {props.status[props.position][0] ? (
        user ? (
          <div>user</div>
        ) : (
          <div>com</div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
