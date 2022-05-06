import React, { useState } from "react";

export default function Accordion({ question, answer }) {
  const [show, setShow] = useState(false);
  function togle() {
    setShow(!show);
  }

  return (
    <article classname="article">
      <header className="header">
        <h1>{question}</h1>

        <button className="btn" onClick={togle}>
          {show ? "-" : "+"}
        </button>
      </header>
      {show && <p className="p">{answer}</p>}
    </article>
  );
}
