import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import IconBtn from "../../../Common/ButtonCommon";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import RequirementsField from "../../AddCourse/CourseInformation/RequirenmentsField";
import Upload from "../../AddCourse/Upload";
import { setStep, setBatch } from "../../../../Slices/BatchSilce";
import { fetchCourseCategories } from "../../../../Services/Operations/CourseApi";
import { addBatchDetails } from "../../../../Services/Operations/BatchApi";
import ChipInput from "../../AddCourse/CourseInformation/ChipInput";

function BatchInfoForm() {
  const [batchCategory, setBatchCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { Batch, editBatch } = useSelector((state) => state.batch);

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
        setBatchCategory(categories);
      }
      setLoading(false);
    };
    if (editBatch) {
    }
    getCategories();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("batchName", data.batchName);
    formData.append("batchDescription", data.batchDescription);
    formData.append("category", data.category);
    formData.append("instructions", JSON.stringify(data.instructions));
    formData.append("tag", JSON.stringify(data.tag));
    formData.append("thumbnailImage", data.thumbnailImage);
    formData.append("batchFees", data.batchFees);
    formData.append("batchMaxStudents", data.batchMaxStudents);
    formData.append("batchStartDate", data.batchStartDate);
    formData.append("batchEndDate", data.batchEndDate);
    formData.append("batchMode", data.batchMode);

    setLoading(true);
    const result = await addBatchDetails(formData, token);
    if (result) {
      dispatch(setStep(2));
      dispatch(setBatch(result));

    }
    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 mx-4 rounded-md border-2 border-[#bababa] bg-white p-6"
      >
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm text-richblack-400 uppercase tracking-wider"
            htmlFor="courseTitle"
          >
            Batch Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="BatchName"
            placeholder="Enter Batch Name"
            {...register("batchName", { required: true })}
            className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
          />
          {errors.BatchName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Batch title is required
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm text-richblack-400 uppercase tracking-wider"
            htmlFor="quizDescription"
          >
            Batch Description <sup className="text-pink-200">*</sup>
          </label>
          <textarea
            id="batchDescription"
            placeholder="Enter Description"
            {...register("batchDescription", { required: true })}
            className="form-style resize-x-none min-h-[130px] w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
          />
          {errors.batchDescription && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Batch Description is required
            </span>
          )}
        </div>
        <div className="flex justify-between gap-3">
        <div className="flex flex-col w-1/2 space-y-2">
        <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="QeditQuizCategory"
            >
              Batch Category <sup className="text-pink-200">*</sup>
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
                batchCategory?.map((category, indx) => (
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
          <div className="flex flex-col w-1/2 space-y-2">
            <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="batchMode"
            >
              Batch Mode <sup className="text-pink-200">*</sup>
            </label>
            <select
              {...register("batchMode", { required: true })}
              defaultValue=""
              id="batchMode"
              className="form-style w-full uppercase tracking-wider"
            >
              <option value="" disabled>
                Choose a Mode
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            {errors.batchMode && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Batch Mode is required
              </span>
            )}
          </div>
        </div>
        <Upload
          name="thumbnailImage"
          label="Quiz Thumbnail"
          setValue={setValue}
          register={register}
          errors={errors}
          // editData={editBatch ? quiz?.thumbnailImage : null}
        />
        <div className="flex justify-between gap-3">
          <div className="flex w-1/2 flex-col space-y-2">
            <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="price"
            >
              Batch fees <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="batchFees"
                placeholder="Enter Batch fees Price"
                {...register("batchFess", {
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
            {errors.batchFees && (
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
              Seats Available <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="batchMaxStudents"
                type="text"
                placeholder="No of Seats"
                {...register("batchMaxStudents", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
              />
            </div>
            {errors.noOfQuestions && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Please fill the Seats Available
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex w-1/2 flex-col space-y-2">
            <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="noOfQuestions"
            >
              Starting Date <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="batchStartDate"
                type="date"
                {...register("batchStartDate", {
                  required: true,
                })}
                className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
              />
            </div>
            {errors.batchStartDate && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Please fill the Starting Date
              </span>
            )}
          </div>
          <div className="flex flex-col w-1/2 space-y-2">
            <label
              className="text-sm text-richblack-400 uppercase tracking-wider"
              htmlFor="batchEndDate"
            >
              Ending Date <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="batchEndDate"
                type="date"
                {...register("batchEndDate", {
                  required: true,
                })}
                className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">

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
          {editBatch && (
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
            text={!editBatch ? "Next" : "Save Changes"}
          >
            <MdNavigateNext />
          </IconBtn>
        </div>
      </div>
      </form>
    </div>
  );
}

export default BatchInfoForm;
