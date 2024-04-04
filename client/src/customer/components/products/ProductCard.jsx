import React from 'react'
import './ProductCardCss.css'
import { useNavigate, useParams } from 'react-router-dom'
function ProductCard({product}) {
  const navigate = useNavigate()
  const {level1} = useParams()
  const handleClick = (product)=>{
    navigate(`/product/${level1}/${product.movieName}`)
  }
  return (
    <div onClick={()=>handleClick(product)} className='productCard w-[15rem] m-3 transition-all cursor-pointer object-cover object-left-top'>
      <div className='h-[20rem]'>
        <img src={product.imageUrl} className='h-full w-full object-cover object-left-top'   alt='productimg'/>
      </div>

      <div className='textPart bg-white p-3'>
        <div>
        <p className='font-bold opacity-60'>{product.movieName}</p>
        <p>{product.genre}</p>
        </div>

        
      </div>
    </div>
  )
}

export default ProductCard
