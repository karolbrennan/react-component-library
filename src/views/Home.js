import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "React Component Library | Home";
  });
  return (
    <section>
      <div className="row container justify-start">
        <div className="col full-width">
          <h1>Home</h1>
        </div>
      </div>
      <div className="row container justify-start">
        <div className="col wrap-text padding-xlg">
          <p>Lorem ipsum dolor.</p>
        </div>
      </div>
    </section>
  );
}
