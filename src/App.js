import "./styles.css";
import Accordion from "./Accordion";
import data from "./data";
import React, { useState } from "react";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="App">
        <section>
          {questions.map((question) => {
            return <Accordion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
