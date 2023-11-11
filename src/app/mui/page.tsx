import Wrapper from '@/components/wrapper/Wrapper'

import CollapseBoringPie from '@/components/boringPie/CollapseBoringPie';
import { Metadata } from 'next';


export const metadata: Metadata ={
    title: "MUI Animated Components"
}

const page = () => {

  return (
    <Wrapper>
        <div className='text-center border border-white-300 rounded-[10px] p-[10px]'>
            <CollapseBoringPie />
        </div>
    </Wrapper>
  )
}

export default page