import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
}

export default function BasicBreadcrumbs({second}) {
  return (
    <div className='flex w-full' role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" fontSize={20} color="inherit" href="/">
          Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          fontSize={20}
          href="/dashboard" 
        >
            {second}
        </Link> 
      </Breadcrumbs> 
    </div>
  );
}