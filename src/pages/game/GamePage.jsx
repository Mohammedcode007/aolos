import styles from "../../global.module.css";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { IMAGES } from "../../assets/images/Images";
import Navbar from "../../components/Common/Navebar/Navbar";
import EditeSpinItemList from "../../components/GameComponent/EditeSpinItemList";
import { generateRandomColor } from "../../utils/Functions/Functions";
import ReactQuillCommon from "../../components/Common/ReactQuillCommon/ReactQuillCommon";
import {
  IconPaintbrush,
  IconBgColors,
  Close,
  Paint,
  Plus,
} from "../../components/icons/Icons";
import { useNavigate } from "react-router-dom";
import { Done, Loader } from "../../components/Common/Loader/Loader";
import { FieldPopupPaint } from "../../components/entryComponent/FieldPopupPaint";
import RightSectionGame from "../../components/GameComponent/RightSectionGame";
import TableUser from "../../components/GameComponent/TableUser";

import InputTags from "../../components/Common/InputTags";

const GamePage = () => {
  const [newCol1, setNewCol1] = useState("");

  const [underline, setUnderline] = useState({ p: false, h: false });
  const [selected, setSelected] = useState([]);
  const createInitialDataRow = (item) => ({
    col1: item,
    col2: 0,
    col3: 0,
    col4: "No Win",
    wheelColor: "#FFFFFF",
    textColor: "#000000",
  });

  const initialDataRows = selected.map(createInitialDataRow);

  const [data, setData] = useState(initialDataRows);
  useEffect(() => {
    if (selected.length > 0) {
      const lastItem = selected[selected.length - 1];
      const newRow = {
        col1: lastItem,
        col2: 0,
        col3: 0,
        col4: "No Win",
        wheelColor: generateRandomColor(),
        textColor: "white",
      };
      setData([...data, newRow]);
      setNewCol1("");
    }
  }, [selected]);

  const [color, setColor] = useState("#ff0000");
  const [isNumberSpinner, setisNumberSpinner] = useState(null);
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);
  const [contentWidth, setcontentWidth] = useState("100%");
  const [activeTab, setActiveTab] = useState(1);
  const [fullScreen, setFullScreen] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedColorBorder, setSelectedColorBorder] = useState("#e5dede ");
  const [selectedColorSpinner, setSelectedColorSpinner] = useState("black");

  const [selectedImageCover, setSelectedImageCover] = useState(null);
  const [selectedImagespinner, setSelectedImagespinner] = useState(null);

  const [valueHeading, setvalueHeading] = useState();
  const [valueParg, setvalueParg] = useState();
  const [valueAlignPar, setvalueAlignPar] = useState("center");
  const [valueAlignHeading, setvalueAlignHeading] = useState("center");
  const [valueAlignDes, setvalueAlignDes] = useState("center");

  const [text, setText] = useState("");
  const [textHeading, setTextHeading] = useState("");
  const [textDes, setTextDes] = useState("");

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isMobileScreenTwo, setIsMobileScreenTwo] = useState(false);
  const [selectedOptionDrop, setSelectedOptionDrop] = useState("");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displayColorPickerBorder, setDisplayColorPickerborder] =
    useState(false);
  const [displayColorPickerSpinner, setDisplayColorPickerSpinner] =
    useState(false);

  const handleChangebackground = (color) => {
    setSelectedColor(color.hex);
    setDisplayColorPicker(false); // Close the color picker after selecting a color
  };
  const handleChangeBorder = (color) => {
    setSelectedColorBorder(color.hex);
    setDisplayColorPicker(false); // Close the color picker after selecting a color
  };
  const handleChangeSpinner = (color) => {
    setSelectedColorSpinner(color.hex);
    setDisplayColorPicker(false); // Close the color picker after selecting a color
  };

  const handleSelect = (value) => {
    setSelectedOptionDrop(value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (activeTab === 1) {
      setFullScreen(false);

      setcontentWidth("100%");
    } else if (activeTab === 2) {
      setcontentWidth("400px");
      setFullScreen(false);
    } else if (activeTab === 3) {
      setcontentWidth("100vw");

      setFullScreen(true);
    } else if (activeTab === 4) {
      setIsMobileScreen(true);
      setIsMobileScreenTwo(true);
      setActiveTab(1);
    }
  }, [activeTab]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(null);
      setDone(null);
    }, 7000);
  }, [loading, done]);

  const [selectedOption, setSelectedOption] = useState(location.pathname);
  const [paintValue, setpaintValue] = useState(false);

  useEffect(() => {
    if (location.pathname) {
      setSelectedOption(location.pathname);
    }
  }, [location.pathname]);
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    setSelectedOption(route);
    navigate(route);
  };
  const handleNavigationPaint = () => {
    setpaintValue(!paintValue);
  };
  const handleTabClick = (tabNumber) => {
    setIsMobileScreen(true);
    setIsMobileScreenTwo(false);
    setActiveTab(tabNumber);
  };
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handelCloseLeftSection = () => {
    // setIsMobileScreen(false);
    setIsMobileScreenTwo(false);
  };

  return (
    <>
      <Navbar
        fullScreen={fullScreen}
        logoPath=""
        profileImagePath={IMAGES.profilePic}
        profileName="John Doe"
        email="john.doe@example.com"
      />
      <div className={styles.container}>
        <div
          className={styles.leftSection}
          style={{
            display:
              isMobileScreen === true && isMobileScreenTwo === false && "none",
            position: isMobileScreen === true && "absolute",
            width: isMobileScreen && "100%",
            zIndex: isMobileScreen && 99999,
          }}
        >
          <div className={styles.sectionBar}>
            <div
              className={styles.sectionItem}
              onClick={() => handleNavigation("/entry")}
            >
              Entry
            </div>
            <div
              className={styles.sectionItem}
              style={{
                textDecoration: selectedOption === "/game" && "underline",
              }}
              onClick={() => handleNavigation("/game")}
            >
              Game
            </div>
            <div
              className={styles.sectionItem}
              onClick={() => handleNavigation("/redirect")}
            >
              Redirect
            </div>

            <div className={styles.displayFlex}>
              <div onClick={() => handleNavigation("/paint")}>
                <Plus />
              </div>
              <div onClick={() => handleNavigationPaint()}>
                <Paint />
              </div>
              <div
                onClick={() => handelCloseLeftSection()}
                style={{
                  display:
                    !isMobileScreen === "false" ||
                    (isMobileScreenTwo === false && "none"),
                }}
              >
                <Close />
              </div>
            </div>
          </div>
          {paintValue ? (
            <div className={styles.fieldsSection} style={{ gap: 0 }}>
              <p>Fields</p>
              <div className={styles.fieldPaint}>
                <IconPaintbrush />
                <p
                  className={styles.ParagraphField}
                  style={{ color: "#102759" }}
                >
                  Theme
                </p>
              </div>
              <div className={styles.fieldPaint}>
                <IconPaintbrush />
                <p
                  className={styles.ParagraphField}
                  style={{ color: "#102759" }}
                >
                  Colors
                </p>
              </div>
              <div
                onClick={() =>
                  setShowPopup(showPopup === "field3" ? false : "field1")
                }
                className={styles.fieldPaint}
              >
                <IconBgColors />
                <p
                  className={styles.ParagraphField}
                  style={{ color: "#102759" }}
                >
                  background Colors
                </p>
              </div>
              {showPopup === "field1" && (
                <FieldPopupPaint
                  setShowPopup={setShowPopup}
                  field={"FaceBook"}
                  selectedColor={selectedColor}
                  isMobileScreen={isMobileScreen}
                  setSelectedColor={setSelectedColor}
                  setSelectedImageCover={setSelectedImageCover}
                  selectedImageCover={selectedImageCover}
                />
              )}
            </div>
          ) : (
            <div className={styles.sectionContent}>
              <div className={styles.inputsSection}>
                <div className="m-1">
                  <p className={styles.fwbold}>header</p>
                  <ReactQuillCommon
                    text={textHeading}
                    setText={setTextHeading}
                    setvalueAlignHeading={setvalueAlignHeading}
                    title="heading"
                  />
                </div>
                <div className="m-1">
                  <p className={styles.fwbold}>Description</p>
                  <ReactQuillCommon
                    textDes={textDes}
                    setTextDes={setTextDes}
                    setvalueAlignDes={setvalueAlignDes}
                    title="Description"
                  />
                </div>
                <div className="m-1">
                  <InputTags
                    title="Content on wheel"
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
                <div className="m-1 ">
                  <EditeSpinItemList
                    title="Spinner"
                    isImagePicker={true}
                    color={selectedColorSpinner}
                    handleChangeSpinner={handleChangeSpinner}
                    setDisplayColorPicker={setDisplayColorPickerSpinner}
                    displayColorPicker={displayColorPickerSpinner}
                    setSelectedImagespinner={setSelectedImagespinner}
                    selectedImagespinner={selectedImagespinner}
                  />
                </div>

                <div className="m-1 ">
                  <EditeSpinItemList
                    title="Select Option"
                    isDropdown={true}
                    options={[
                      { value: "top", label: "top" },
                      { value: "left", label: "left" },
                      { value: "right", label: "right" },
                      { value: "bottom", label: "bottom" },
                    ]}
                    onSelect={handleSelect}
                  />
                </div>
                <div className="m-1 ">
                  <EditeSpinItemList
                    title="border"
                    color={selectedColorBorder}
                    handleChangeBorder={handleChangeBorder}
                    setDisplayColorPicker={setDisplayColorPickerborder}
                    displayColorPicker={displayColorPickerBorder}
                  />
                </div>
                <div className="m-1 mb-3">
                  <EditeSpinItemList
                    title="Background"
                    isImagePicker={true}
                    selectedColor={selectedColor}
                    setDisplayColorPicker={setDisplayColorPicker}
                    displayColorPicker={displayColorPicker}
                    setSelectedColor={setSelectedColor}
                    handleChangebackground={handleChangebackground}
                    color={selectedColor}
                    setColor={setColor}
                    setSelectedImageCover={setSelectedImageCover}
                  />
                </div>

                <div className="m-1 mb-3 ">
                  <EditeSpinItemList
                    title="number"
                    numSpinner={true}
                    setisNumberSpinner={setisNumberSpinner}
                    isNumberSpinner={isNumberSpinner}
                  />
                </div>
                {isNumberSpinner && data.length > 0  && (
                  <div className="m-1 mb-3">
                    <TableUser
                      initialData={selected}
                      data={data}
                      setData={setData}
                      setNewCol1={setNewCol1}
                      newCol1={newCol1}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <RightSectionGame
          fullScreen={fullScreen}
          isMobileScreen={isMobileScreen}
          contentWidth={contentWidth}
          activeTab={activeTab}
          selectedColor={selectedColor}
          selectedImageCover={selectedImageCover}
          selectedImagespinner={selectedImagespinner}
          valueAlignPar={valueAlignPar}
          underline={underline}
          valueAlignHeading={valueAlignHeading}
          valueAlignDes={valueAlignDes}
          textDes={textDes}
          textHeading={textHeading}
          setvalueParg={setvalueParg}
          setvalueHeading={setvalueHeading}
          handleTabClick={handleTabClick}
          selected={data}
          selectedColorBorder={selectedColorBorder}
          selectedColorSpinner={selectedColorSpinner}
          selectedOptionDrop={selectedOptionDrop}
          isNumberSpinner={isNumberSpinner}
        />

        {loading === true && <Loader />}
        {done === true && <Done />}
      </div>
    </>
  );
};

export default GamePage;
