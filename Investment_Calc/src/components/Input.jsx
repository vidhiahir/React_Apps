import React from "react";

const Input = ({ formData, onInputChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={formData.initial}
            onChange={(event) => onInputChange("initial", event.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={formData.annual}
            onChange={(event) => onInputChange("annual", event.target.value)}
          />
        </div>
      </div>
      <div className="input-group space">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={formData.returni}
            onChange={(event) => onInputChange("returni", event.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            value={formData.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
