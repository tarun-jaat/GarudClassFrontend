import RenderSteps from "./RenderSteps";

export default function AddQuiz({ currentStep }) {
  return (
    <>
      <div className="flex  w-full items-start gap-x-6">
        <div className="flex mt-20 flex-1 flex-col">
          <h1 className=" text-3xl font-medium text-[#4880FF] uppercase tracking-wider lg:text-left text-center">
            Add Quiz
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        {currentStep === 1 && (
          <div className="Instruction sticky top-24 max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-[#4880FF] p-6 hidden lg:block">
            <p className="mb-2 text-lg font-bold text-white">⚡ Quiz Upload Tips</p>
            <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5  tracking-wider text-justify">
              <li>Set the Quiz Price option or make it free.</li>
              <li>Standard size for the course thumbnail is 1024x576.</li>
              <li>Provide clear and concise instructions on how to use the quiz builder. Use simple language and step-by-step guidance.</li>
              <li>Provide information on how users can get help if they encounter issues or have questions.</li>
              <li>
                Mention if the quiz builder is optimized for mobile devices, if applicable.
              </li>
              <li>
                Provide links to examples or tutorials to help users get started quickly.
              </li>
              <li>Make Announcements to notify any important</li>
              <li>Notes to all enrolled students at once.</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}