import styles from "../../../global.module.css";
import { useState } from "react";
import image1 from "../../../assets/image1.jpeg";
import image2 from "../../../assets/image1.jpeg";
export const FieldPopupPaint = ({
  field,
  setSelectedColor,
  selectedColor,
  setSelectedImageCover,
  selectedImageCover,
  isMobileScreen,

  setShowPopup,
}) => {
  const [colors, setColors] = useState([
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "magenta",
    "brown",
  ]);

  const backgrounds = [
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,

    // Add paths for all your images
  ];
  console.log(selectedImageCover);
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleBackgroundClick = (background) => {
    setSelectedImageCover(selectedImageCover ? "" : background);
  };

  return (
    <div
      className={styles.popupPaint}
      style={{ left: isMobileScreen && "0px" }}
    >
      <div
        className={styles.leftSection}
        style={{ width: isMobileScreen && "100%" }}
      >
        <div className={styles.sectionBar}>
          <div className={styles.fields}>
            <div className={styles.colorsContainerDiv}>
              <p onClick={() => setShowPopup(false)} className={styles.cursor}>
                close
              </p>
              <h5>Select Background</h5>
              <div className={styles.colorsContainer}>
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={styles.circle}
                    style={{
                      backgroundColor: color,
                      border:
                        color === selectedColor ? "2px solid black" : "none",
                    }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className={styles.disabled}>
              <h5>Other Colors</h5>
              <div className={styles.colorsContainer}>
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={styles.circle}
                    style={{
                      backgroundColor: color,
                      border:
                        color === selectedColor ? "2px solid black" : "none",
                    }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles.colorsContainerDiv}>
              <h5>Select Background image</h5>
              <div className={styles.backgroundsContainer}>
                {backgrounds.map((background, index) => (
                  <div
                    key={index}
                    className={styles.thumbnail}
                    style={{
                      backgroundImage: `url(${background})`,
                      border:
                        background === selectedImageCover
                          ? "2px solid black"
                          : "none",
                    }}
                    onClick={() => handleBackgroundClick(background)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
