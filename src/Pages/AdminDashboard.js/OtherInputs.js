import React from "react";
import { useEffect, useState } from "react";
import { fetchCourseCategories } from "../../Services/Operations/CourseApi";

function OtherInputs() {
  const [loading, setLoading] = useState(false);

  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCourseCategorie = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      console.log("category", categories);
      if (categories.length > 0) {
        setCategories(categories);
      }
      setLoading(false);
    };
    fetchCourseCategorie();
  }, []);

  return (
    <div className="md:p-6 px-2  h-screen w-full ">
      <div className="md:px-4">
        <h1 className="text-3xl  mt-16 font-bold">Other Inputs</h1>
        <div className="w-full rounded-lg px-4 mt-4 shadow-xl shadow-[#b6b09f] bg-[#fff8ca]">
          <h1 className="text-xl font-semibold text-[#ffae00]">Category</h1>
          <div>
            {loading ? (
              <div className="flex justify-center items-center h-20">
                <div
                  className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#ffae00]"
                ></div>
              </div>
            ) : (
              <div className="flex flex-col flex-wrap gap-2">
                {Categories.map((category) => (
                  <div
                    className="flex flex-col items-start gap-2 bg-[#fff8ca] rounded-lg
                    px-2 py-1 text-[#595858] font-semibold"
                    key={category.id}
                  >

                   <p className="border p-2 bg-white rounded-xl">{category.name}</p> 
                    <li className="text-sm font-normal px-4">
                      {category.description}
                    </li>
                  </div>
                ))}
              </div>
            )}
          </div>

          
        </div>
        <div className="w-full min-h-10 rounded-lg px-4 mt-4 shadow-xl shadow-[#b6b09f] bg-[#fbcaff]">
        <h1 className="text-xl font-semibold text-[#780078]">Subjects || Chapter || Topics</h1>
        <div>
          
        </div>
          </div>
      </div>
    </div>
  );
}

export default OtherInputs;
