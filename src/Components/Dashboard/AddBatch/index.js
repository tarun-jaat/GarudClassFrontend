import React from "react";
import { useSelector } from "react-redux";
import RenderSteps from "./RenderSteps";

export default function AddBatch() {
  const { step } = useSelector((state) => state.batch);
  const currentStep = step;

  return (
    <>
      <div className="flex mt-16  w-full items-start gap-x-6">
        <div className="flex mt-20 flex-1 flex-col">
          <h1 className=" text-3xl font-medium text-[#4880FF] uppercase tracking-wider lg:text-left text-center">
            Add Batch
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {currentStep === 1 && (
          <div className="instructions sticky top-24 max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-[#4880FF] p-6 hidden lg:block">
            <p className="mb-2 text-lg font-bold text-white">
              ⚡Batch Upload Tips
            </p>
            <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5  tracking-wider text-justify">
              <li>Prepare your batch of items to be added.</li>
              <li>
                Identify the location or database where you want to add these
                items.
              </li>
              <li>
                Ensure you have the necessary permissions or access rights to
                make additions.
              </li>
              <li>
                Open the application or software used for adding items (e.g., a
                content management system, database management tool).
              </li>
              <li>
                Access the section or menu specifically designed for adding new
                items.
              </li>
              <li>
                Review any guidelines or requirements for the data format or
                structure.
              </li>
              <li>
                Input or paste your batch of items into the designated area.
              </li>
              <li>
                Verify that all items have been correctly entered and formatted.
              </li>
              <li>
                Save or submit the batch of items according to the application's
                instructions.
              </li>
              <li>
                Confirm successful addition by checking the database or relevant
                section of the application.
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
