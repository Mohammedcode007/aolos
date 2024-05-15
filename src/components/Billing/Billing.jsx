import React from 'react';
import styles from './Billing.module.css';
import { FaPlus } from "react-icons/fa6";
import { IMAGES } from '../../assets/images/Images';

const Billing = () => {
  return (
    <>
    <div className={`${styles.Billing}`}>
      <div>
      <div className={`${styles.TopContent} d-flex justify-content-between align-items-center mb-3`}>
        <p className={styles.paymentText}>Payments Method</p>
        <button className={`${styles.btnAdd} btn`}><FaPlus className={`${styles.plusIcon} me-2`} /> Add New</button>

      </div>
      <div className={`${styles.recordWrapper}`}>
        <div className={`${styles.recordContent} text-center`}>
          <img src={IMAGES.Norecord} alt='ff' />
          <h4 className={`${styles.fileNmae}`}>No Cards No file!</h4>
          <p className={`${styles.fileMsg}`}>When you add a card to your account, It will be <br></br>  listed here</p>
        </div>
      </div>
      </div>
    <div className='mt-3'>
      <div className={`${styles.TopContent} d-flex justify-content-between align-items-center mb-3`}>
        <p className={styles.paymentText}>Payments History</p>
        {/* <button className={`${styles.btnAdd} btn`}><FaPlus className={`${styles.plusIcon} me-2`} /> Add New</button> */}

      </div>
      <div className={`${styles.recordWrapper}`}>
        <div className={`${styles.recordContent} text-center`}>
          <img src={IMAGES.Lock} alt='ff' />
          <h4 className={`${styles.fileNmae}`}>No Payments Yet!</h4>
          <p className={`${styles.fileMsg}`}>When you add a card to your account, It will be <br></br>  listed here</p>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Billing