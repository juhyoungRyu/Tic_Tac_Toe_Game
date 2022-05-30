import React, { useState, useEffect } from "react";
import "./Gird.css";

export const Grid = (props) => {
  const [girdStatus, setGridStatus] = useState(false);

  useEffect(() => {
    if (props.status !== null) {
      setGridStatus(true);
    }
  }, [props.status]);

  return (
    <div className="Grid" onClick={() => props.click(props.position)}>
      {girdStatus ? <></> : <div>짜잔</div>}
    </div>
  );
};
