import React from 'react';
import styles from './Setting.module.css';
import { IMAGES } from '../../assets/images/Images';
import { FaPlus } from "react-icons/fa";

const Setting = () => {
    return (
        <div className={`${styles.settingWrapper}`}>
            <div className='container'>
                <div className={`${styles.maainContent}`}>
                    <h4 className={`${styles.subHeading}`}>Setting</h4>
                    <div className={`${styles.settingDetails}`}>

                        <p className={`${styles.topText}`}>Profile Setting</p>
                    </div>
                    <div className={`${styles.settingServer} d-flex align-items-center pt-3 pb-3`}>
                        <div className={`${styles.imgBox} me-3`}>
                            <img className={`${styles.Icon}`} src={IMAGES.emial} alt='emial' />
                        </div>
                        <div className={`${styles.contentBox}`}>
                            <p className={styles.mainText}>Email Server</p>
                            <p className={styles.subText}>Connect This Business to Your Emial Server (SMTP).</p>
                        </div>

                    </div>
                    <div className={`${styles.settingServer} d-flex align-items-center pt-3 pb-3`}>
                        <div className={`${styles.imgBox} me-3`}>
                            <img className={`${styles.Icon}`} src={IMAGES.label} alt='label'/>
                        </div>
                        <div className={`${styles.contentBox}`}>
                            <p className={styles.mainText}>White-label</p>
                            <p className={styles.subText}>Remove Woobox branding from your compaings by using a White-Label.</p>
                        </div>

                    </div>

                    <button className={`${styles.CustomButton} btn btn-primary mt-5`} onClick="">
                        <FaPlus className='me-1' /> New Business
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Setting