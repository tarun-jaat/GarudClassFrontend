import React, { useState } from 'react'
import Addlecture from './Addlecture';
import { setStep } from '../../../../Slices/BatchSilce';
import { useDispatch } from 'react-redux';
function BatchBuilder() {
  const [activeTab, setActiveTab] = useState('ex1-tabs-1');
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()


  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
  const goToNext = () => {
    dispatch(setStep(3))

  }
  const goBack = () => {
    dispatch(setStep(1))
  }
  return (
    <div className="h-11/12">
<div
    className="space-y-4 mx-4 rounded-md border-2 min-h-max border-[#bababa] bg-white p-6"
>
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'ex1-tabs-1' ? 'active' : ''}`}
            id="ex1-tab-1"
            role="tab"
            // aria-controls="ex1-tabs-1"
            aria-selected={activeTab === 'ex1-tabs-1'}
            onClick={() => handleTabClick('ex1-tabs-1')}
          >
            Lectures
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'ex1-tabs-2' ? 'active' : ''}`}
            id="ex1-tab-2"
            role="tab"
            // aria-controls="ex1-tabs-2"
            aria-selected={activeTab === 'ex1-tabs-2'}
            onClick={() => handleTabClick('ex1-tabs-2')}
          >
            Quizzes
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'ex1-tabs-3' ? 'active' : ''}`}
            id="ex1-tab-3"
            role="tab"
            // aria-controls="ex1-tabs-3"
            aria-selected={activeTab === 'ex1-tabs-3'}
            onClick={() => handleTabClick('ex1-tabs-3')}
          >
            DPP's
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'ex1-tabs-4' ? 'active' : ''}`}
            id="ex1-tab-4"
            role="tab"
            // aria-controls="ex1-tabs-4"
            aria-selected={activeTab === 'ex1-tabs-4'}
            onClick={() => handleTabClick('ex1-tabs-4')}
          >
            Notes
          </a>
        </li>
      </ul>

      {/* Tabs Content */}
      <div className="tab-content" id="ex1-content">
        <div
          className={`tab-pane fade ${activeTab === 'ex1-tabs-1' ? 'show active' : ''}`}
          id="ex1-tabs-1"
          role="tabpanel"
          // aria-labelledby="ex1-tab-1"
        >
          <Addlecture/>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'ex1-tabs-2' ? 'show active' : ''}`}
          id="ex1-tabs-2"
          role="tabpanel"
          // aria-labelledby="ex1-tab-2"
        >
          Tab 2 content
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'ex1-tabs-3' ? 'show active' : ''}`}
          id="ex1-tabs-3"
          role="tabpanel"
          aria-labelledby="ex1-tab-3"
        >
          Tab 3 content
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'ex1-tabs-4' ? 'show active' : ''}`}
          id="ex1-tabs-4"
          role="tabpanel"
          aria-labelledby="ex1-tab-4"
        >
          Tab 4 content
        </div>
      </div>
    </div>
    
      <div className="flex justify-end py-6 gap-x-3">
        <button
          onClick={goBack}
          className={`flex border-2 border-[#4880FF] hover:sc cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-[#4880FF]`}
        >
          Back
        </button>
        <button
            onClick={goToNext}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#4880ff] py-[8px] px-[20px] hover:scale-95 font-semibold text-richblack-5`}
          >
            Continue
          </button>
      
      </div>
    </div>
  )
}

export default BatchBuilder