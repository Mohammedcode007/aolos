import React, { useState } from 'react';
import TabsCustom from '../Common/TabsCustom/TabsCustom';
import styles from './BillingTab.module.css'


export const BillingTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <div className={`${styles.BillingWrapper}`}>
      <div className='container'>
        <div className={`${styles.topBar}`}>
          <p className={`${styles.subText}`}>Account</p>
          <h4 className={`${styles.subHeading}`}>Test</h4>
          <TabsCustom activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
       
      </div>

    </div>
  )
}
export default BillingTab