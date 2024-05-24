import React from "react";
import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";


import {
  getAllUserFeeData,
  updateStudentFeeData,
  // addStudentIntoDatabase,
} from "../../Services/Operations/FeeInfoAPI";
import axios from "axios";



function AddUserFeeData() {

  const [studentFeeData, setStudentFeeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);
    useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const [filteredStudentFeeData, setFilteredStudentFeeData] = useState([]);
  const [filterValue, setFilterValue] = useState("ALL");
  const [selectedClass, setSelectedClass] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

const dispatch=useDispatch();
const navigate=useNavigate();
const editedUsers={
  _id:"",
  student_name:"",
  student_class:"",
  student_enrollment_no:"",
  student_fee_allotted:"",
  student_1_installment:"",
  student_2_installment:"",
  student_3_installment:"",
  student_4_installment:"",
}
const [editedUser, setEditedUser] = useState(editedUsers);

// const inputeditChangeHandler = (e) =>{
//   const {name, value} = e.target;
//   setUser({...editedUser, [name]:value});
//   // console.log(editedUser);
// }

  const Users ={
    student_name:"",
    student_enrollment_no:"",
    student_Mobile_number:"",
    student_class:"",
    student_fee_allotted:"",
    student_1_installment:"",
    student_2_installment:"",
    student_3_installment:"",
    student_4_installment:"",
  }

const [user ,setUser]=useState(Users)


const handleEditClick = (student) => {
  setEditedUser(student);
  setShowUpdateForm(true);
};

const inputhandler = (e) =>{
  const {name, value} = e.target;
  setUser({...user, [name]:value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  await axios.post("https://garudclasses-123.onrender.com/api/v1/userdata/add-data", user).then((response) => {
    toast.success(response.data.message, { position: "top-right" });
    setShowForm(false);
 
    // Refresh studentFeeData after adding new data
    const fetchData = async () => {
      try {
        const data = await getAllUserFeeData();
        setStudentFeeData(data.data);
      } catch (error) {
        console.error("Error fetching student fee data:", error);
      }
    };
    fetchData();
  })
 .catch((error) => {
    toast.error(error.response.data.message, { position: "top-right" });
  });
};
    

const inputeditChangeHandler = (e) => {
  const { name, value } = e.target;
  setEditedUser({...editedUser, [name]: value });
};

const onHandleEdit = async (event) => {
  event.preventDefault();

  const userData = {
    student_enrollment_no: editedUser.student_enrollment_no,
    student_name: editedUser.student_name,
    student_class: editedUser.student_class,
    student_Mobile_number: editedUser.student_Mobile_number,
    student_fee_allotted: editedUser.student_fee_allotted,
    student_1_installment: editedUser.student_1_installment,
    student_2_installment: editedUser.student_2_installment,
    student_3_installment: editedUser.student_3_installment,
    student_4_installment: editedUser.student_4_installment,
  };

  const studentId = editedUser._id;

  try {
    await updateStudentFeeData(studentId, userData);
 toast.success("User details update !", { position: "top-right" });
 setShowUpdateForm(false)
 const fetchData = async () => {
  try {
    const data = await getAllUserFeeData();
    setStudentFeeData(data.data);
  } catch (error) {
    console.error("Error fetching student fee data:", error);
  }
};
fetchData();

 


    // Handle success scenario
  } catch (error) {
    toast.error(error, { position: "top-right" });
    console.log(error)
    // Handle error scenario
  }
};


 


const deleteUser = async (userId) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this student?");
  if (confirmDelete) {
    await axios.delete(`https://garudclasses-123.onrender.com/api/v1/userdata/delete-user/${userId}`)
    
     .then((respones) => {
        // Get the updated list of users
        const fetchData = async () => {
          try {
            const data = await getAllUserFeeData();
            setStudentFeeData(data.data);
          } catch (error) {
            toast.error(error)
            console.error("Error fetching student fee data:", error);
          }
        };
        fetchData();

        toast.success(respones.data.message, { position: 'top-right' })
      })
     .catch((error) => {
        console.log(error);
      })
  }
}

// const handleEditSubmit = async (e, student) => {
//   // const id = student._id;
//   e.preventDefault();

//   // Check if editedUser has the required properties
//   if (
//     editedUser.student_enrollment_no &&
//     editedUser.student_name &&
//     editedUser.student_class &&
//     editedUser.student_Mobile_number &&
//     editedUser.student_fee_allotted &&
//     editedUser.student_1_installment &&
//     editedUser.student_2_installment &&
//     editedUser.student_3_installment &&
//     editedUser.student_4_installment
//   ) {
//     try {
//       const response = await axios.put(`http://localhost:8000/api/v1/userdata/update-data/${student._id}`, editedUser);
//       toast.success(response.data.message, { position: "top-right" });
//       setShowForm(false);

//       // Refresh studentFeeData after updating
//       const fetchData = async () => {
//         try {
//           const data = await getAllUserFeeData();
//           setStudentFeeData(data.data);
//         } catch (error) {
//           console.error("Error fetching student fee data:", error);
//         }
//       };
//       fetchData();
//     } catch (error) {
//       toast.error(error.response.data.message, { position: "top-right" });
//       console.log(error);
//     }
//   }
// };






  const handleAddNewStudentClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    const fetchStudentFeeData = async () => {
      try {
        const data = await getAllUserFeeData();
        console.log(data.data);
        setStudentFeeData(data.data);
        console.log(studentFeeData);
      } catch (error) {
        console.error("Error fetching student fee data:", error);
      }
    };

    fetchStudentFeeData();
  }, []);





  // const handleEditSubmit = async (e,student) => {
  //   const id=student.student._id;
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`https://garudclasses-123.onrender.com/api/v1/userdata/update-data/${id}`, editedUser);
  //     toast.success(response.data.message, { position: "top-right" });
  //     setShowForm(false);
  //     // Refresh studentFeeData after updating
  //     const fetchData = async () => {
  //       try {
  //         const data = await getAllUserFeeData();
  //         setStudentFeeData(data.data);
  //       } catch (error) {
  //         console.error("Error fetching student fee data:", error);
  //       }
  //     };
  //     fetchData();
  //   } catch (error) {
  //     toast.error(error.response.data.message, { position: "top-right" });
  //     console.log(error)
  //   }
  // };



  
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = studentFeeData.filter(
      (student) => String(student.student_enrollment_no).toLowerCase().includes(searchTerm)
    );
    setStudentFeeData(filteredData);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    if (e.target.value === "All") {
      setFilteredStudentFeeData(studentFeeData);
    } else {
      const filteredData = studentFeeData.filter(
        (student) =>
          student.student_class.toLowerCase() === e.target.value.toLowerCase()
      );
      setFilteredStudentFeeData(filteredData);
    }
  };


  // const handleClassChange = (e) => {
  //   setSelectedClass(e.target.value);
  // };
  

  const handleLogout = () => {

  localStorage.removeItem("token")
  localStorage.removeItem("user")
  toast.success("Logged Out")
  navigate("/")
};

