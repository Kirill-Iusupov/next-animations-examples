'use client';
import QueueAnim from 'rc-queue-anim'
import BoringPie from '@/components/boringPie/BoringPie'


const QueueBoringPie = () => {
  return (
    <QueueAnim>
        <BoringPie key={1}/>
        <BoringPie key={2}/>
        <BoringPie key={3}/>
        <BoringPie key={4}/>
    </QueueAnim>
  )
}

export default QueueBoringPie