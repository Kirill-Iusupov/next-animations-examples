import Link from 'next/link'
import React from 'react'
import Wrapper from '../wrapper/Wrapper'

const _class ='border border-[3px] px-[10px] py-[5px] hover:text-[red] hover:bg-[white] rounded-[5px]'

export default function Header() {
  return (
    <header className='p-[20px]'>
        <Wrapper>
            <button className={_class}>
                <Link href={'/'}>
                    Home
                </Link>
            </button>
            <button className={_class}>
                <Link href={"/ant_motion"}>Ant Motion</Link>
            </button>
            <button className={_class}>
                <Link href={"/mui"}>MUI Motion</Link>
            </button>
            <button className={_class}>
                <Link href={"/rac"}>React Animated Components</Link>
            </button>
        </Wrapper>
    </header>
)
}
 