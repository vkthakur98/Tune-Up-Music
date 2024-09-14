import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
   songs:[
    {
       songtitle:"Tum hi ho",
       songimg:"https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/41Wjz1LOWP/size_m_1712905431.jpg",       
    },
    {
        songtitle:"Nain tere chain",
        songimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgVFyItdRjkOr8ueZmxezo0jMorbKEBpTTg&s",       
     },
     {
        songtitle:"Tum hi ho",
        songimg:"https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/41Wjz1LOWP/size_m_1712905431.jpg",       
     },
     {
        songtitle:"Tum hi ho",
        songimg:"https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/41Wjz1LOWP/size_m_1712905431.jpg",       
     },
     {
        songtitle:"Tum hi ho",
        songimg:"https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/41Wjz1LOWP/size_m_1712905431.jpg",       
     }
   ]
}

export const songSlice = createSlice({
    name:"songs",
    initialState:initialState,
    reducers:{  
        addSong:(state,actions)=>{
            console.log()
        }     
    }
})

export default  songSlice.reducer