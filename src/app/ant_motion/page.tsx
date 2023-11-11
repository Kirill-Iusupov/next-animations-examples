'use client'
import BoringPie from '@/components/boringPie/BoringPie'
import Wrapper from '@/components/wrapper/Wrapper'
import QueueAnim from 'rc-queue-anim'

const _class="text-[100px]"

export default function() {

 return (
    <Wrapper>
      <QueueAnim>
        <BoringPie key={1}/>
        <BoringPie key={2}/>
        <BoringPie key={3}/>
        <BoringPie key={4}/>
      </QueueAnim>
    </Wrapper>
  )
}
