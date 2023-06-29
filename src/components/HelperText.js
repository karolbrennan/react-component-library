import React from "react";

/**
 * HelperText
 *
 * @param   {Object}  props  props.text is the helper text that will be displayed
 *
 * @return  {JSX}         Returns a tooltip element that shows the text on hover
 */
const HelperText = (props) => {
  let position = props.position ? props.position : "right";
  return (
    <span className={props.text ? "helper-block " + position : "hide"}>
      <i className="helper-info fi fi-br-info"></i>
      <span className="helper-text">{props.text}</span>
    </span>
  );
};
export default HelperText;
