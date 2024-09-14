import React from 'react'

const Header = () => {
  return (
    <>
    <div className='bg-[#0D7C66] text-white p-2 text-[20px] font-bold'>
        <h1>TuneUp</h1>
    </div>
    <div className='flex justify-center align-middle mt-2'>
     <input className='p-2 bg-[#363535] w-[75vw] rounded-tl-[20px] rounded-bl-[20px]' type="text" placeholder='Search for songs' />
     <button className='p-2 bg-[#0D7C66] text-white w-[13vw] rounded-tr-[20px] rounded-br-[20px]'><i className='fa fa-search'></i></button>
    </div>
    </>
  )
}

export default Header
