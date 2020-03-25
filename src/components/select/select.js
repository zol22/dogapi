import React from "react";
import "./select.css";
import "../dog-image/dog-image.css";

const Select = props => {
  const getErrorView = () => {
    return alert("Sorry, cannot display the data");
  };

  const handleChange = event => {
    props.onSelect(event.target.value);
  };

  const getSelectView = () => {
    return (
      <div className="select">
        <h1 className="header">Select your doggy</h1>
        <select onChange={handleChange} className="breed-select">
          {props.dogList.map((breed, index) => {
            return (
              <option value={breed} key={index}>
                {breed}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  return (
    <div className="select-container">
      {props.dogList ? getSelectView() : null}
      {props.error ? getErrorView : null}
    </div>
  );
};

export default Select;
