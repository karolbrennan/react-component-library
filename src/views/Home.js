import React from "react";
import { useEffect, useState } from "react";
import Toggle from "../components/Toggle/Toggle";
import Select from "../components/Select/Select";

export default function Home() {
  const [toggleVal, setToggleVal] = useState(true);
  const [selectVal, setSelectVal] = useState(true);
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 4" },
    { value: "4", label: "Option 4" },
  ];
  useEffect(() => {
    document.title = "React Component Library | Home";
  });
  document.addEventListener("valueupdate", (event) => {
    switch (event.detail.property) {
      case "toggle":
        setToggleVal(event.detail.value);
        break;
      case "select":
        setSelectVal(event.detail.value);
        break;
    }
  });
  return (
    <section>
      <div className="row container justify-start">
        <div className="col full-width">
          <h1>Home</h1>
        </div>
      </div>
      {/*  Toggle  */}
      <div className="row container justify-start">
        <div className="col full-width">
          <h2>Toggle</h2>
        </div>
        <div className="col wrap-text padding-xlg">
          <code>{`<Toggle
  disabled={false}
  eventName="valueupdate"
  info={"Lorem ipsum dolor"}
  label="Toggle"
  name="toggle"
  value={toggleVal}
/>`}</code>
        </div>
        <div className="col wrap-text padding-xlg">
          <h3>Example</h3>
          <Toggle
            disabled={false}
            eventName="valueupdate"
            info={"Lorem ipsum dolor"}
            label="Toggle"
            name="toggle"
            value={toggleVal}
          />
        </div>
      </div>
      {/*  Select  */}
      <div className="row container justify-start">
        <div className="col full-width">
          <h2>Select</h2>
        </div>
        <div className="col wrap-text padding-xlg">
          <code>{`<Toggle
  disabled={false}
  eventName="valueupdate"
  info={"Lorem ipsum dolor"}
  label="Toggle"
  name="toggle"
  value={toggleVal}
/>`}</code>
        </div>
        <div className="col wrap-text padding-xlg">
          <h3>Example</h3>
          <Select
            show={true}
            eventName="valueupdate"
            id="select"
            disabled={false}
            label="Custom Dropdown"
            name="select"
            options={options}
            value={selectVal}
          />
        </div>
      </div>
    </section>
  );
}
