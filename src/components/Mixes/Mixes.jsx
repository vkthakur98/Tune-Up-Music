import React from 'react'
import SongTab from './SongTab'
import { useSelector } from 'react-redux'

const Mixes = ({heading}) => {
  const songs = useSelector(state=>state.songs)
  return (
    <div className='w-screen'>
      <h1 className='ml-4 mt-4 text-white text-[21px] font-bold'>{heading}</h1>
    <div className='flex justify-start overflow-scroll  ml-4 mt-2 scrollbar '>
      {    
      songs.map((song,key)=>{
      return(
      <SongTab key={key} title={song.songtitle} img_src={song.songimg}></SongTab>
      )  
    })
    }
    </div>
    </div>
  )
}

export default Mixes
