"use client";
import { useState } from "react";
import "./page.css";

export default function Page() {
  const [numbers, setNumbers] = useState([5, 8, 9, 1, 3, 6, 7, 4, 2]);
  const Inc = () => {
    const sorted = numbers.sort((a, b) => {
      return a - b;
    });
    setNumbers([...sorted]);
  };
  const Dec = () => {
    const sorted = numbers.sort((a, b) => {
      return b - a;
    });
    setNumbers([...sorted]);
  };
  return (
    <div className="container">
      <div className="header">
        <p>Tuka's design</p>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            Dec();
          }}
        >
          DEC
        </button>
        <button
          onClick={() => {
            Inc();
          }}
        >
          INC
        </button>
      </div>
      <div className="numbers">
        {numbers.map((number, index) => {
          return (
            <div key={index} className="number">
              <p>{number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
