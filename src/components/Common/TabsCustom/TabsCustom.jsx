import React from 'react';
// import TabContent1 from './TabContent1'; // Import component for Tab 1 content
// import TabContent2 from './TabContent2'; // Import component for Tab 2 content
// import TabContent3 from './TabContent3'; // Import component for Tab 3 content
import Billing from '../../Billing/Billing';
import styles from './TabsCustom.module.css';

const TabsCustom = ({ activeTab, handleTabChange }) => {
  return (
    <div className={styles.tabsContainer}>
      {/* Tab buttons */}
      <div className={styles.tabButtons}>
        <button
          className={`${styles.tabButton} ${activeTab === 'tab1' && styles.activeTab}`}
          onClick={() => handleTabChange('tab1')}
        >
          Business
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'tab2' && styles.activeTab}`}
          onClick={() => handleTabChange('tab2')}
        >
          Billing
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'tab3' && styles.activeTab}`}
          onClick={() => handleTabChange('tab3')}
        >
          Setting
        </button>
      </div>

      {/* Tab content */}
      <div className={styles.tabContent}>
        {activeTab === 'tab1' && <Billing />}
        {activeTab === 'tab2' && <Billing />}
        {activeTab === 'tab3' && <Billing />}
        {/* {activeTab === 'tab2' && <TabContent2 />} */}
        {/* {activeTab === 'tab3' && <TabContent3 />} */}
      </div>
    </div>
  );
};

export default TabsCustom;
