import React,{useState} from 'react'
import Tab from '../../Common/Tab'
const tabData = [
    {
      id: 1,
      tabName: "Announcement",
      type: "Announcement",
    },
    {
      id: 2,
      tabName: "News",
      type: "News",
    },
    {
        id: 2,
        tabName: "Events",
        type: "Events",
      },
  ];
  

function Anouncement() {
    const [accountType, setAccountType] = useState("Announcement");
    let content;
    switch (accountType) {
      case "Announcement":
        content = <div>This is the Announcement tab</div>;
        break;
      case "News":
        content = <div>This is the News tab</div>;
        break;
      case "Events":
        content = <div>This is the Events tab</div>;
        break;
      default:
        content = <div>Unknown tab</div>;
    }
  return (
    <div className='md:h-[300px] h-[250px] flex flex-col  items-center w-full md:w-[30%] shadow-xl shadow-richblack-500 rounded-2xl border-2 border-[#727272]'>
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
        {content}
    </div>
  )
}

export default Anouncement