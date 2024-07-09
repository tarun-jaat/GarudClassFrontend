import React, { useState, useEffect } from "react";
import useOnClickOutside from "../../../../Hooks/OnClickOutside";
import { useSelector } from "react-redux";
import {
  getAllSubjects,
  createBatchSubject,
  createBatchSubjectChapter,
  createChapterTopic,
} from "../../../../Services/Operations/BatchApi";
import SubSectionModal from "./Subsection";

function Addlecture() {
  const [showForm, setShowForm] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState(""); // new state for subject name input
  const [selectedSubject, setSelectedSubject] = useState("");
  const [otherSubject, setOtherSubject] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [otherSubjectValue, setOtherSubjectValue] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [chapterName, setChapterName] = useState(""); // new state for chapter name input
  const [chapter, setChapter] = useState([]);
  const [chapterDescription, setChapterDescription] = useState(""); // new state for chapter description input
  const [otherChapter, setOtherChapter] = useState(false); // new state for other subject input value
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const [topic, setTopic] = useState([]);
  const [topicName, setTopicName] = useState(""); // new state for topic name input
  const [topicDescription, setTopicDescription] = useState(""); // new state for topic description input
  const [otherTopic, setOtherTopic] = useState(false); // new state for other topic input value
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedTopicData, setSelectedTopicData] = useState({});
  const [addSubSection, setAddSubsection] = useState(null)

  const { Batch } = useSelector((state) => state.batch);
  const { token } = useSelector((state) => state.auth);

  const batchId = Batch._id;

  const handleAddLectureClick = () => {
    setShowForm(true);
  };

  const formRef = React.createRef();
  useOnClickOutside(formRef, () => {
    setShowForm(false);
  });

  useEffect(() => {
    getAllSubjects(token, batchId)
      .then((response) => {
        setSubjects(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [batchId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      batchId,
      subjectName: otherSubject ? otherSubjectValue : selectedSubject,
    };
    createBatchSubject(token, data)
      .then((response) => {
        console.log(response);
        getAllSubjects(token, batchId).then((response) => {
          setSubjects(response);
          setSubjectName("");
          setOtherSubject(false);
        });
        setSubjectName("").catch((error) => {
          console.error(error);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const selectedSubject = subjects.find(
      (subject) => subject.subjectName === value
    );

    if (value === "other") {
      setOtherSubject(true);
    } else {
      setOtherSubject(false);
      setSelectedSubject(value);
      setSelectedTopic("")
      setSelectedChapter("")
      // console.log("MainChange", selectedSubject.Chapter);
      setChapter(selectedSubject.Chapter); // Update the chapter state
      setSelectedSubjectId(selectedSubject._id); // Set the selected subject ID
    }
  };

  const handleChapterSelectChange = (e) => {
    const value = e.target.value;
    if (value === "other") {
      setOtherChapter(true);
    } else {
      setOtherChapter(false);
      const selectedChapter = chapter.find(
        (chapter) => chapter.chapterName === value
      );
      setSelectedChapter(selectedChapter);
      setSelectedChapterId(selectedChapter._id);
      setTopic(selectedChapter.topics);
    }
  };
  const handleChapterSubmit = (e) => {
    e.preventDefault();
    const data = {
      subjectId: selectedSubjectId,
      chapterName,
      chapterDescription,
    };
    createBatchSubjectChapter(token, data)
      .then((response) => {
        console.log(response);
        setTopic(response);
        setChapterName(""); // Clear the chapter name input field
        setChapterDescription(""); // Clear the chapter description input field
        setOtherChapter(false);
        getAllSubjects(token, batchId)
          .then((response) => {
            setSubjects(response);
            setSubjectName("");
            setOtherSubject(false);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTopicSelectChange = (e) => {
    const value = e.target.value;
    if (value === "other") {
      setOtherTopic(true);
    } else {
      setOtherTopic(false);
      const selectedTopic = topic.find((topic) => topic._id === value);
      setSelectedTopic(value);
      setSelectedTopicData(selectedTopic);
      console.log("data", selectedTopicData);
    }
  };

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    const data = {
      chapterId: selectedChapterId,
      topicName,
      topicDescription,
    };
    createChapterTopic(token, data)
      .then((response) => {
        console.log(response);
        setTopicName(""); // Clear the chapter name input field
        setTopicDescription(""); // Clear the chapter description input field
        setOtherTopic(false);
        getAllSubjects(token, batchId)
          .then((response) => {
            setSubjects(response);
            setSubjectName("");
            setOtherSubject(false);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Lectures</h1>
        <button
          type="button"
          class="btn btn-secondary"
          data-mdb-ripple-init
          onClick={handleAddLectureClick}
        >
          Add Lecture
        </button>
      </div>
      {showForm && (
        <div
          className="w-full py-3 border rounded-2xl bg-[#eeeeee] backdrop-blur-3xl flex flex-col items-center justify-center"
          ref={formRef}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex  items-center gap-4 py-3">
              <label>Subject</label>
              <select
                className="py-2 px-3 rounded-lg"
                value={selectedSubject}
                onChange={handleSelectChange}
              >
                {subjects.map((subject) => (
                  <option key={subject._id} value={subject.subjectName}>
                    {subject.subjectName}
                  </option>
                ))}
                <option value="" disabled>
                  Choose a Subject
                </option>
                <option value="other">Other</option>
              </select>
              {otherSubject && (
                <>
                  <input
                    type="text"
                    value={otherSubjectValue}
                    onChange={(e) => setOtherSubjectValue(e.target.value)}
                  />
                  <button type="submit">Create Subject</button>
                </>
              )}
            </div>
          </form>
          {selectedSubject && (
            <div className="flex  items-center gap-4 pb-3">
              <label>Chapter</label>

              <select
                className="py-2 px-3 rounded-lg"
                value={selectedChapter}
                onChange={(e) => handleChapterSelectChange(e)}
              >
                {chapter.map((chapter) => (
                  <option key={chapter._id} value={chapter.chapterName}>
                    {chapter.chapterName}
                  </option>
                ))}
                <option value="" disabled>
                  Choose a Chapter
                </option>
                <option value="other">Other</option>
              </select>
              {otherChapter && (
                <>
                  <input
                    type="text"
                    value={chapterName}
                    onChange={(e) => setChapterName(e.target.value)}
                    placeholder="Chapter Name"
                  />
                  <input
                    type="text"
                    value={chapterDescription}
                    onChange={(e) => setChapterDescription(e.target.value)}
                    placeholder="Chapter Description"
                  />
                  <button type="submit" onClick={handleChapterSubmit}>
                    Create Chapter
                  </button>
                </>
              )}
            </div>
          )}
          {selectedChapter && (
            <div className="flex flex-col items-start gap-4 pb-3">
              <label>Topic</label>

              <select
                value={selectedTopic}
                className="py-2 px-3 rounded-lg"
                onChange={(e) => handleTopicSelectChange(e)}
              >
                {topic &&
                  topic?.map((topic) => (
                    <option key={topic._id} value={topic._id}>
                      {topic.topicName}
                    </option>
                  ))}
                <option value="" disabled>
                  Choose a Topic
                </option>
                <option value="other">Other</option>
              </select>
              {selectedTopic && (
                <>
                <button
                class="btn btn-primary"
                data-mdb-ripple-init
                onClick={()=>setAddSubsection(selectedTopicData._id)}>
                  Add Lecture Video
                </button>
                </>
              )}
              {otherTopic && (
                <>
                  <input
                    type="text"
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                    placeholder="Topic Name"
                  />
                  <input
                    type="text"
                    value={topicDescription}
                    onChange={(e) => setTopicDescription(e.target.value)}
                    placeholder="Topic Description"
                  />
                  <button type="submit" onClick={handleTopicSubmit}>
                    Create Topic
                  </button>
                </>
              )}
              {/* {selectedTopic && (
                <>
                  {Object.keys(selectedTopicData).map((key) => (
                    <div key={key} className="border w-full">
                      <label>name :{key.topicName}</label>
                      <p> description:{key.topicDescription}</p>


                    </div>
                  ))}
                </>
              )} */}
              {selectedTopic && (
                <div>
                  <p>ID :{selectedTopicData._id}</p>
                  <label>name :{selectedTopicData.topicName}</label>
                  <p> description:{selectedTopicData.topicDescription}</p>

                </div>
              )}
              {selectedTopic && (
                <div>
                  {selectedTopicData.lecturesVideos.length === 0 ? (
                    <p>No lecture videos added yet.</p>
                  ) : (
                    // render the lecture videos list
                    <ul>
                      {selectedTopicData.lecturesVideos.map((video) => (
                        <li key={video._id}>{video.title}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
          
        </div>
      )}
      {addSubSection ? (
            <SubSectionModal
            modalData={addSubSection}
            setModalData={setAddSubsection}
            add={true}
            />
          ):(
            <></>
          )}
    </div>
  );
}
export default Addlecture;
