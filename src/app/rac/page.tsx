'use client'
import BoringPie from "@/components/boringPie/BoringPie"
import Wrapper from "@/components/wrapper/Wrapper"
import {Fade, Rotate, Slide} from "react-animated-components"

const _class = 'w-[300px] border border-[red] border-[3px] text-center block'

const page = () => {
  return (
    <Wrapper>
        <div className={_class}>
            <h2>Rotate</h2>
            <Rotate durationMs={1500}>
                <BoringPie />
            </Rotate>
        </div>
        <div className={_class}>
            <h2>Slide</h2>
            <Slide iterations={"infinite"} durationMs={1500}>
                <BoringPie />
            </Slide>
        </div>
        <div className={_class}>
            <h2>Fade</h2>
            <Fade iterations={"infinite"} durationMs={3000}>
                <BoringPie />
            </Fade>
        </div>


        
        
    </Wrapper>
  )
}

export default page