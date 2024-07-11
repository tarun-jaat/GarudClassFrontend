import React, { useState, useEffect, useRef } from "react";
import useOnClickOutside from "../../../../Hooks/OnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../Common/ButtonCommon";
import { IoAddCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import {
  updateSection,
  // createSection,
} from "../../../../Services/Operations/CourseApi";

import {
  getAllSubjects,
  createBatchSubject,
  createBatchSubjectChapter,
  createSection,
  getLectureContent,
} from "../../../../Services/Operations/BatchApi";
import SubSectionModal from "./Subsection";
import { setBatch, setLectureContent } from "../../../../Slices/BatchSilce";
import NestedView from "./NestedView";
import { FaPlus } from "react-icons/fa";

function Addlecture() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [showForm, setShowForm] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [otherSubject, setOtherSubject] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [otherSubjectValue, setOtherSubjectValue] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [chapterDescription, setChapterDescription] = useState("");
  const [otherChapter, setOtherChapter] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const [loading, setLoading] = useState(false);
  const [editSectionName, setEditSectionName] = useState("");
  const [sectionId, setSectionId] = useState({});
  const [selectedSection, setSelectedSection] = useState("");
  const [otherSection, setOtherSection] = useState(false);
  const [addSubSection, setAddSubsection] = useState(null);
  const [subsection, setSubsection] = useState(null);
  const { Batch, lectureContent } = useSelector((state) => state.batch);
  const { token } = useSelector((state) => state.auth);
  const batchId = Batch._id;
  const dispatch = useDispatch();
  const formRef = useRef(null);
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

  const handleAddLectureClick = () => {
    setShowForm(true);
  };

  const handleSubjectSubmit = (e) => {
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
          dispatch(setBatch(response));
          console.log("response", response);
          dispatch(setBatch({ ...Batch, subjects: [response] }));

          console.log("SubjectBathc", Batch);
          setSubjectName("");

          setOtherSubject(false);
        });
        console.log("subject", response);
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

      setSelectedChapter("");
      setChapter(selectedSubject?.Chapter || []);
      setSelectedSubjectId(selectedSubject?._id || "");
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

      setSelectedChapter(selectedChapter?.chapterName);
      setSelectedChapterId(selectedChapter?._id);
      setOtherChapter(false);

      // const chapterId= selectedChapterId
      // getLectureContent(chapterId, token).then((result) => {
      //   dispatch(setLectureContent(result));
      // });
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
        setChapterDescription("");
        setOtherChapter(false);
        setChapterName("");
        getAllSubjects(token, batchId).then((response) => {
          setSubjects(response);
          dispatch(
            setBatch({
              ...Batch,
              subjects: [...Batch.subjects, { Chapter: [response] }],
            })
          );
          console.log("chapterBatch", Batch);
          setSubjectName("");
          setSelectedSubject("");
          setOtherSubject(false);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmit = async (data) => {
    setLoading(true);

    let result;

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          chapterId: selectedChapterId,
        },
        token
      );
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          chapterId: selectedChapterId,
        },
        token
      );
    }
    if (result) {
      dispatch(
        setBatch({
          ...Batch,
          subjects: [...Batch.subjects, { Chapter: [result] }],
        })
      );
      setEditSectionName("");
      setValue("sectionName", "");

      getAllSubjects(token, batchId).then((response) => {
        setSubjects(response);
      });
    }

    console.log(sectionId);

    setLoading(false);
  };

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  const handleSectionSelectChange = (e) => {
    const value = e.target.value;
    if (value === "other") {
      setOtherSection(true);
    } else {
      setSelectedSection(value);
      setOtherSection(false);
      const selectedSection = subjects
        .find((subject) => subject.subjectName === selectedSubject)
        .Chapter.find((chapter) => chapter._id === selectedChapterId)
        .lectureContent.find((section) => section.sectionName === value);
      setSectionId(selectedSection._id);
      setSubsection(selectedSection.subSection); // set the subsection state variable

      console.log("sectionId", sectionId);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Lectures</h1>
        <button
          type="button"
          className="btn btn-secondary"
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
          <form onSubmit={handleSubjectSubmit}>
            <div className="flex items-center gap-4 py-3">
              <label>Subject</label>
              <select
                className="py-2 px-3 rounded-lg"
                value={selectedSubject}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  Choose a Subject
                </option>
                {subjects.map((subject) => (
                  <option key={subject._id} value={subject.subjectName}>
                    {subject.subjectName}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
              {otherSubject && (
                <>
                  <input
                    type="text"
                    value={otherSubjectValue}
                    onChange={(e) => setOtherSubjectValue(e.target.value)}
                    placeholder="Enter Subject Name"
                  />
                  <button type="submit">Create Subject</button>
                </>
              )}
            </div>
          </form>
          {selectedSubject && (
            <div className="flex items-center gap-4 pb-3">
              <label>Chapter</label>
              <select
                className="py-2 px-3 rounded-lg"
                value={selectedChapter}
                onChange={handleChapterSelectChange}
              >
                <option value="" disabled>
                  Choose a Chapter
                </option>
                {chapter.map((chapter) => (
                  <option key={chapter._id} value={chapter.chapterName}>
                    {chapter.chapterName}
                  </option>
                ))}
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

          {otherSection && (
            <div className="w-full flex justify-center px-4 ">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm text-richblack-700"
                    htmlFor="sectionName"
                  >
                    Section Name <sup className="text-pink-200">*</sup>
                  </label>
                  <input
                    id="sectionName"
                    disabled={loading}
                    placeholder="Add a section to build your course"
                    {...register("sectionName", { required: true })}
                    className="form-style w-full"
                  />
                  {errors.sectionName && (
                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                      Section name is required
                    </span>
                  )}
                </div>
                <div className="flex items-end gap-x-4">
                  <IconBtn
                    type="submit"
                    disabled={loading}
                    text={
                      editSectionName ? "Edit Section Name" : "Create Section"
                    }
                    outline={true}
                  >
                    <IoAddCircleOutline size={20} className="text-[#4880FF]" />
                  </IconBtn>
                  {editSectionName && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="text-sm text-richblack-300 underline"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
          {selectedChapter && (
            <div className="flex items-center gap-4 pb-3">
              <label>Topic</label>
              <select
                className="py-2 px-3 text-black  h-fit rounded-lg"
                value={selectedSection}
                onChange={handleSectionSelectChange}
              >
                <option value="" disabled>
                  Choose a Section
                </option>
                {subjects
                  .find((subject) => subject.subjectName === selectedSubject)
                  .Chapter.find((chapter) => chapter._id === selectedChapterId)
                  .lectureContent.map((section) => (
                    <option
                      className="text-black"
                      key={section._id}
                      value={section.sectionName}
                    >
                      {section.sectionName}
                    </option>
                  ))}
                <option value="other">Other</option>
              </select>
              {selectedSection && (
                <button
                  onClick={() => setAddSubsection(sectionId)}
                  className="mt-3 flex items-center gap-x-1 bg-white rounded-lg p-2"
                >
                  <FaPlus className="text-lg" />
                  <p>Add Lecture</p>
                </button>
              )}
            </div>
          )}
         {selectedChapter && selectedSection && (
  <div className="px-4 py-2 bg-white flex-col flex items-start w-full min-h-56 border rounded-lg  gap-4 pb-3">
    <p className="text-xl text-richblack-400">Video Lectures</p>
    {subsection && subsection.length > 0 ? (
      subsection.map((video) => (
        <div key={video._id} className="relative flex items-center justify-center gap-4">
          <video className="relative w-56 object-cover bg-blue-100 h-56 rounded-lg">
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-2 ">
            <p className="font-bold text-center text-2xl  text-white">
              {video.title} 
            </p>
            <p className="text-sm text-center text-white">
              {video.description}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-lg text-center text-richblack-400">No data found</p>
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
      ) : (
        ""
      )}
    </div>
  );
}
export default Addlecture;
