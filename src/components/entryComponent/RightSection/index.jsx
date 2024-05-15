import React from "react";
import "react-quill/dist/quill.snow.css";
import styles from "../../../global.module.css";

import InputFields from "../../Common/InputFields/InputFields";

import { HForm, Mobile, FullScreen, PcScreen } from "../../icons/Icons";

const RightSection = ({
  fullScreen,
  isMobileScreen,
  contentWidth,
  activeTab,
  selectedColor,
  selectedImageCover,
  align,
  imageCounter,
  headingCounter,
  valueAlignPar,
  bold,
  italic,
  underline,
  paragraphCounter,
  fields,
  valueAlignHeading,
  text,
  linesParg,
  textHeading,
  typeOfInput,
  setTypeOfInput,
  handleTabClick,
  labelName,
  setvalueParg,
  setFormField,
  formField,
  setvalueHeading,
  setvalueImage,
}) => {
  return (
    <div
      className={fullScreen === true ? styles.fullScreen : styles.rightSection}
      style={{ padding: isMobileScreen === true && "0px" }}
    >
      <div className={styles.page}>
        <div
          className={fullScreen === true ? styles.displayNone : styles.header}
        >
          <div className={styles.bullets}>
            <div className={styles.bullet}></div>
            <div className={styles.bullet}></div>
            <div className={styles.bullet}></div>
          </div>
          <div className={styles.link}>
            https://woo-box.netlify.app/entry/0xlCkn
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            width: contentWidth,
            marginLeft: contentWidth === "400px" && "calc(50% - 200px)",
          }}
        >
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${activeTab === 1 && styles.active}`}
              onClick={() => handleTabClick(1)}
            >
              <PcScreen />
            </div>
            <div
              className={`${styles.tab} ${activeTab === 2 && styles.active}`}
              onClick={() => handleTabClick(2)}
            >
              <Mobile />
            </div>
            <div
              className={`${styles.tab} ${activeTab === 3 && styles.active}`}
              onClick={() => handleTabClick(3)}
            >
              <FullScreen />
            </div>
            <button
              style={{
                display: !isMobileScreen && "none",
              }}
              className={`${styles.tab} ${activeTab === 4 && styles.active}`}
              onClick={() => handleTabClick(4)}
            >
              {" "}
              <HForm />
            </button>
          </div>

          {activeTab === 1 && (
            <div className={styles.tabContent}>
              <div
                className={styles.pageContent}
                style={{
                  backgroundColor: selectedColor ? selectedColor : "#3f51b5",
                  backgroundImage:
                    selectedImageCover && `url(${selectedImageCover})`,
                }}
              >
                <div style={{ justifyContent: align.h, textAlign: "center" }}>
                  {imageCounter.map((image, index) => {
                    return (
                      <img
                        onClick={() => {
                          setvalueImage(image);
                          setFormField(formField == "image" ? false : "image");
                        }}
                        style={{ cursor: "pointer" }}
                        className={styles.imageTabeOne}
                        src={image.value}
                        alt="Uploaded Image"
                      />
                    );
                  })}
                

                  {headingCounter.map((i, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setvalueHeading(i);
                          setFormField(
                            formField == "heading" ? false : "heading"
                          );
                        }}
                        style={{
                          cursor: "pointer",
                          textAlign: valueAlignHeading,
                        }}
                      >
                        {linesParg.map((line, index) => (
                          <ul>
                            <li key={index}> {line}</li>
                          </ul>
                        ))}
                        {textHeading ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: i.value,
                            }}
                          />
                        ) : (
                          "[Header]"
                        )}
                      </div>
                    );
                  })}
                </div>
                <div style={{ justifyContent: align.p }}>
                  <p
                    className={styles.paragraph}
                    style={{
                      textAlign: valueAlignPar,

                      fontWeight: bold.p ? "bold" : null,
                      fontStyle: italic.p ? "italic" : null,
                      textDecoration: underline.p ? "underline" : null,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {paragraphCounter.map((i, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setvalueParg(i);
                            setFormField(
                              formField == "paragraph" ? false : "paragraph"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {linesParg.map((line, index) => (
                            <ul>
                              <li key={index}> {line}</li>
                            </ul>
                          ))}
                          {text ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: i.value }}
                            />
                          ) : (
                            "[paragraph]"
                          )}
                        </div>
                      );
                    })}
                  </p>
                </div>
                <div className={styles.inputs}>
                  <div>
                    {fields.map((field) => (
                      <div
                        className={styles.field}
                        key={field.id}
                        style={{
                          width: isMobileScreen && "100%",
                          padding: isMobileScreen && "0px",
                        }}
                      >
                        <InputFields
                          label={field.label}
                          typeOfInput={typeOfInput}
                          setTypeOfInput={setTypeOfInput}
                          type={field.type}
                          placeholder={field.placeholder}
                          value=""
                          required={field.required}
                          // handleChange={handleInputChange}
                          groupWrapper={styles.groupWrapper}
                          inputStyle={styles.inputStyle}
                          labelStyle={styles.labelStyle}
                          icon={field.icon}
                        />
                      </div>
                    ))}
                  </div>
                  <button>Start Spinning</button>
                </div>
              </div>
            </div>
          )}

          {/* Content for Tab 2 */}
          {activeTab === 2 && (
            <div className={styles.tabContent}>
              <div
                className={styles.pageContent}
                style={{
                  backgroundColor: selectedColor ? selectedColor : "#3f51b5",
                  backgroundImage:
                    selectedImageCover && `url(${selectedImageCover})`,
                }}
              >
                <div style={{ justifyContent: align.h, textAlign: "center" }}>
                  {imageCounter.map((image, index) => {
                    return (
                      <img
                        onClick={() => {
                          setvalueImage(image);
                          setFormField(formField == "image" ? false : "image");
                        }}
                        style={{ cursor: "pointer" }}
                        className={styles.imageTabeOne}
                        src={image.value}
                        alt="Uploaded Image"
                      />
                    );
                  })}
                  <p
                    style={{
                      textAlign: valueAlignHeading,
                      fontWeight: bold.h ? "bold" : null,
                      fontStyle: italic.h ? "italic" : null,
                      textDecoration: underline.h ? "underline" : null,
                    }}
                  >
                    {headingCounter.map((i, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setvalueHeading(i);
                            setFormField(
                              formField == "heading" ? false : "heading"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {linesParg.map((line, index) => (
                            <ul>
                              <li key={index}> {line}</li>
                            </ul>
                          ))}
                          {textHeading ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: i.value,
                              }}
                            />
                          ) : (
                            "[Header]"
                          )}
                        </div>
                      );
                    })}{" "}
                  </p>
                </div>
                <div style={{ justifyContent: align.p }}>
                  <p
                    className={styles.paragraph}
                    style={{
                      textAlign: valueAlignPar,

                      fontWeight: bold.p ? "bold" : null,
                      fontStyle: italic.p ? "italic" : null,
                      textDecoration: underline.p ? "underline" : null,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {paragraphCounter.map((i, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setvalueParg(i);
                            setFormField(
                              formField == "paragraph" ? false : "paragraph"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {linesParg.map((line, index) => (
                            <ul>
                              <li key={index}> {line}</li>
                            </ul>
                          ))}
                          {text ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: i.value }}
                            />
                          ) : (
                            "[paragraph]"
                          )}
                        </div>
                      );
                    })}
                  </p>
                </div>
                <div className={styles.inputs}>
                  <div>
                    {fields.map((field) => (
                      <div
                        className={styles.field}
                        key={field.id}
                        style={{ width: isMobileScreen && "100%" }}
                      >
                        <InputFields
                          label={labelName}
                          type={field.type}
                          placeholder={field.placeholder}
                          value=""
                          // handleChange={handleInputChange}
                          groupWrapper={styles.groupWrapper}
                          inputStyle={styles.inputStyle}
                          labelStyle={styles.labelStyle}
                          icon={field.icon}
                        />
                      </div>
                    ))}
                  </div>
                  <button>Start Spinning</button>
                </div>
              </div>
            </div>
          )}

          {/* Content for Tab 3 */}
          {activeTab === 3 && (
            <div className={styles.tabContent}>
              <div
                className={styles.pageContent}
                style={{
                  backgroundColor: selectedColor ? selectedColor : "#3f51b5",
                  backgroundImage:
                    selectedImageCover && `url(${selectedImageCover})`,
                }}
              >
                <div style={{ justifyContent: align.h, textAlign: "center" }}>
                  {imageCounter.map((image, index) => {
                    return (
                      <img
                        onClick={() => {
                          setvalueImage(image);
                          setFormField(formField == "image" ? false : "image");
                        }}
                        style={{ cursor: "pointer" }}
                        className={styles.imageTabeOne}
                        src={image.value}
                        alt="Uploaded Image"
                      />
                    );
                  })}
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: bold.h ? "bold" : null,
                      fontStyle: italic.h ? "italic" : null,
                      textDecoration: underline.h ? "underline" : null,
                    }}
                  >
                    {headingCounter.map((i, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setvalueHeading(i);
                            setFormField(
                              formField == "heading" ? false : "heading"
                            );
                          }}
                          style={{
                            cursor: "pointer",
                            textAlign: valueAlignHeading,
                          }}
                        >
                          {linesParg.map((line, index) => (
                            <ul>
                              <li key={index}> {line}</li>
                            </ul>
                          ))}
                          {textHeading ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: i.value,
                              }}
                            />
                          ) : (
                            "[Header]"
                          )}
                        </div>
                      );
                    })}{" "}
                  </p>
                </div>
                <div style={{ justifyContent: align.p }}>
                  <p
                    className={styles.paragraph}
                    style={{
                      textAlign: valueAlignPar,

                      fontWeight: bold.p ? "bold" : null,
                      fontStyle: italic.p ? "italic" : null,
                      textDecoration: underline.p ? "underline" : null,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {paragraphCounter.map((i, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setvalueParg(i);
                            setFormField(
                              formField == "paragraph" ? false : "paragraph"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {linesParg.map((line, index) => (
                            <ul>
                              <li key={index}> {line}</li>
                            </ul>
                          ))}
                          {text ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: i.value }}
                            />
                          ) : (
                            "[paragraph]"
                          )}
                        </div>
                      );
                    })}
                  </p>
                </div>
                <div className={styles.inputs}>
                  <div>
                    {fields.map((field) => (
                      <div
                        className={styles.field}
                        key={field.id}
                        style={{ width: isMobileScreen && "100%" }}
                      >
                        <InputFields
                          label={labelName}
                          type={field.type}
                          placeholder={field.placeholder}
                          value=""
                          required={field.required}
                          // handleChange={handleInputChange}
                          groupWrapper={styles.groupWrapper}
                          inputStyle={styles.inputStyle}
                          labelStyle={styles.labelStyle}
                          icon={field.icon}
                        />
                      </div>
                    ))}
                  </div>

                  <button>Start Spinning</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSection;
