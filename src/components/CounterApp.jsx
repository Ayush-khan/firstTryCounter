import React, { useState } from "react";
// components is here now
const CounterApp = () => {
  const [conter, setCounter] = useState(0);
  const AddedValue = () => {
    setCounter(conter + 1);
  };
  const SubstractByONe = () => {
    if (conter > 0) {
      setCounter(conter - 1);
    } else {
      setCounter(conter);
    }
  };
  const AddedByFive = () => {
    let presentValue = conter;
    presentValue = presentValue + 5;
    conter = presentValue;
    setCounter(conter);
  };
  const SubstractBYFive = () => {
    let presenValue = conter;
    if (presenValue >= 5) {
      presenValue = presenValue - 5;
      conter = presenValue;
      setCounter(conter);
    }
  };
  return (
    <div
      // components is here now
      style={{
        background: "black",
        width: "50%",
        margin: "auto",
        textAlign: "center",
        Color: "white",
      }}
    >
      <div
        style={{
          color: "white",
          padding: "20px",
          fontSize: "3rem",
          fontWeight: "500",
        }}
      >
        CounterApp: {conter}
      </div>
      <button
        style={{
          padding: "5px",
          marginBottom: "20px",
          fontWeight: "500",
          background: "green",
          color: "black",
          fontSize: "1rem",
        }}
        onClick={() => AddedByFive()}
      >
        Added+5
      </button>
      <button
        style={{
          padding: "5px",
          marginBottom: "20px",
          fontWeight: "500",
          background: "green ",
          color: "black",
          fontSize: "1rem",
        }}
        onClick={() => AddedValue()}
      >
        Added By One
      </button>
      <button
        style={{
          padding: "5px",
          marginBottom: "20px",
          fontWeight: "500",
          background: "red",
          color: "black",
          fontSize: "1rem",
        }}
        onClick={() => SubstractByONe()}
      >
        Substract by One
      </button>
      <button
        style={{
          padding: "5px",
          marginBottom: "20px",
          fontWeight: "500",
          background: "red",
          color: "black",
          fontSize: "1rem",
        }}
        onClick={() => SubstractBYFive()}
      >
        Substract-5
      </button>
    </div>
  );
};

export default CounterApp;
