export default function Tab({ tabData, field, setField }) {
    return (
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="flex justify-between  bg-[#49e1ff35] border-2 border-richblack-300 p-1 gap-x-1 my-3 md:my-6 rounded-full md:max-w-max w-[80%]"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "border-2 border-richblack-300 bg-white text-blue-200 font-bold"
                : "bg-transparent text-richblack-200"
            } md:py-2 md:px-5 py-1 px-2 rounded-full  `}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }