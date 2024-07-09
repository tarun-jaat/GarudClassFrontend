import React, { useState } from 'react';
import Batches from '../../Pages/Main/Batches';
import CardBatches from '../Core/LandingPage/Batches/CardBatches';

function BatchesTab() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('home0'); // Default active tab is 'home0'

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='w-full h-auto mx-auto mt-4'>
        <h1 className='text-2xl font-bold underline underline-offset-4 mb-4'>Explore Batches</h1>
      <ul className="nav nav-tabs  w-full flex justify-start  mb-3" id="myTab0" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'home0' ? 'active' : ''}`}
            id="home-tab0"
            data-mdb-target="#home0"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected={activeTab === 'home0' ? 'true' : 'false'}
            onClick={() => handleTabClick('home0')}
          >
            All
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'profile0' ? 'active' : ''}`}
            id="profile-tab0"
            data-mdb-target="#profile0"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected={activeTab === 'profile0' ? 'true' : 'false'}
            onClick={() => handleTabClick('profile0')}
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'contact0' ? 'active' : ''}`}
            id="contact-tab0"
            data-mdb-target="#contact0"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected={activeTab === 'contact0' ? 'true' : 'false'}
            onClick={() => handleTabClick('contact0')}
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content flex min-h-[500px] items-center justify-center w-full mt-4" id="myTabContent0">
        <div
          className={`tab-pane fade ${activeTab === 'home0' ? 'show active' : ''}`}
          id="home0"
          role="tabpanel"
          aria-labelledby="home-tab0"
        >
            <div className="flex items-center flex-wrap justify-start gap-5">
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            </div>
           
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'profile0' ? 'show active' : ''}`}
          id="profile0"
          role="tabpanel"
          aria-labelledby="profile-tab0"
        >
          Tab 2 content.
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'contact0' ? 'show active' : ''}`}
          id="contact0"
          role="tabpanel"
          aria-labelledby="contact-tab0"
        >
          Tab 3 content.
        </div>
      </div>
    </div>
  );
}

export default BatchesTab;
