import styles from '../../../global.module.css'
import {useRef,useState  } from 'react';
import {PopupHeader} from '../PopupHeader'
import {
  
    UPload,
    LeftRotation,
    RightRotation,
    Stop,
 
  } from "../../icons/Icons";
export const ImagePopup = ({
    setFormField,
    setImageCounter,
    imageCounter,
    handleSaveClick,
    valueImage,
    setvalueImage,
    selectedImage,
    setSelectedImage,
  }) => {
    const fileInputRef = useRef(null);
    const [rotationAngle, setRotationAngle] = useState(0);
    const updateImageValue = (idToUpdate, newValue) => {
      console.log(idToUpdate, "newValue");
  
      setImageCounter((prevArray) => {
        return prevArray.map((item) => {
          if (item.id === idToUpdate) {
            return { ...item, value: newValue };
          }
          return item;
        });
      });
    };
    const handleUploadClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      updateImageValue(valueImage.id, imageUrl);
  
      console.log("Selected file:", file);
    };
  
    const handleRotateLeft = () => {
      setRotationAngle(rotationAngle - 90);
    };
  
    const handleRotateRight = () => {
      setRotationAngle(rotationAngle + 90);
    };
  
    const handleDeleteImage = () => {
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };
  
    return (
      <div className={styles.popup}>
        <PopupHeader
          heading={selectedImage}
          title={"Edit Image"}
          onClick={() => setFormField("")}
          handleSaveClick={handleSaveClick}
        />
        <div className={styles.fields}>
          <div className={styles.options}>
            <div onClick={handleUploadClick}>
              <UPload />
            </div>
            <div onClick={handleRotateLeft}>
              <LeftRotation />
            </div>
            <div onClick={handleRotateRight}>
              <RightRotation />
            </div>
            <div className={styles.stop} onClick={handleDeleteImage}>
              <Stop />
            </div>
          </div>
          <div className={styles.imageContainer}>
            {selectedImage && (
              <img
                className={styles.imageShow}
                src={selectedImage}
                alt="Uploaded Image"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
            )}
          </div>
          <input
            type="file"
            id="image"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="image">Link image to URL (optional)</label>
          <input type="link" id="image" />
        </div>
      </div>
    );
  };
  