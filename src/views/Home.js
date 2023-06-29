import React from "react";
import { useEffect, useState } from "react";
import Toggle from "../components/Toggle";

export default function Home() {
  const [toggleVal, setToggleVal] = useState(true);
  useEffect(() => {
    document.title = "React Component Library | Home";
  });
  document.addEventListener("toggleupdate", (event) => {
    setToggleVal(event.detail.value);
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
          <Toggle
            disabled={false}
            eventName="toggleupdate"
            info={"Lorem ipsum dolor"}
            label="Toggle"
            name="toggle"
            value={toggleVal}
          />
        </div>
      </div>
    </section>
  );
}
