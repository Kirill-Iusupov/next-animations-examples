'use client'
import { Button, Collapse } from '@mui/material'
import {useState} from 'react'
import BoringPie from '../BoringPie'

export const CollapseBoringPie = () => {

  const [checked, setChecked] = useState(false);

  const  handleChange=()=>{
      setChecked((prev) => !prev);
  };

  return (
    <>
        <h3>Collapse</h3>
        <Collapse orientation="horizontal" in={checked}>
            <BoringPie />
        </Collapse>
        <Button onClick={handleChange}> Handle </Button>
    </>
  )
}

