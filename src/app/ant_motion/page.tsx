import QueueBoringPie from '@/components/boringPie/QueueBoringPie'
import Wrapper from '@/components/wrapper/Wrapper'
import { Metadata } from 'next'

export const metadata: Metadata= {
  title: 'Ant Motion Components'
}
export default function() {

 return (
    <Wrapper>
        <QueueBoringPie />
    </Wrapper>
  )
}
