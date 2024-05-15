import styles from '../../../global.module.css'
import {PopupHeader} from '../PopupHeader'
import {FIELDS} from '../../../utils/data/entry'
export const FieldPopup = ({
    field,
    setFormField,
    handleSaveClick,
    fields,
    labelName,
    setlabelName,
    replaceItem,
    setFields,
    typeOfInput,
    updateFields,
    setTypeOfInput,
  }) => {
    const editField = (FIELDS, item, newValue) => {
      return FIELDS.map((field) => {
        if (field.name === item.name) {
          const updatedField = {
            ...field,
            label: newValue,
          };
  
          if (field.name !== updatedField.name) {
            console.log(
              `Field name changed from ${field.name} to ${updatedField.name}`
            );
          }
          if (field.name === updatedField.name) {
            const updatedData = replaceItem(fields, updatedField);
            setFields(updatedData);
          }
          return updatedField;
        } else {
          return field;
        }
      });
    };
  
    const editFieldReq = (FIELDS, item, isChecked) => {
      return FIELDS.map((field) => {
        if (field.name === item.name) {
          const updatedField = {
            ...field,
            required: isChecked,
          };
  
          if (field.name !== updatedField.name) {
            console.log(
              `Field name changed from ${field.name} to ${updatedField.name}`
            );
          }
          if (field.name === updatedField.name) {
            const updatedData = replaceItem(fields, updatedField);
            setFields(updatedData);
          }
          return updatedField;
        } else {
          return field;
        }
      });
    };
    const handleInputChange = (e, item) => {
      e.persist();
      const newValue = e.target.value;
      setlabelName(newValue);
      const data = editField(FIELDS, item, newValue);
    };
  
    const handleCheckboxChange = (e, item) => {
      e.persist();
      const isChecked = e.target.checked;
      const data = editFieldReq(FIELDS, item, isChecked);
    };
  
    return (
      <div className={styles.popup}>
        <PopupHeader
          heading={labelName}
          title={"Form Element"}
          onClick={() => setFormField("")}
          handleSaveClick={handleSaveClick}
        />
        <div className={styles.fields} style={{ alignItems: "flex-start" }}>
          <div>
            <p className={styles.label}>Field Type</p>
            <p className={styles.fieldName}>
              {FIELDS.filter((f) => f.id === field)[0].name}
            </p>
          </div>
          <div>
            <p className={styles.label}>Label Name</p>
            <input
              type="text"
              value={labelName}
              onChange={(e) => {
                handleInputChange(e, FIELDS.filter((f) => f.id === field)[0]);
              }}
            />
          </div>
          <div>
            <p>Required</p>
            <div className={styles.required}>
              <p>Make this field required to enter</p>
              <input
                type="checkbox"
                onChange={(e) => {
                  handleCheckboxChange(
                    e,
                    FIELDS.filter((f) => f.id === field)[0]
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };