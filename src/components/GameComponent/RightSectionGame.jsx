import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "../../global.module.css";
import { HForm, Mobile, FullScreen, PcScreen } from "../icons/Icons";
import WheelComponent from "../../components/Common/WheelComponent";

const RightSectionGame = ({
  selected,
  fullScreen,
  isMobileScreen,
  contentWidth,
  activeTab,
  selectedColorBorder,
  selectedColor,
  selectedColorSpinner,
  selectedImageCover,
  selectedImagespinner,
  setSelectedImageCover,
  valueAlignHeading,
  textHeading,
  valueAlignDes,
  textDes,
  handleTabClick,
  selectedOptionDrop,
}) => {
  const [winner, setWinner] = useState("winner");
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    setWinner(winner);
  };
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
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      cursor: "pointer",
                      textAlign: valueAlignHeading,
                    }}
                  >
                    {textHeading ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: textHeading,
                        }}
                      />
                    ) : (
                      "[Header]"
                    )}
                  </div>

                  <div
                    style={{
                      cursor: "pointer",
                      textAlign: valueAlignDes,
                    }}
                  >
                    {textDes ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: textDes,
                        }}
                      />
                    ) : (
                      "[Description]"
                    )}
                  </div>
                  <div>
                    <WheelComponent
                      segments={selected}
                      selectedOptionDrop={selectedOptionDrop}
                      segColors={segColors}
                      // selectedOptionDrop="right"
                      winningSegment="won 10"
                      onFinished={(winner) => onFinished(winner)}
                      primaryColor={selectedColorSpinner}
                      contrastColor={selectedColorBorder}
                      buttonText="Spin"
                      isOnlyOnce={false}
                      size={200}
                      upDuration={100}
                      downDuration={1000}
                      fontFamily="Arial"
                      primaryColoraround={selectedColorBorder}
                      primaryImage={selectedImagespinner}
                    />
                    <p>{winner}</p>
                  </div>
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
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      cursor: "pointer",
                      textAlign: valueAlignHeading,
                    }}
                  >
                    {textHeading ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: textHeading,
                        }}
                      />
                    ) : (
                      "[Header]"
                    )}
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      textAlign: valueAlignDes,
                    }}
                  >
                    {textDes ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: textDes,
                        }}
                      />
                    ) : (
                      "[Description]"
                    )}
                  </div>
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
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      cursor: "pointer",
                      textAlign: valueAlignHeading,
                    }}
                  >
                    {textHeading ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: textHeading,
                        }}
                      />
                    ) : (
                      "[Header]"
                    )}
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      textAlign: valueAlignDes,
                    }}
                  >
                    {textDes ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: textDes,
                        }}
                      />
                    ) : (
                      "[Description]"
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSectionGame;
