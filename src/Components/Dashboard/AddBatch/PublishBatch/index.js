import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editCourseDetails } from "../../../../Services/Operations/CourseApi"
import { COURSE_STATUS } from "../../../../Utils/Constants"
import IconBtn from "../../../Common/ButtonCommon"
import { resetbatchState, setStep } from "../../../../Slices/BatchSilce"
import { editBatchDetails } from "../../../../Services/Operations/BatchApi"

export default function PublishCourse() {
  const { register, handleSubmit, setValue, getValues } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { Batch } = useSelector((state) => state.batch)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Batch?.publishedStatus === COURSE_STATUS.PUBLISHED) {
      setValue("public", true)
    }
    console.log(Batch)
  }, [])

  const goBack = () => {
    dispatch(setStep(2))
  }

  const goToCourses = () => {
    dispatch(resetbatchState())
    navigate("/dashboard")
  }

  const handleCoursePublish = async () => {
    // check if form has been updated or not
    if (
      (Batch?.publishedStatus === COURSE_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (Batch?.publishedStatus === COURSE_STATUS.DRAFT && getValues("public") === false)
    ) {
      goToCourses()
      return
    }
    const formData = new FormData()
    formData.append("batchId", Batch._id)
    const courseStatus = getValues("public")
      ? COURSE_STATUS.PUBLISHED
      : COURSE_STATUS.DRAFT
    formData.append("publishedStatus", courseStatus)
    setLoading(true)
    const result = await editBatchDetails(formData, token)
    if (result) {
      navigate("/dashboard")
      goToCourses()
    }
    setLoading(false)
  }

  const onSubmit = (data) => {
    // console.log(data)
    handleCoursePublish()
  }

  return (
    <div className="rounded-md border-[1px] bg-[#4880ff] text-richblack-5 p-6">
      <p className="text-2xl font-semibold text-richblack-5">
        Publish Settings
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox */}
        <div className="my-6 mb-8">
          <label htmlFor="public" className="inline-flex items-center text-lg">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-5 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
            />
            <span className="ml-2 text-richblack-5">
              Make this Batch as public
            </span>
          </label>
        </div>

        {/* Next Prev Button */}
        <div className="ml-auto flex max-w-max items-center gap-x-4">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-[#4880ff]"
          >
            Back
          </button>
          <button
            disabled={loading}
            type="button"
            onClick={handleCoursePublish}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-[#4880ff]"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}