import React, { useState } from "react";
import { default as ReactSelect } from "react-select";
import "./styles.css";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function Dropdown(props) {
  const options = props.options;
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e);
    props.onChange(e);
  }

  return (
    <span
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet account(s)"
    >
      <ReactSelect
        options={options}
        isMulti
        placeholder={props.placeholder}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option
        }}
        onChange={handleChange.bind(this)}
        allowSelectAll={true}
      />
    </span>
  );
}

export default Dropdown;
