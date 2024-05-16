import React, { useState } from "react";
import ColorPicker from "../Common/ColorPicker";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { IconImage } from "../../components/icons/Icons";
import { Form } from "react-bootstrap";

const EditeSpinItemList = ({
  title,
  color,
  isDropdown,
  options,
  selectedColor,
  onSelect,
  setDisplayColorPicker,
  displayColorPicker,
  handleChangeBorder,
  handleChangeSpinner,
  isImagePicker,
  handleChangebackground,
  setSelectedImagespinner,
  setSelectedImageCover,
  isspinNumber,
}) => {
  const uploader = Uploader({
    apiKey: "free",
  });

  const optionsImage = { multi: false };

  return (
    <div className="d-flex justify-content-between w-100 align-items-center">
      <p className="fw-bold m-0">{title}</p>
      <div className="d-flex align-items-center">
        <ColorPicker
          color={color}
          handleChangebackground={handleChangebackground}
          setDisplayColorPicker={setDisplayColorPicker}
          displayColorPicker={displayColorPicker}
          selectedColor={selectedColor}
          title={title}
          handleChangeBorder={handleChangeBorder}
          handleChangeSpinner={handleChangeSpinner}
        />
        {isDropdown && (
          <select
            onChange={(e) => onSelect(e.target.value)}
            className="form-select"
            style={{ marginLeft: "10px", width: "150px", height: "35px" }}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
        {isImagePicker && (
          <div
            style={{
              right: "0",
              top: "40px",
              zIndex: "1000",
            }}
          >
            <UploadButton
              uploader={uploader}
              options={optionsImage}
              onComplete={(files) => {
                if (title === "Spinner") {
                  setSelectedImagespinner(
                    files.map((x) => x.fileUrl).join("\n")
                  );
                } else if (title === "Background") {
                  setSelectedImageCover(files.map((x) => x.fileUrl).join("\n"));
                }
              }}
            >
              {({ onClick }) => (
                <div onClick={onClick}>
                  <IconImage />
                </div>
              )}
            </UploadButton>
          </div>
        )}
        {isspinNumber && (
          <Form.Control type="number" placeholder="Enter number" />
        )}
      </div>
    </div>
  );
};

export default EditeSpinItemList;
