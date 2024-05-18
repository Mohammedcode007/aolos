import React, { useState, useEffect } from "react";
import styles from "./RedirectPage.module.css";
import { IMAGES } from "../../assets/images/Images";
import Navbar from "../Common/Navebar/Navbar";
import { User, Email, Plus, Paint } from "../icons/Icons";
import { Route, useNavigate } from "react-router-dom";

const HeadingPopup = ({
  setBold,
  setItalic,
  setUnderline,
  setHeading,
  heading,
}) => {
  return (
    <div className={styles.leftSection}>
      <div className={styles.sectionBar}>
        <div className={styles.header}>
          <h5>Edit Heading</h5>
          <div>
            <button className={styles.save}>Save</button>
            <button>X</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.fonts}>
          <button onClick={() => setBold((bold) => !bold)}>B</button>
          <button onClick={() => setItalic((italic) => !italic)}>I</button>
          <button onClick={() => setUnderline((underline) => !underline)}>
            U
          </button>
        </div>
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className={styles.bigInput}
          type="text"
        />
      </div>
    </div>
  );
};

const FieldPopup = ({ field }) => {
  return (
    <div className={styles.leftSection}>
      <div className={styles.sectionBar}>
        <div className={styles.header}>
          <h5>Form Element</h5>
          <div>
            <button className={styles.save}>Save</button>
            <button>X</button>
          </div>
        </div>
      </div>
      <div className={styles.fields}>
        <div>
          <p className={styles.lable}>Field Type</p>
          <h2 className={styles.fieldName}>{field}</h2>
        </div>
        <div>
          <p className={styles.lable}>Label Name</p>
          <input type="text" />
        </div>
        <div>
          <p>Required</p>
          <div className={styles.required}>
            <p>Make this field required to enter</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

const RedirectPage = () => {
  const [selectedOption, setSelectedOption] = useState(location.pathname);
  const navigate = useNavigate(); // Initialize useHistory
  const handleNavigation = (route) => {
    setSelectedOption(route);
    navigate(route);
  };
  const [showPopup, setShowPopup] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [heading, setHeading] = useState("");
  return (
    <>
      <Navbar
        logoPath=""
        profileImagePath={IMAGES.profilePic}
        profileName="John Doe"
        email="john.doe@example.com"
      />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.sectionBar}>
            <div
              className={styles.sectionItem}
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
              style={{
                textDecoration: selectedOption === "/redirect" && "underline",
              }}
              className={styles.sectionItem}
              onClick={() => handleNavigation("/redirect")}
            >
              Redirect
            </div>
            <div className={styles.displayFlex}>
              <div onClick={() => handleNavigation("/paint")}>
                <Plus />
              </div>
              <div onClick={() => handleNavigation("/Painting")}>
                <Paint />
              </div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div
              onClick={() =>
                setShowPopup(showPopup == "heading" ? false : "heading")
              }
              className={styles.inputsSection}
            >
              <div className={styles.input}>
                <label htmlFor="heading">Heading</label>
                <div></div>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.fieldsSection}>
              <p>Fields</p>
              <div
                onClick={() =>
                  setShowPopup(showPopup === "field1" ? false : "field1")
                }
                className={styles.field}
              >
                <User />
                FaceBook
              </div>
              <div
                onClick={() =>
                  setShowPopup(showPopup === "field2" ? false : "field1")
                }
                className={styles.field}
              >
                <User />
                Twitter
              </div>
              <div
                onClick={() =>
                  setShowPopup(showPopup === "field3" ? false : "field1")
                }
                className={styles.field}
              >
                <Email />
                Email
              </div>
            </div>
          </div>
        </div>
        {showPopup === "heading" && (
          <HeadingPopup
            setHeading={setHeading}
            setBold={setBold}
            setItalic={setItalic}
            setUnderline={setUnderline}
            heading={heading}
          />
        )}
        {showPopup === "field1" && <FieldPopup field={"FaceBook"} />}
        {showPopup === "field2" && <FieldPopup field={"Twitter"} />}
        {showPopup === "field3" && <FieldPopup field={"email"} />}

        <div className={styles.rightSection}>
          <div className={styles.page}>
            <div className={styles.header}>
              <div className={styles.bullets}>
                <div className={styles.bullet}></div>
                <div className={styles.bullet}></div>
                <div className={styles.bullet}></div>
              </div>
              <div className={styles.link}>
                https://woo-box.netlify.app/entry/0xlCkn
              </div>
            </div>
            <div className={styles.content}>
              <p
                style={{
                  fontWeight: bold ? "bold" : null,
                  fontStyle: italic ? "italic" : null,
                  textDecoration: underline ? "underline" : null,
                }}
              >
                {heading || "[You Have Won the Price!]"}
              </p>
              <div className={styles.inputs}>
                {/* <div>
                  <div className={styles.field}>
                    <User /> 
                    FaceBook
                  </div>
                  <div className={styles.field}>
                    <User />
                    Twitter
                  </div>
                </div> */}
                <div className={styles.field}>
                  <Email />
                  Prize Won
                </div>
                <button>Start Spinning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedirectPage;
