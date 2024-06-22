import React from 'react'
import RequirementsField from '../../AddCourse/CourseInformation/RequirenmentsField'
import Upload from '../../AddCourse/Upload'
import ChipInput from '../../AddCourse/CourseInformation/ChipInput'

export default function QuizInformation() {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
      } = useForm()
      const dispatch = useDispatch()
      const { token } = useSelector((state) => state.auth)
  return (
    <form
    onSubmit={handleSubmit(onsubmit)}
    className="space-y-4 mx-4 rounded-md border-2 border-[#bababa] bg-white p-6"
>
<div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-400 uppercase tracking-wider" htmlFor="quizName">
          Quiz Name <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="quizName"
          placeholder="Enter quiz Title"
          {...register("quizTitle", { required: true })}
          className="form-style w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
        />
        {errors.quizName && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Quiz Name title is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-400 uppercase tracking-wider" htmlFor="quizDescription">
          Quiz Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="quizDescription"
          placeholder="Enter Description"
          {...register("quizDescription", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
        />
        {errors.quizDescription && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Quiz Description is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-400 uppercase tracking-wider" htmlFor="price">
          Quiz Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="price"
            placeholder="Enter Course Price"
            {...register("coursePrice", {
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
      <div className='flex gap-4'>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-400 uppercase tracking-wider" htmlFor="noOfQuestions">
          Number of Question <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="noOfQuestions"
            placeholder="Enter Course Price"
            {...register("noOfQuestions", {
              required: true,
              valueAsNumber: true,
              
            })}
            className="form-style w-full !pl-12 placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.noOfQuestions && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Number of Question is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-400 uppercase tracking-wider" htmlFor="duration">
          Test Duration <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="duration"
            type='time'
            {...register("duration", {
              required: true,
              valueAsNumber: true,
              
            })}
            className="form-style w-full !pl-12 placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.noOfQuestions && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Number of Question is required
          </span>
        )}
      </div>
      {/* <Upload
      name="thumbnailImage"
      label="Quiz Thumbnail"
      setValue={setValue}
      register={register}
      errors={errors}
      editData={editQuiz ? quiz?.thumbnailImage : null}
      /> */}
         <ChipInput
        label="Tags"
        name="courseTags"
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
        
      </div>
    </form>
  )
}
