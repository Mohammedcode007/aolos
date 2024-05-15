import styles from '../../../global.module.css'
import { FIELDSElement } from "../../../utils/data/entry";


export const FormFieldNewElemnt = ({
    addParagraph,
    setFormField,
    addImage,
    addHeading,
    isMobileScreen,
  }) => {
    const onClick = (field) => {
      if (field.name === "Paragraph") {
        addParagraph();
      } else if (field.name === "Heading") {
        addHeading();
      } else if (field.name === "Image") {
        addImage();
      }
    };
    return (
      <div
        className={styles.formFieldsDiv}
        style={{
          left: isMobileScreen && "0px",
          width: isMobileScreen && "100%",
          top: isMobileScreen && "21%",
        }}
      >
        <div className={styles.close}>
          <p onClick={() => setFormField("")}>x</p>
        </div>
        <div className={styles.formFields}>
          {FIELDSElement.map((field) => (
            <div
              onClick={() => onClick(field)}
              className={styles.formFieldElement}
              style={{
                backgroundColor: field.pay === true && "#cbd5e1",
                pointerEvents: field.pay === false && "none",
              }}
            >
              {field.icon}
              <p>{field.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };