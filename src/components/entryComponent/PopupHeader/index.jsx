import styles from '../../../global.module.css'


export const PopupHeader = ({ title, onClick, handleSaveClick, heading }) => {
    return (
      <div className={styles.sectionBar}>
        <div className={styles.header}>
          <h5>{title}</h5>
          <div>
            <button
              onClick={handleSaveClick}
              className={styles.save}
              disabled={heading ? false : true}
              style={{ backgroundColor: !heading ? "grey" : "#5e17eb" }}
            >
              Save
            </button>
            <button onClick={onClick}>X</button>
          </div>
        </div>
      </div>
    );
  };