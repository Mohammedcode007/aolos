import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "./Entry.module.css";
import { IMAGES } from "../../assets/images/Images";
import Navbar from "../../components/Common/Navebar/Navbar";
import InputFields from "../../components/Common/InputFields/InputFields";

import {
  HForm,
  IconPaintbrush,
  IconBgColors,
  UPload,
  Close,
  Mobile,
  Paint,
  FullScreen,
  PcScreen,
  Plus,
  ReorderIcon,
  Trash,
} from "../../components/icons/Icons";
import { useNavigate } from "react-router-dom";
import { Done, Loader } from "../../components/Common/Loader/Loader";
import { Reorder } from "framer-motion";
import CommonModal from "../../components/Common/CommonModal/CommonModal";
import { Button } from "react-bootstrap";
import { FormField } from "../../components/entryComponent/FormField";
import { FormFieldNewElemnt } from "../../components/entryComponent/FormFieldNewElemnt";
import { FieldPopup } from "../../components/entryComponent/FieldPopup";
import { FieldPopupPaint } from "../../components/entryComponent/FieldPopupPaint";
import { ParagraphPopup } from "../../components/entryComponent/ParagraphPopup";

import { ImagePopup } from "../../components/entryComponent/ImagePopup";
import RightSection from "../../components/entryComponent/RightSection";

const EntryPage = () => {
  const [selectedField, setSelectedField] = useState(null);
  const [bold, setBold] = useState({ p: false, h: false });
  const [italic, setItalic] = useState({ p: false, h: false });
  const [underline, setUnderline] = useState({ p: false, h: false });
  const [align, setAlign] = useState({ p: "center", h: "center" });
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);
  const [contentWidth, setcontentWidth] = useState("100%");
  const [activeTab, setActiveTab] = useState(1);
  const [fullScreen, setFullScreen] = useState(undefined);
  const [selectedImage, setSelectedImage] = useState(null);
  const [labelName, setlabelName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImageCover, setSelectedImageCover] = useState(null);
  const [lines, setLines] = useState([]); // State to hold list of lines
  const [linesParg, setLinesParg] = useState([]);
  const [paragraphCounter, setParagraphCounter] = useState([]);
  const [headingCounter, setHeadingCounter] = useState([]);
  const [imageCounter, setImageCounter] = useState([]);

  const [idParg, setidParg] = useState();
  const [valueHeading, setvalueHeading] = useState();
  const [valueParg, setvalueParg] = useState();
  const [valueImage, setvalueImage] = useState();
  const [valueAlignPar, setvalueAlignPar] = useState("center");
  const [valueAlignHeading, setvalueAlignHeading] = useState("center");

  const [text, setText] = useState("");
  const [textHeading, setTextHeading] = useState("");

  const [styleDisc, setstyleDisc] = useState(false);
  const [styleDecimal, setstyleDecimal] = useState(false);

  const [typeOfInput, setTypeOfInput] = useState("");

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isMobileScreenTwo, setIsMobileScreenTwo] = useState(false);
  const addParagraph = () => {
    setParagraphCounter((prevArray) => [
      ...prevArray,
      { id: prevArray.length + 1, value: "someValue" },
    ]);
  };

  const addHeading = () => {
    setHeadingCounter((prevArray) => [
      ...prevArray,
      { id: prevArray.length + 1, value: "someValue" },
    ]);
  };

  const addImage = () => {
    setImageCounter((prevArray) => [
      ...prevArray,
      { id: prevArray.length + 1, value: "someValue" },
    ]);
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

  const handleSaveClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(null);
      setDone(true);
    }, 5000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(null);
      setDone(null);
    }, 7000);
  }, [loading, done]);

  const handleTabClick = (tabNumber) => {
    setIsMobileScreen(true);
    setIsMobileScreenTwo(false);
    setActiveTab(tabNumber);
  };
  const handleFieldClick = (fieldData) => {
    setSelectedField(fieldData);
  };

  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.value);
  };
  const [selectedOption, setSelectedOption] = useState(location.pathname);
  const [paintValue, setpaintValue] = useState(false);

  useEffect(() => {
    if (location.pathname) {
      setSelectedOption(location.pathname);
    }
  }, [location.pathname]);
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    console.log(route);
    setSelectedOption(route);
    navigate(route);
  };
  const handleNavigationPaint = () => {
    setpaintValue(!paintValue);
  };

  const [formField, setFormField] = useState(false);
  const [fields, setFields] = useState([]);
  const updateFields = (field) => {
    if (fields.filter((f) => f.id == field.id).length > 0) {
      setFields(fields.filter((f) => f.id != field.id));
    } else {
      setFields([...fields, field]);
    }
  };

  const replaceItem = (array, newItem) => {
    const index = array.findIndex((item) => item.id === newItem.id);

    if (index !== -1) {
      const newArray = [
        ...array.slice(0, index),
        newItem,
        ...array.slice(index + 1),
      ];

      return newArray;
    } else {
      return array;
    }
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
              style={{
                textDecoration: selectedOption === "/entry" && "underline",
              }}
              onClick={() => handleNavigation("/entry")}
            >
              Entry
            </div>
            <div
              className={styles.sectionItem}
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
                {imageCounter.map((i, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setvalueImage(i);
                      setFormField(formField == "image" ? false : "image");
                    }}
                    className={styles.imageInput}
                  >
                    <label htmlFor="heading">Image</label>

                    {i.value !== "someValue" ? (
                      <img
                        className={styles.imageTabeOne}
                        src={i.value}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <div className={styles.image}></div>
                    )}
                  </div>
                ))}

                {headingCounter.map((i, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setvalueHeading(i);
                      setFormField(formField == "heading" ? false : "heading");
                    }}
                    className={styles.input}
                  >
                    <label htmlFor={`heading${index}`}>Heading</label>
                    <div></div>
                  </div>
                ))}
                {paragraphCounter.map((i, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setvalueParg(i);
                      return setFormField(
                        formField === "paragraph" ? false : "paragraph"
                      );
                    }}
                    className={styles.input}
                  >
                    <label htmlFor={`heading${index}`}>Paragraph</label>
                    <div></div>
                  </div>
                ))}
              </div>
              <div className={styles.divider}></div>
              <div className={styles.fieldsSection}>
                <p>Fields</p>
                <Reorder.Group values={fields} onReorder={setFields}>
                  {fields.map((field) => (
                    <Reorder.Item value={field} key={field.id}>
                      <div className={styles.displayFlex}>
                        <div
                          onClick={() =>
                            setFormField(
                              formField === field.id ? false : field.id
                            )
                          }
                          className={styles.field}
                        >
                          <div className={styles.fieldItem}>
                            {field.icon}
                            {field.name}
                          </div>

                          <div>
                            <ReorderIcon />
                          </div>
                        </div>
                        <div
                          className={styles.ml10_mb5}
                          onClick={() => setShowModal(true)}
                          // onClick={() => updateFields(field)}
                        >
                          <Trash />
                        </div>
                        <CommonModal
                          isMobileScreen={isMobileScreen}
                          show={showModal}
                          onHide={() => setShowModal(false)}
                          title="Delete Confirmation"
                          bodyText="Are you sure you want to delete this item?"
                          onConfirm={() => updateFields(field)}
                        />
                      </div>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>
              <p
                onClick={() => setFormField("fields")}
                className={styles.addLink}
              >
                Add form field
              </p>
              <div className={styles.buttonNewElemntDev}>
                <Button
                  onClick={() => setFormField("Add New Element")}
                  variant="primary"
                  className={styles.buttonNewElemnt}
                >
                  + Add New Element
                </Button>
              </div>
            </div>
          )}
        </div>
        {formField === "fields" && (
          <FormField
            onClick={updateFields}
            setFormField={setFormField}
            isMobileScreen={isMobileScreen}
          />
        )}

        {formField === "Add New Element" && (
          <FormFieldNewElemnt
            isMobileScreen={isMobileScreen}
            addHeading={addHeading}
            addImage={addImage}
            addParagraph={addParagraph}
            setFormField={setFormField}
          />
        )}
        {formField === "heading" && (
          <ParagraphPopup
            setHeadingCounter={setHeadingCounter}
            setvalueHeading={setvalueHeading}
            setvalueAlignHeading={setvalueAlignHeading}
            valueHeading={valueHeading}
            styleDisc={styleDisc}
            setstyleDisc={setstyleDisc}
            styleDecimal={styleDecimal}
            setstyleDecimal={setstyleDecimal}
            setLines={setLines}
            setTextHeading={setTextHeading}
            textHeading={textHeading}
            lines={lines}
            setText={setText}
            text={text}
            setLinesParg={setLinesParg}
            linesParg={linesParg}
            handleSaveClick={handleSaveClick}
            setFormField={setFormField}
            align={align.h}
            setBold={() =>
              setBold((state) => ({
                p: state.p,
                h: !state.h,
              }))
            }
            setItalic={() =>
              setItalic((state) => ({
                p: state.p,
                h: !state.h,
              }))
            }
            setUnderline={() =>
              setUnderline((state) => ({
                p: state.p,
                h: !state.h,
              }))
            }
            setAlign={(align) =>
              setAlign((state) => ({
                p: state.p,
                h: align,
              }))
            }
            setHeading={setHeading}
            heading={heading}
            title={"Edit Heading"}
          />
        )}
        {formField === "paragraph" && (
          <ParagraphPopup
            idParg={idParg}
            setvalueAlignPar={setvalueAlignPar}
            setParagraphCounter={setParagraphCounter}
            setvalueParg={setvalueParg}
            valueParg={valueParg}
            setText={setText}
            text={text}
            setTextHeading={setTextHeading}
            textHeading={textHeading}
            styleDisc={styleDisc}
            setstyleDisc={setstyleDisc}
            styleDecimal={styleDecimal}
            setstyleDecimal={setstyleDecimal}
            handleSaveClick={handleSaveClick}
            setFormField={setFormField}
            heading={paragraph}
            setLines={setLines}
            lines={lines}
            setLinesParg={setLinesParg}
            linesParg={linesParg}
            setAlign={(align) =>
              setAlign((state) => ({
                p: align,
                h: state.h,
              }))
            }
            setBold={() =>
              setBold((state) => ({
                p: !state.p,
                h: state.h,
              }))
            }
            setItalic={() =>
              setItalic((state) => ({
                p: !state.p,
                h: state.h,
              }))
            }
            setUnderline={() =>
              setUnderline((state) => ({
                p: !state.p,
                h: state.h,
              }))
            }
            align={align.p}
            setHeading={setParagraph}
            title={"Edit Paragraph"}
          />
        )}
        {formField === "image" && (
          <ImagePopup
            valueImage={valueImage}
            setvalueImage={setvalueImage}
            setImageCounter={setImageCounter}
            imageCounter={imageCounter}
            setFormField={setFormField}
            handleSaveClick={handleSaveClick}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
        {String(typeof formField) === String(typeof 1) && (
          <FieldPopup
            setFields={setFields}
            fields={fields}
            updateFields={updateFields}
            replaceItem={replaceItem}
            setlabelName={setlabelName}
            labelName={labelName}
            typeOfInput={typeOfInput}
            setTypeOfInput={setTypeOfInput}
            field={formField}
            setFormField={setFormField}
            handleSaveClick={handleSaveClick}
          />
        )}

        <RightSection
          fullScreen={fullScreen}
          isMobileScreen={isMobileScreen}
          contentWidth={contentWidth}
          activeTab={activeTab}
          selectedColor={selectedColor}
          selectedImageCover={selectedImageCover}
          align={align}
          imageCounter={imageCounter}
          headingCounter={headingCounter}
          valueAlignPar={valueAlignPar}
          bold={bold}
          italic={italic}
          underline={underline}
          paragraphCounter={paragraphCounter}
          fields={fields}
          valueAlignHeading={valueAlignHeading}
          linesParg={linesParg}
          text={text}
          textHeading={textHeading}
          typeOfInput={typeOfInput}
          setTypeOfInput={setTypeOfInput}
          handleTabClick={handleTabClick}
          labelName={labelName}
          setvalueParg={setvalueParg}
          setFormField={setFormField}
          formField={formField}
          setvalueHeading={setvalueHeading}
          setvalueImage={setvalueImage}
        />

        {loading === true && <Loader />}
        {done === true && <Done />}
      </div>
    </>
  );
};

export default EntryPage;
