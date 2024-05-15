
import styles from '../../../global.module.css'
import { FIELDS } from "../../../utils/data/entry";


export const FormField = ({ onClick, setFormField, isMobileScreen }) => {
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
          {FIELDS.map((field) => (
            <div onClick={() => onClick(field)} className={styles.formField}>
              {field.icon}
              <p>{field.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };  