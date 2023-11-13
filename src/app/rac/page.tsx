import RacBoringPie from "@/components/boringPie/RacBoringPie"
import Wrapper from "@/components/wrapper/Wrapper"
import { Metadata } from "next"


export const metadata: Metadata={
    title:"React Animated components"
}


const page = () => {
  return (
    <Wrapper>
        <RacBoringPie />
    </Wrapper>
  )
}

export default page