const indexOfLastStudent = currentPage * 10;
const indexOfFirstStudent = indexOfLastStudent - 10;
const currentStudents = studentFeeData.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <>
    {showUpdateForm && editedUser && (
  <div className="absolute z-10 h-screen w-screen m-0 bg-black bg-opacity-60">
    <form
      id="editForm"
      className="text-white flex flex-1 gap-2 flex-col h-fit m-auto w-2/5 p-8 bg-richblue-700 top-[50%] rounded-2xl"
      onSubmit={(e) => onHandleEdit(e)}
    >
      <div className="flex justify-between">
              <label>Enrollment No:</label>
              {/* <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_enrollment_no"
                value={editedUser.student_enrollment_no}
                onChange={inputeditChangeHandler}
              /> */}
             { editedUser.student_enrollment_no}
            </div>
            <div className="flex justify-between">
              <label>Name:</label>
              {/* <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_name"
                value={editedUser.student_name}
                onChange={inputeditChangeHandler}
                
              /> */}
              <p className="text-left">{editedUser.student_name}</p>
            </div>
            <div className="flex justify-between">
              <label>Class:</label>
              {/* <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_class"
                onChange={inputeditChangeHandler}
              /> */}
              <p className=" text-start">{editedUser.student_class}</p>

            </div>
            <div className="flex justify-between">
              <label>Mobile No.:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_Mobile_number"
                onChange={inputeditChangeHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Total Fee Allotted:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_fee_allotted"
                onChange={inputeditChangeHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Ist Installment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_1_installment"
                onChange={inputeditChangeHandler}
              />
            </div>
          
            <div className="flex justify-between">
              <label>II Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_2_installment"
                onChange={inputeditChangeHandler}
              />
            </div>
            
            <div className="flex justify-between">
              <label>III Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_3_installment"
                onChange={inputeditChangeHandler}
              />
            </div>

            <div className="flex justify-between">
              <label>IV Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_4_installment"
                onChange={inputeditChangeHandler}
              />
            </div>
      <div className="flex justify-center items-center gap-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="submit"
        >
          Update Student
        </button>
        <button
          class="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="cancel"
          onClick={() => setShowUpdateForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}
    {showForm && (
        <div className="absolute z-10 h-screen w-screen m-0 bg-black bg-opacity-40">
          <form id="myForm"  className=" text-white flex flex-1 gap-2 flex-col h-fit m-auto w-2/5 p-8 bg-richblue-700 top-[50%] rounded-2xl"
onSubmit={handleSubmit}>

            <div className="flex justify-between">
              <label>Enrollment No:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_enrollment_no"
                onChange={inputhandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Name:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_name"
                onChange={inputhandler}
                
              />
            </div>
            <div className="flex justify-between">
              <label>Class:</label>
              {/* <select
                    name="student_class"
      onChange={inputhandler}
  className="bg-transparent border-b border-b-brown-25"
>
  <option className="text-black bg-transparent border-b border-richblack-50" value="">Select Class</option>
  <option className="text-black bg-transparent border-b border-richblack-50" value="JEE">JEE</option>
  <option className="text-black bg-transparent border-b border-richblack-50" value="NEET">NEET</option>
  <option className="text-black bg-transparent border-b border-richblack-50" value="Other">Other</option>
</select>

{selectedClass === "Other" && ( */}
    <input
      className="bg-transparent border-b border-b-brown-25"
      type="text"
      name="student_class"
      onChange={inputhandler}
    />
{/* )} */}
            </div>
            <div className="flex justify-between">
              <label>Mobile No.:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_Mobile_number"
                onChange={inputhandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Total Fee Allotted:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_fee_allotted"
                onChange={inputhandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Ist Installment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_1_installment"
                onChange={inputhandler}
              />
            </div>
          
            <div className="flex justify-between">
              <label>II Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_2_installment"
                onChange={inputhandler}
              />
            </div>
            
            <div className="flex justify-between">
              <label>III Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_3_installment"
                onChange={inputhandler}
              />
            </div>

            <div className="flex justify-between">
              <label>IV Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_4_installment"
                onChange={inputhandler}
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Add Student
              </button>
              <button
                class="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="cancel"
                onClick={() => setShowForm(false)}

              
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
  
    <div className=" m-5 p-6 border z-0 bg-richblue-600 rounded-3xl border-richblack-500 ">
      
      <div className=" w-full flex justify-between">
      <input
  type="text"
  placeholder="Search by enrollment no."
  name="search"
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
    handleSearch(e);
  }}
  className="mb-4 p-2 border border-gray-300 rounded"
></input>
        <p
          className="text-sm right-0+ w-fit text-right cursor-pointer text-secondary font-bold underline"
          onClick={handleAddNewStudentClick}
        >
          {" "}
          +Add New Student
        </p>
      </div>

      
      <div
  class=" flex flex-col w-full h-full overflow-scroll scroll-smooth text-white bg-richblue-500 shadow-md rounded-xl bg-clip-border">
  <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
            <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                S no.
                </p>
              </th>
            <th class="p-2 border-b border-richblack-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                Enrollment no.
                </p>
              </th>

              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                Name
                </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

              Class
              </p>
              <div className="flex text-white text-sm font-thin items-center gap-1">
                
                    {/* <select
                      value={filterValue}
                      onChange={handleFilterChange}
                      className="bg-transparent text-richblack-100 border-b border-b-brown-25"
                    >
                      <option className="text-black" value="All">All</option>
                      <option className="text-black" value="NEET">NEET</option>
                      <option className="text-black" value="JEE">JEE</option>
                      <option className="text-black" value="Mains">Mains</option>
                      <option className="text-black" value="Other">Other</option>
                    </select> */}
                    {/* <IoFilterSharp /> */}
                  </div>
                
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

      
                Mobile No.
              </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                Total Fee Allotted
                </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                Ist Installment
                </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                II Insatallment
                </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                III Insatallment
                </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                IV Insatallment
                </p>
              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                Balance
                </p>

              </th>
              <th class="p-4 border-b border-richblack-100 bg-blue-gray-50">
              <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">

                Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentStudents?.length === 0 ? (
              <tr>
                <td className="flex text-center text-white gap-x-10 border-b border-richblack-800 px-6 py-8">
                  No User found !
                </td>
              </tr>
            ) : (
              currentStudents.map((student,index) => (
                <tr
                  key={index}
                >
                  <td class="pl-4 border-b border-blue-gray-50">
        <p class="block font-sans  text-sm antialiased font-normal leading-normal text-blue-gray-900">

                    {index+1}
                    </p>
                  </td>
        <td class=" border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                    {student.student_enrollment_no}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                    {student.student_name}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                    {student.student_class}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                    {student.student_Mobile_number}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                      <span>{student.student_fee_allotted}</span>
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
        
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {student.student_1_installment === 0 ||
                        !student.student_1_installment
                          ? "Pending"
                          : student.student_1_installment}
                      </p>
                    
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {student.student_2_installment === 0 ||
                        !student.student_2_installment
                          ? "Pending"
                          : student.student_2_installment}
                      </p>
                  
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {student.student_3_installment === 0 ||
                        !student.student_3_installment
                          ? "Pending"
                          : student.student_3_installment}
                      </p>
                  
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
      
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {student.student_4_installment === 0 ||
                        !student.student_4_installment
                          ? "Pending"
                          : student.student_4_installment}
                      </p>
                    
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">

                    ₹
                    {student.student_fee_allotted -(
                      (isNaN(student.student_1_installment)
                        ? 0
                        : student.student_1_installment) +
                      (isNaN(student.student_2_installment)
                        ? 0
                        : student.student_2_installment) +
                      (isNaN(student.student_3_installment)
                        ? 0
                        : student.student_3_installment) +
                      (isNaN(student.student_4_installment)
                        ? 0
                        : student.student_4_installment))}
                  </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  
                      
                      <button
                        disabled={loading}
                        onClick={() => handleEditClick(student)}
                        title="edit"
                        className="p-2 mr-1 transition-all font-extrabold bg-opacity-25 text-white bg-caribbeangreen-50  rounded-full duration-200 hover:scale-110 hover:text-caribbeangreen-50 hover:bg-white"
                      >
                        <FiEdit2 size={20} />
                      </button>
                      <button
                    disabled={loading}
                    onClick={()=> deleteUser(student._id)}
                    title="delete"
                    className="p-2 h-fit text-white bg-[#ff0000] rounded-full   transition-all duration-200 hover:scale-110 hover:text-[#ff0000] hover:bg-white"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                      
                  
                  </td>
                  
                </tr>
              ))
            )}
          </tbody>
          <div className="w-full flex flex-row gap-3 justify-center items-center">
          <button className="px-3 py-2 bg-richblue-300 rounded-xl border border-richblue-200 " disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
        Previous
      </button>
      <button className="px-3 py-2 bg-richblue-300 rounded-xl border border-richblue-200 "  disabled={currentPage * 10 >= studentFeeData.length} onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>

          </div>
          
        </table>
        {/* <Link
        onClick={handleLogout}
        >
          logout
        </Link> */}
        
      </div>
    </div>
    </>
  );
}
export default AddUserFeeData;
