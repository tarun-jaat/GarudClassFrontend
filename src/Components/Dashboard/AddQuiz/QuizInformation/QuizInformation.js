import React from "react";
import { useEffect, useState } from "react";
import IconBtn from "../../../Common/ButtonCommon";
import instructionsField from "../../AddCourse/CourseInformation/RequirenmentsField";

import ChipInput from "../../AddCourse/CourseInformation/ChipInput";
import { useForm } from "react-hook-form";
import { setQuiz, setStep } from "../../../../Slices/QuizSlice";
import { toast } from "react-hot-toast";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../../AddCourse/Upload";
import { fetchCourseCategories } from "../../../../Services/Operations/CourseApi";
import { addQuizDetails } from "../../../../Services/Operations/QuizApi";
import RequirementsField from "../../AddCourse/CourseInformation/RequirenmentsField";
export default function QuizInformation() {
  const [QeditQuizCategories, setQeditQuizCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { quiz, editQuiz } = useSelector((state) => state.quiz);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setQeditQuizCategories(categories);
      }
      setLoading(false);
    };
    if (editQuiz) {
      setValue("testName", quiz.testName);
      setValue("testDescription", quiz.testDescription);
      setValue("duration", quiz.duration);
      setValue("price", quiz.price);
      setValue("category", quiz.category);
      setValue("instructions", quiz.instructions);
      setValue("noOfQuestion", quiz.noOfQuestions);
      setValue("totalMarks", quiz.totalMarks);
      setValue("tag", quiz.tag);
      setValue("thumbnailImage", quiz.thumbnailImage);
    }
    getCategories();
  }, []);

  //   const isQuizUpdate=()=>{
  //     const currentValues=getValues()
  //     if(
  //       currentValues.testName!==quiz.testName||
  //       currentValues.testDescription!==quiz.testDescription||
  //       currentValues.duration!==quiz.duration ||
  //       currentValues.price!==quiz.price ||
  //       currentValues.category!==quiz.category ||
  //       quiz.instructions.toString() ||
  //       currentValues.noOfQuestion!==quiz.noOfQuestions ||
  //       currentValues.totalMarks!==quiz.totalMarks ||
  //       currentValues.tag.toString()!==quiz.tag.toString() ||
  //       currentValues.thumbnailImage!==quiz.thumbnailImage
  //       ){

  //     return true
  //   }
  //   return false
  // }

  const onSubmit = async (data) => {
    // if(editQuiz){
    //   if(isQuizUpdate()){
    //     const currentValues=getValues()
    //     const formData=new FormData()
    //     formData.append("testName",currentValues.testName)
    //     formData.append("testDescription",currentValues.testDescription)
    //     formData.append("duration",currentValues.duration)
    //     formData.append("price",currentValues.price)
    //     formData.append("category",currentValues.category)
    //     formData.append("instructions",currentValues.instructions)
    //     formData.append("noOfQuestions",currentValues.noOfQuestion)
    //     formData.append("totalMarks",currentValues.totalMarks)
    //     formData.append("tag",currentValues.tag.toString())
    //     formData.append("thumbnailImage",currentValues.thumbnailImage)
    //   }
    //     setLoading(true)
    //     const result = await editQuizDetails(formData, token)
    //     setLoading(false)
    //     if (result) {
    //       dispatch(setStep(2))
    //       dispatch(seteditQuiz(result))
    //     }
    //   } else {
    //     toast.error("No changes made to the form")
    //   }
    //   return
    // }

    const formData = new FormData();
    formData.append("testName", data.testName);
    formData.append("testDescription", data.testDescription);
    formData.append("duration", data.duration);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("instructions", JSON.stringify(data.instructions));
    formData.append("noOfQuestion", data.noOfQuestion);
    formData.append("totalMarks", data.totalMarks);
    formData.append("tag", JSON.stringify(data.tag));
    formData.append("thumbnailImage", data.thumbnailImage);
    setLoading(true);
    const result = await addQuizDetails(formData, token);
    if (result) {
      dispatch(setStep(2));
      dispatch(setQuiz(result));
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-4 rounded-md border-2 border-[#bababa] bg-white p-6"
    >
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-richblack-400 uppercase tracking-wider"
          htmlFor="quizName"
        >
          Quiz Name <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="testName"
          placeholder="Enter quiz Title"
          {...register("testName", { required: true })}
          className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
        />
        {errors.testName && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Quiz Name is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-richblack-400 uppercase tracking-wider"
          htmlFor="quizDescription"
        >
          Quiz Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="testDescription"
          placeholder="Enter Description"
          {...register("testDescription", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
        />
        {errors.quizDescription && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Quiz Description is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-richblack-400 uppercase tracking-wider"
          htmlFor="QeditQuizCategory"
        >
          Quiz Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("category", { required: true })}
          defaultValue=""
          id="category"
          className="form-style w-full uppercase tracking-wider"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            QeditQuizCategories?.map((category, indx) => (
              <option
                className=" p-3 hover:bg-[#4880FF]"
                key={indx}
                value={category?._id}
              >
                {category?.name}
              </option>
            ))}
        </select>
        {errors.QeditQuizCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            QeditQuiz Category is required
          </span>
        )}
      </div>
      <Upload
        name="thumbnailImage"
        label="Quiz Thumbnail"
        setValue={setValue}
        register={register}
        errors={errors}
        // editData={editQuiz ? quiz?.thumbnailImage : null}
      />
      <div className="flex justify-between gap-3">
        <div className="flex w-1/2 flex-col space-y-2">
          <label
            className="text-sm text-richblack-400 uppercase tracking-wider"
            htmlFor="price"
          >
            Quiz Price <sup className="text-pink-200">*</sup>
          </label>
          <div className="relative">
            <input
              id="price"
              placeholder="Enter QeditQuiz Price"
              {...register("price", {
                required: true,
                valueAsNumber: true,
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                },
              })}
              className="form-style w-full !pl-12 placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
            />
            <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
          </div>
          {errors.price && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Price is required
            </span>
          )}
        </div>
        <div className="flex flex-col w-1/2 space-y-2">
          <label
            className="text-sm text-richblack-400 uppercase tracking-wider"
            htmlFor="duration"
          >
            Total Marks <sup className="text-pink-200">*</sup>
          </label>
          <div className="relative">
            <input
              id="totalMarks"
              type="text"
              placeholder="Please enter total marks"
              {...register("totalMarks", {
                required: true,
                valueAsNumber: true,
              })}
              className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
            />
          </div>
          {errors.noOfQuestions && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Please fill the total marks
            </span>
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="flex gap-3 justify-between ">
          <div className="flex flex-col w-1/2 space-y-2">
            <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="noOfQuestions"
            >
              Number of Question <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="noOfQuestion"
                placeholder="Enter no of question"
                {...register("noOfQuestion", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="form-style w-full  placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
              />
            </div>
            {errors.noOfQuestions && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Number of Question is required
              </span>
            )}
          </div>
          <div className="flex flex-col w-1/2 space-y-2">
            <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="duration"
            >
              Test Duration <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="duration"
                type="text"
                placeholder="Please enter time in minutes"
                {...register("duration", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
              />
            </div>
            {errors.noOfQuestions && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Please fill the time
              </span>
            )}
          </div>
        </div>

        <ChipInput
          label="Tags"
          name="tag"
          placeholder="Enter Tags and press Enter"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />

        <RequirementsField
          name="instructions"
          label="Instructions"
          register={register}
          setValue={setValue}
          errors={errors}
          getValues={getValues}
        />
        <div className="flex justify-end gap-x-2">
          {editQuiz && (
            <button
              onClick={() => dispatch(setStep(2))}
              disabled={loading}
              className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
            >
              Continue Wihout Saving
            </button>
          )}
          <IconBtn
            disabled={loading}
            text={!editQuiz ? "Next" : "Save Changes"}
          >
            <MdNavigateNext />
          </IconBtn> 
        </div>
      </div>
    </form>
  );
}
