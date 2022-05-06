import React, { useState } from "react";
import data from "./data";
export default function Accordion() {
  const [show, setShow] = useState(false);
  function togle() {
    setShow(!show);
  }

  return (
    <div className="accordion">
      <h1>Questions and Answers</h1>
      {data.map((item) => {
        return (
          <div classNam="items" id={item.id} {...item}>
            <h1>{item.question}</h1>
            <div></div>
            <button className="btn" onClick={togle}>
              {show ? "X" : "Y"}
            </button>

            {show && <p>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
