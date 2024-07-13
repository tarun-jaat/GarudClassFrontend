import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFullBatchDetails } from "../../Services/Operations/BatchApi";
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
import {
  FaBullhorn,
  FaIndianRupeeSign,
  FaModx,
  FaRupeeSign,
  FaUsersLine,
  FaVault,
} from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { VscSymbolClass } from "react-icons/vsc";
import { FaCalendarAlt, FaConciergeBell, FaUserFriends } from "react-icons/fa";
import moment from "moment";
import ClassesTab from "./ClassesTab";

function BatchDetailsPage() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  // console.log(user);
  const userId = user._id;
  const location = useLocation();
  const batchId = location.state.batchId;
  const [batchDetail, setBatchArr] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const [text, setText] = useState("Enroll fast to Get Benefits");
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (loop) {
      timeoutId = setTimeout(() => {
        setText("Get Exclusive offers");
        setTimeout(() => {
          setText("Hurry up! Limited time deal");
        }, 5000);
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [loop]);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const formatDate = (date, format) => moment(date).format(format);

  useEffect(() => {
    getFullBatchDetails(batchId, token)
      .then((res) => {
        setBatchArr(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [batchId, token]);
  // console.log("batch Id",batchId)
  // console.log("batchDetails",batchDetail);

  // Use the batchId to fetch data or perform other actions
  return (
    <div className="mt-20 h-screen w-full">
      <div className="rounded-t-2xl mx-6">
        <div className="bg-blue-200 rounded-t-2xl py-6">
          <h1 className="text-white font-bold text-2xl px-4">
            {batchDetail?.batchName}
          </h1>
        </div>
        <div className="">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                className="bg-white"
                sx={{ borderBottom: 1, borderColor: "divider" }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Description" value="1" />
                  <Tab label="All Classes" value="2" />
                  <Tab label="Quizzes" value="3" />
                  <Tab label="Announcements" value="4" />
                </TabList>
              </Box>
              <TabPanel
                className="mt-2 relative flex justify-center items-start gap-3 -ml-6 "
                value="1"
              >
                <div className="w-3/4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-500 text-lg">
                      {batchDetail?.batchDescription}
                    </p>
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
                        <Typography className="text-blue-200">
                          {batchDetail?.batchName} Includes
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul className="list-disc flex items-center justify-between ">
                            <li className="text-blue-100 text-sm flex items-center gap-2">
                              <FaUsersLine />
                              Community
                            </li>
                            <li className="text-pink-100 text-sm flex items-center gap-2">
                              <VscSymbolClass />
                              Lecture Delivered by Experienced Faculty
                            </li>
                            <li className="text-yellow-100 text-sm flex items-center gap-2">
                              <GrNotes />
                              DPP's And Test Designed By Experts
                            </li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <p className="flex mt-4 items-center gap-1">
                      <FaBullhorn className="text-yellow-100" /> Discover All
                      The Benefits Of {batchDetail?.batchName}{" "}
                      <span className="text-blue-500">Know More</span>
                    </p>
                  </div>
                  <div className="bg-white mt-4 p-4 rounded-lg">
                    <h1 className="text-richblack-500 text-2xl font-semibold">
                      Batch Info
                    </h1>
                    <ul className="flex flex-col gap-3 mt-2">
                      <li className="flex items-center gap-2">
                        <FaCalendarAlt
                          fontSize={36}
                          className="p-2  rounded-full text-white bg-yellow-100"
                        />
                        <span className="text-richblack-500">
                          Batch Duration :{" "}
                        </span>{" "}
                        {formatDate(batchDetail?.batchStartDate, "YYYY-MM-DD")}{" "}
                        - {formatDate(batchDetail?.batchEndDate, "YYYY-MM-DD")}
                      </li>
                      <li className="flex items-center gap-2">
                        <FaVault
                          fontSize={36}
                          className="p-2  rounded-full text-white bg-yellow-100"
                        />
                        <span className="text-richblack-500">
                          Validity{" - "}
                        </span>
                        <p>Till Your Onwards Exam</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaModx
                          fontSize={36}
                          className="p-2  rounded-full text-white bg-yellow-100"
                        />
                        <span className="text-richblack-500">Batch Mode</span>
                        {" - "}
                        <p>{batchDetail?.batchMode}</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaUserFriends
                          fontSize={36}
                          className="p-2  rounded-full text-white bg-yellow-100"
                        />
                        <span className="text-richblack-500">Batch Size</span>
                        {" - "}
                        <p>{batchDetail?.batchMaxStudents}</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <p className="text-blue-500 text-lg font-semibold">
                          {" "}
                          Subjects :
                        </p>
                        <ol className=" list-decimal flex gap-2">
                          {batchDetail &&
                            batchDetail.subjects &&
                            batchDetail.subjects.map((subject) => (
                              <li
                                key={subject._id}
                                className="text-richblack-500 flex "
                              >
                                {subject.subjectName}
                                {","}
                              </li>
                            ))}
                        </ol>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white mt-4 p-4 rounded-lg">
                    <h3 className="text-richblack-500 text-2xl font-bold mb-4">
                      Batch Orientation
                    </h3>
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/Rv_AZDen4To"
                      title="Garud Classes Scholarship Test"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    "
                  </div>
                </div>
                <div className="cardA bg-white rounded-xl w-fit  shadow-md shadow-richblack-500 p-2 border-richblack-100 border-2 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-center w-full">
                    <img
                      className="h-44 w-64 border shadow-md shadow-richblack-100 rounded-2xl object-cover bg-blue-100"
                      src={batchDetail?.thumbnail}
                      alt={batchDetail?.batchName}
                    />
                  </div>
                  <p className="text-sm text-richblack-500 capitalize w-full float-left">
                    for {batchDetail?.category?.name} Students{" "}
                  </p>
                  <div className="w-4/5 overflow-hidden textChange bg-pink-50 py-2 text-center text-white shadow-md  rounded-2xl mx-3">
                    <p
                    // className="transition duration-500 ease-in-out"
                    // style={{
                    //   transform: text === 'Hurry up! Limited time deal' ? 'translateY(0)' : 'translateY(-100%)',
                    //   transform: text === 'Get Exclusive offers' ? 'translateY(0)' : 'translateY(-100%)',

                    // }}
                    >
                      {text}
                    </p>
                  </div>

                  <div className="cardA  overflow-visible flex w-full px-3 items-center justify-between ">
                    <div className=" flex w-full px-3 items-center justify-between ">
                      <div className="text-blue-100 text-left w-full flex items-center gap-1 text-xl">
                        <FaIndianRupeeSign /> {batchDetail?.batchFees}{" "}
                        <span className="line-through text-lg text-richblack-300">
                          {batchDetail?.batchFees + 500}
                        </span>
                      </div>

                      {batchDetail.studentsEnrolled &&
                      batchDetail?.studentsEnrolled.includes(userId) ? (
                        <button className="w-24 text-white rounded-2xl bg-blue-100 px-2 py-2 shadow-md  font-bold ">
                          Start Studying
                        </button>
                      ) : (
                        <button className="w-24 text-white rounded-2xl bg-blue-100 px-2 py-2 shadow-md  font-bold ">
                          Buy{" "}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="mt-2" value="2">
                <ClassesTab batchData={batchDetail} />
              </TabPanel>
              <TabPanel className="mt-2" value="3">
                No Quiz Found !
              </TabPanel>
              <TabPanel className="mt-2" value="4">
                No Announcements yet !
              </TabPanel>
              <TabPanel className="mt-2" value="5">
                {/* {batchDetail && batchDetail.FaIndianRupeeSigntruct} */}
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default BatchDetailsPage;
