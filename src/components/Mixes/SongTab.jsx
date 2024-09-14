import React from 'react'

const SongTab = ({img_src,title}) => {
  return (
   <>
   <div className='p-2 rounded-md shrink-0'>
    <img src={img_src} className='rounded-md' height={120} width={120}  />
    <span className='font-bold text-white text-[16px] overflow-hidden w-2'>{title}</span>
   </div>
   </>
  )
}

export default SongTab
