import React, { useEffect, useState } from 'react';
import Batches from '../../Pages/Main/Batches';
import CardBatches from '../Core/LandingPage/Batches/CardBatches';
import { MdOutlineBallot } from "react-icons/md";
import { MdOutlineUpcoming } from "react-icons/md";
import { IoMdBookmarks } from "react-icons/io";
import { getAllBatches } from '../../Services/Operations/BatchApi';


function BatchesTab() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('home0'); // Default active tab is 'home0'
  const [batches, setBatches] =useState([]);
  useEffect(() => {
    getAllBatches().then((result) => {
      setBatches(result);
    });
    console.log(batches)
  }, []);
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
            className={`nav-link flex items-center gap-2 ${activeTab === 'home0' ? 'active' : ''}`}
            id="home-tab0"
            data-mdb-target="#home0"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected={activeTab === 'home0' ? 'true' : 'false'}
            onClick={() => handleTabClick('home0')}
          >
            All <MdOutlineBallot fontSize={18}/> 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  flex items-center gap-2  ${activeTab === 'Upcoming' ? 'active' : ''}`}
            id="upcoming-tab0"
            data-mdb-target="#Upcoming"
            type="button"
            role="tab"
            aria-controls="upcoming"
            aria-selected={activeTab === 'Upcoming' ? 'true' : 'false'}
            onClick={() => handleTabClick('Upcoming')}
          >
            Upcoming <MdOutlineUpcoming fontSize={18}/>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  flex items-center gap-2 ${activeTab === 'contact0' ? 'active' : ''}`}
            id="contact-tab0"
            data-mdb-target="#contact0"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected={activeTab === 'contact0' ? 'true' : 'false'}
            onClick={() => handleTabClick('contact0')}
          >
            Free <IoMdBookmarks fontSize={18}/>
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
            {batches.map((batches) => {
            return <CardBatches key={batches._id} batches={batches} />
          })}
            </div>
           
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'Upcoming' ? 'show active' : ''}`}
          id="Upcoming"
          role="tabpanel"
          aria-labelledby="upcoming-tab0"
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
