import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function HomeSectionCard({item, sectionName}) {
  const navigate = useNavigate()
  let {level1} = useParams()
  if(!level1){
    let val_of_level1 = sectionName;
    if(val_of_level1 === "Bolliwodd Movies"){
      level1 = "bolliwood";
    }
    if(val_of_level1 === "South Movies"){
      level1 = "south";
    }

    if(val_of_level1 === "Holliwood Movies"){
      level1 = "holliwood";
    }
    
    if(val_of_level1 === "Tv Show"){
      level1 = "tv_shows";
    }

  }
  return (
    <div className='flex flex-col cursor-pointer items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 w-[15rem] my-8 hover:shadow-lg' onClick={()=>navigate(`/product/${level1}/${item.movieName}`)}>
      <div className='h-[13rem] w-[10rem]' >
        <img src={item.imageUrl}  alt="card"  className='object-cover object-top w-full h-full'/>
      </div>
      <div>
        <h3 className='text-lg font-medium text-gray-900'>{item.movieName}</h3>
        <p className='mt-2 text-sm text-gray-500 pb-3'>{
          item.genre.map((ele)=>(` ${ele} `))

        }</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
