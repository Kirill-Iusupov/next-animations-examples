import Wrapper from '@/components/wrapper/Wrapper'

import {CollapseBoringPie } from '@/components/boringPie/mui/CollapseBoringPie';
import { Metadata } from 'next';
import { FadeBoringPie } from '@/components/boringPie/mui/FadeBoringPie';
import { GrowBoringPie } from '@/components/boringPie/mui/GrowBoringPie';
import { SlideBoringPie } from '@/components/boringPie/mui/SlideBoringPie';
import { ZoomBoringPie } from '@/components/boringPie/mui/ZoomBoringPie';

const _class = "flex flex-col text-center border border-white-300 rounded-[10px] p-[10px]"

export const metadata: Metadata ={
    title: "MUI Animated Components"
}

const page = () => {

  return (
    <Wrapper>
        <div className={_class}>
            <CollapseBoringPie />
        </div>
        <div className={_class}>
            <FadeBoringPie/>
        </div>
        <div className={_class}>
            <GrowBoringPie/>
        </div>
        <div className={_class}>
            <SlideBoringPie/>
        </div>
        <div className={_class}>
            <ZoomBoringPie/>
        </div>
    </Wrapper>
  )
}

export default page