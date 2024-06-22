import React from 'react'
import { useSelector } from 'react-redux';
import BasicBreadcrumbs from '../../Components/Dashboard/BreadCramps'
import { Button } from '@mui/material';
// import AddUser from '../Admin/AddUser';
function User() {
  // const { user } = useSelector((state) => state.profile);
  const {user}=useSelector((state)=>state.auth)
  // console.log(auth)
  return (
    <div className='p-4'>
      <div className='mt-14 w-full'>
        <div className='flex items-center justify-between pr-6'>
        <BasicBreadcrumbs second="User"/>
        {user?.accountType === "Admin" ? (
          <Button
            variant="outlined"
            color="primary"
            className="ml-4 w-[150px]"
          >
            Add User
          </Button>
        ) : null}
        </div>
      </div>
    </div>
  )
}

export default User