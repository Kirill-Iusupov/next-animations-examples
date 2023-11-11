'use client';
import Wrapper from '@/components/wrapper/Wrapper'
import React, {useState} from 'react'

import { Button, Collapse } from '@mui/material'
import BoringPie from '@/components/boringPie/BoringPie'

const page = () => {


    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
  return (
    <Wrapper>
        <div className='text-center border border-white-300 rounded-[10px] p-[10px]'>
            <Collapse orientation="horizontal" in={checked}>
                <BoringPie />
            </Collapse>
            <Button onClick={handleChange}> Handle </Button>
        </div>
        
    </Wrapper>
  )
}

export default page