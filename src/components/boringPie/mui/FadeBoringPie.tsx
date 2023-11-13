'use client'
import { Button, Fade } from '@mui/material'
import {useState} from 'react'

export const FadeBoringPie = () => {

  const [checked, setChecked] = useState(false);

  const  handleChange=()=>{
      setChecked((prev) => !prev);
  };

  return (
    <>
        <h3>Fade</h3>
        <Fade in={checked}>
            <span className='text-[100px]'>🥧</span>
        </Fade>
        <Button onClick={handleChange}> Handle </Button>
    </>
  )
}

