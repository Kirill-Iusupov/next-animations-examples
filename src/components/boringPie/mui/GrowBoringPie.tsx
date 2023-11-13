'use client'
import { Button, Grow } from '@mui/material'
import {useState} from 'react'

export const GrowBoringPie = () => {

  const [checked, setChecked] = useState(false);

  const  handleChange=()=>{
      setChecked((prev) => !prev);
  };

  return (
    <>
        <h3>Grow</h3>
        <Grow in={checked}>
            <span className='text-[100px]'>🥧</span>
        </Grow>
        <Button onClick={handleChange}> Handle </Button>
    </>
  )
}

