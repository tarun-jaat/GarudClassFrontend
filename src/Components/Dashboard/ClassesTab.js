import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import { FaLock, FaPlay } from "react-icons/fa";
import { useRef } from "react";


function ClassesTab({ batchData }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterDetails, setChapterDetails] = useState(null); // new state to store chapter details

  console.log("batchData", batchData);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    setChapterDetails(chapter); // set chapter details when chapter is clicked
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      {selectedSubject ? (
        <div>
          {chapterDetails ? ( // conditionally render chapter details
            <ChapterDetails chapter={chapterDetails} batchData={batchData} />
          ) : (
            <div>
              <h1 className="font-bold text-2xl text-blue-100">
                Chapters for {selectedSubject.subjectName}:
              </h1>
              <p className="text-richblack-400 text-lg px-4">
                Please select a chapter to Move forward
              </p>
              <div className="flex items-center justify-start gap-3 mt-2">
                {selectedSubject.Chapter.map((chapter) => {
                  return (
                    <div
                      // to={`/dashboard/chapter-details/${chapter._id}`}
                      key={chapter._id}
                      onClick={() => handleChapterClick(chapter)}
                      className=" border-l-4  decoration-none border-l-blue-300 cursor-pointer hover:shadow-xl ml-4 shadow-md rounded-xl px-4 py-2"
                    >
                      <p className="text-xl font-semibold capitalize">
                        {chapter.chapterName}
                      </p>
                      <p>
                        {chapter.Dpp.length}
                        {" Dpp's "}|| {chapter.notes.length}
                        {" Notes "}|| {chapter.lectureContent.length}
                        {" Topics Covered "}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-2xl text-blue-100">Subject :</h1>
          <h3 className="text-lg capitalize text-richblack-500">
            Please Choose a Subject to Start Learning
          </h3>
          <div className="flex items-center justify-start gap-3 mt-2">
            {batchData.subjects.map((subject) => {
              return (
                <div
                  className="border cursor-pointer hover:shadow-xl ml-4 shadow-md rounded-xl px-4 py-2"
                  key={subject._id}
                  onClick={() => handleSubjectClick(subject)}
                >
                  <p className="text-lg font-medium capitalize">
                    {subject.subjectName}
                  </p>
                  <p className="text-sm text-richblack-300">
                    {"Chapters "}
                    {subject.Chapter.length}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// new component to display chapter details
function ChapterDetails({ chapter, batchData }) {
  const [value, setValue] = React.useState("1");
  const [expanded, setExpanded] = React.useState(false);
  const { user } = useSelector((state) => state.profile);
  const videoRef = useRef(null); // create a reference to the video element


  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isEnrolled = batchData && batchData.studentsEnrolled.includes(user._id);

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Video Lectures" value="1" />
          <Tab label="Notes" value="2" /> const isEnrolled =
          batchData.studentsEnrolled.includes(user._id);
          <Tab label="Dpp's" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <div className="flex flex-col gap-4 mt-4">
          {chapter.lectureContent.map((lecture) => (
            <Accordion
              className=" mt-4"
              expanded={expanded}
              onChange={handleExpansion}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={{
                "& .MuiAccordion-region": {
                  height: expanded ? "auto" : 0,
                },
                "& .MuiAccordionDetails-root": {
                  display: expanded ? "block" : "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography className="text-blue-200 text-2xl font-bold">
                  {lecture.sectionName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="flex gap-3 flex-wrap">

                  {lecture.subSection.map((video) => (
                    <div
                      key={video._id}
                      className="relative w-[200px] flex flex-col items-center border-2 rounded-2xl  border-blue-200"
                    >
                      <video
                         ref={videoRef}
                        className="relative w-full flex items-center justify-center object-cover bg-blue-100 h-44 rounded-t-lg"
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute h-full w-full ">
                        {isEnrolled ? (
                          <div
                            className="bg-richblack-100  bg-opacity-10 flex items-center justify-center h-full w-full"
                            onClick={() => {
                              this.videoRef.requestFullscreen();
                            }}
                          >
                            <FaPlay fontSize={42} className="text-blue-300" />
                          </div>
                        ) : (
                          <div className="bg-richblack-100 cursor-not-allowed rounded-xl bg-opacity-50 flex items-center justify-center h-full w-full">
                            <FaLock
                              fontSize={42}
                              className="text-richblack-700"
                            />
                          </div>
                        )}
                      </div>

                      <div className="bg-blue-200 px-2 w-full rounded-b-2xl">
                        
                        <p className="font-bold text-left  text-xl text-white">
                          {video.title}
                        </p>
                        <p className="text-md text-left  text-richblack-5">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </TabPanel>
      <TabPanel value="2">No data found !</TabPanel>
      <TabPanel value="3">No data found !</TabPanel>
    </TabContext>
  );
}

export default ClassesTab;
