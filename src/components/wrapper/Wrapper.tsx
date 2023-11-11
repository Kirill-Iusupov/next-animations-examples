import {FC, ReactNode} from 'react'

const Wrapper: FC<{children: ReactNode}> = ({children}) =>  {
  return (
    <div className='flex justify-around items-center m-auto w-[1200px]'>
        {children}
    </div>
  )
}

export default Wrapper
