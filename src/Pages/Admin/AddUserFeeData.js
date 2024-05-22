import React from "react";
// import { useForm } from "react-hook-form"
import { useDispatch} from "react-redux"
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
// import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
// import { HiClock } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";


import {
  getAllUserFeeData,
  updateStudentFeeData,
  addStudentIntoDatabase,
} from "../../Services/Operations/FeeInfoAPI";
import axios from "axios";



function AddUserFeeData(props) {

  const [studentFeeData, setStudentFeeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudentFeeData, setFilteredStudentFeeData] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  const [loading, setLoading] = useState(false);
    useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

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

const inputHandler = (e) =>{
  const {name, value} = e.target;
  setUser({...user, [name]:value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8000/api/v1/userdata/add-data", user).then((response) => {
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
    






 


  

  const deleteUser = async(userId) =>{
    await axios.delete(`http://localhost:8000/api/v1/userdata/delete-user/${userId}`)
    .then((respones)=>{
      setStudentFeeData((prevUser)=> prevUser.filter((student)=> student._id !== userId))
      toast.success(respones.data.message, {position: 'top-right'})
    })
    .catch((error) =>{
      console.log(error);
    })
  }






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





  const handleEditSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/v1/userdata/update-data/${id}`, editedUser);
      toast.success(response.data.message, { position: "top-right" });
      setShowForm(false);
      // Refresh studentFeeData after updating
      const fetchData = async () => {
        try {
          const data = await getAllUserFeeData();
          setStudentFeeData(data.data);
        } catch (error) {
          console.error("Error fetching student fee data:", error);
        }
      };
      fetchData();
    } catch (error) {
      toast.error(error.response.data.message, { position: "top-right" });
    }
  };



  
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value.toLowerCase();
    const filteredData = studentFeeData.filter(
      (student) =>
        student.student_enrollment_no.toLowerCase().includes(searchTerm) ||
        student.student_name.toLowerCase().includes(searchTerm)
    );
    setFilteredStudentFeeData(filteredData);
  };


  return (
    <>
    {showUpdateForm && editedUser && (
  <div className="absolute h-screen w-screen m-0 bg-black bg-opacity-40">
    <form
      id="editForm"
      className="text-white flex flex-1 gap-2 flex-col h-fit m-auto w-2/5 p-8 bg-richblue-700 top-[50%] rounded-2xl"
      onSubmit={(e) => handleEditSubmit(e, editedUser._id)}
    >
      <div className="flex justify-between">
              <label>Enrollment No:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_enrollment_no"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Name:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_name"
                onChange={inputHandler}
                
              />
            </div>
            <div className="flex justify-between">
              <label>Class:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_class"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Mobile No.:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_Mobile_number"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Total Fee Allotted:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_fee_allotted"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Ist Installment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_1_installment"
                onChange={inputHandler}
              />
            </div>
          
            <div className="flex justify-between">
              <label>II Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_2_installment"
                onChange={inputHandler}
              />
            </div>
            
            <div className="flex justify-between">
              <label>III Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_3_installment"
                onChange={inputHandler}
              />
            </div>

            <div className="flex justify-between">
              <label>IV Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_4_installment"
                onChange={inputHandler}
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
        <div className="absolute h-screen w-screen m-0 bg-black bg-opacity-40">
          <form id="myForm"  className=" text-white flex flex-1 gap-2 flex-col h-fit m-auto w-2/5 p-8 bg-richblue-700 top-[50%] rounded-2xl"
onSubmit={handleSubmit}>

            <div className="flex justify-between">
              <label>Enrollment No:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_enrollment_no"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Name:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_name"
                onChange={inputHandler}
                
              />
            </div>
            <div className="flex justify-between">
              <label>Class:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_class"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Mobile No.:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_Mobile_number"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Total Fee Allotted:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_fee_allotted"
                onChange={inputHandler}
              />
            </div>
            <div className="flex justify-between">
              <label>Ist Installment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_1_installment"
                onChange={inputHandler}
              />
            </div>
          
            <div className="flex justify-between">
              <label>II Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_2_installment"
                onChange={inputHandler}
              />
            </div>
            
            <div className="flex justify-between">
              <label>III Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_3_installment"
                onChange={inputHandler}
              />
            </div>

            <div className="flex justify-between">
              <label>IV Insatallment:</label>
              <input
                className="bg-transparent border-b border-b-brown-25"
                type="text"
                name="student_4_installment"
                onChange={inputHandler}
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
  
    <div className=" m-5 p-12 border rounded-3xl border-richblack-500 ">
      
      <div className=" w-full flex justify-between">
        <input
          type="text"
          placeholder="Search by name or enrollment no."
          value={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
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

      
      <div>
        <Table className="m-auto mt-5">
          <Thead>
            <Tr className=" justify-between flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
              <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-5">
                Enrollment no.
              </Th>

              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Name
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Class
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Mobile No.
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Total Fee Allotted
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Ist Installment
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                II Insatallment
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                III Insatallment
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                IV Insatallment
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Balance
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-5">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {studentFeeData?.length === 0 ? (
              <Tr>
                <Td className="flex gap-x-10 border-b border-richblack-800 px-6 py-8">
                  No User found !
                </Td>
              </Tr>
            ) : (
              studentFeeData.map((student) => (
                <Tr
                  key={student.student_enrollment_no}
                  className="group flex justify-between items-center gap-x-6 border-b border-richblack-800 px-6 py-8"
                >
                  <Td className="text-sm  w-[100px]  font-medium text-richblack-100">
                    {student.student_enrollment_no}
                  </Td>
                  <Td className="text-sm w-[100px]  text-star font-medium text-richblack-100">
                    {student.student_name}
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    {student.student_class}
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    {student.student_Mobile_number}
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    
                      <span>{student.student_fee_allotted}</span>
                    
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
        
                      <span>
                        {student.student_1_installment === 0 ||
                        !student.student_1_installment
                          ? "Pending"
                          : student.student_1_installment}
                      </span>
                    
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    
                      <span>
                        {student.student_2_installment === 0 ||
                        !student.student_2_installment
                          ? "Pending"
                          : student.student_2_installment}
                      </span>
                  
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                
                      <span>
                        {student.student_3_installment === 0 ||
                        !student.student_3_installment
                          ? "Pending"
                          : student.student_3_installment}
                      </span>
                  
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
      
                      <span>
                        {student.student_4_installment === 0 ||
                        !student.student_4_installment
                          ? "Pending"
                          : student.student_4_installment}
                      </span>
                    
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    ₹
                    {student.student_fee_allotted -
                      (isNaN(student.student_1_installment)
                        ? 0
                        : student.student_1_installment) -
                      -(isNaN(student.student_2_installment)
                        ? 0
                        : student.student_2_installment) -
                      (isNaN(student.student_3_installment)
                        ? 0
                        : student.student_3_installment) -
                      (isNaN(student.student_4_installment)
                        ? 0
                        : student.student_4_installment)}
                  </Td>
                  <Td className="text-sm  font-medium text-richblack-100 ">
                  
                      
                      <button
                        disabled={loading}
                        onClick={() => handleEditClick(student._id)}

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
                      
                  
                  </Td>
                  
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
        
      </div>
    </div>
    </>
  );
}
export default AddUserFeeData;
