import React from 'react';
import CheckIcon from "../assets/icons/CheckIcon";

const Action = (props) => (
      <div onClick={props.handlePick}>{props.data ? <CheckIcon /> : ""}</div>
);

export default Action