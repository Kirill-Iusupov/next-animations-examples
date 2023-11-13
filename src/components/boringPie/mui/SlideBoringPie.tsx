'use client'
import { Button, Slide } from '@mui/material'
import {useState} from 'react'

export const SlideBoringPie = () => {

  const [checked, setChecked] = useState(false);

  const  handleChange=()=>{
      setChecked((prev) => !prev);
  };

  return (
    <>
        <h3>Slide</h3>
        <Slide direction='down' in={checked}>
            <span className='text-[100px]'>🥧</span>
        </Slide>
        <Button onClick={handleChange}> Handle </Button>
    </>
  )
}

