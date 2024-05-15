import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({
  color,
  setDisplayColorPicker,
  displayColorPicker,
  title,
  handleChangebackground,
  handleChangeBorder,
  handleChangeSpinner,
}) => {
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        className="d-flex justify-content-center  align-items-center"
        onClick={handleClick}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: color,
          cursor: "pointer",
        }}
      />
      {displayColorPicker ? (
        <div style={{ position: "absolute", right: "50px", bottom: "50px" }}>
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose}
          />
          <SketchPicker
            color={color || "red"}
            onChange={title === 'border' ? handleChangeBorder : title === 'Spinner' ? handleChangeSpinner : handleChangebackground}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
