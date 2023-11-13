'use client'
import { Button, Zoom } from '@mui/material'
import {useState} from 'react'

export const ZoomBoringPie = () => {

  const [checked, setChecked] = useState(false);

  const  handleChange=()=>{
      setChecked((prev) => !prev);
  };

  return (
    <>
        <h3>Zoom</h3>
        <Zoom in={checked}>
            <span className='text-[100px]'>🥧</span>
        </Zoom>
        <Button onClick={handleChange}> Handle </Button>
    </>
  )
}

