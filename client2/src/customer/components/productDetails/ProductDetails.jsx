
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Box, Grid, Grow, LinearProgress, Rating } from '@mui/material'
import { Button } from '@mui/base'
import ProductReviewCard from './ProductReviewCard'
import Mens_kurta from '../homeSectionCorousel/Data'
import HomeSectionCard from '../homeSectionCorousel/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import SouthMovieData from '../../../assets/moveData/SouthMoveData'
import HolliwoodData from '../../../assets/moveData/HolliwoodMovieData'
import TvShowsData from '../../../assets/moveData/TvShowsData'
import { useEffect } from 'react'

const product = {
  "imageUrl": "https://example.com/movie1.jpg",
  "movieName": "Dangal",
  "genre": ["Biography ", "Drama ", "Sport "],
  "actors": ["Aamir Khan ", " Sakshi Tanwar"],
  "actresses": ["Fatima Sana Shaikh", "Sanya Malhotra"],
  "description": "Dangal is a biographical sports drama film based on the life of the Phogat sisters, who were wrestlers. It follows the journey of Mahavir Singh Phogat, an amateur wrestler, who trains his daughters Geeta Phogat and Babita Kumari to become India's first world-class female wrestlers.",
  "highlights": ["Inspiring story", "Great performances"],breadcrumbs: [
    { id: 1, name: 'movie', href: '#' },
    { id: 2, name: 'all', href: '#' },
  ],
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const {mvName,level1} = useParams()
  let objArr;
  let similarMovies;
  if(level1 == "south"){
    objArr = SouthMovieData.filter((movie)=>{
      if (movie.movieName === mvName){
          return movie
      }
    })
    similarMovies = SouthMovieData;
  }
  if(level1 == "bolliwood"){
    objArr = Mens_kurta.filter((movie)=>{
      if (movie.movieName === mvName){
          return movie
      }
    })
    similarMovies = Mens_kurta;
  }
  if(level1 == "holliwood"){
    objArr = HolliwoodData.filter((movie)=>{
      if (movie.movieName === mvName){
          return movie
      }
    })
    similarMovies = HolliwoodData;
  }
  
  if(level1 == "tv_shows"){
    objArr = TvShowsData.filter((movie)=>{
      if (movie.movieName === mvName){
          return movie
      }
    })
    similarMovies = TvShowsData;
  }
  const product = objArr[0];
  const navigate = useNavigate();
  

  useEffect(() => {
    const fun = ()=>{
      window.scrollTo(0, 0);
    }

    fun();
      
  }, []);
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            {/* <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li> */}
          </ol>
        </nav>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
            {/* Image gallery */}
        <div className="flex flex-col items-center ">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img
              src={product.imageUrl}
              alt="img"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap  gap-x-5 mt-5">
            {/* <div className="max-w-[8rem]  max-h-[8rem]  overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="max-w-[8rem]  max-h-[8rem]aspect-h-2  overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div> */}
            {/* <div className="max-w-[8rem]  max-h-[8rem]  lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div> */}
          </div>
          
        </div>

        {/* Product info */}
        <div className="lg:col-span-1 lg:max-w-7xl lg:pr-8 lg:pb-24 ">
          <div className="lg:col-span-1 ">
            <h1 className="text-lg font-semibold  text-gray-900 sm:text-3xl">{product.movieName} </h1>
            <h1 className='text-lg opacity-60 text-gray-900 sm:text-2xl'>{
              product.genre.map((item)=>(` ${item} `))
            } </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only"> Information about Movie</h2>
            {/* <div className='flex space-x-5 pt-4 text-lg sm:text-xl'>
                <p className='text-green-500 font-bold'>₹ 300</p>
                <p className='line-through opacity-60'>₹ 500</p>
                <p className='font-semibold'>45% off</p>
            </div> */}

            {/* Reviews */}
            <div className="mt-6 flex  gap-x-5 space-y-2 text-lg text-gray-900">
              <h3 className="sr-only">Reviews</h3>
              <Rating name="read-only" value={4}  readOnly />  {/*value={value} */}
              <p>2000 Review</p>
              <p className='text-indigo-600'>43233 Rating</p>
            </div>

            <form className="mt-10">
  
              <button onClick={()=>navigate('/GiveReview')} className='text-bold text-white h-10 rounded-lg w-[10rem] bg-green-800 mt-7 hover:bg-blue-700'>Add a Review</button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{
                 product.actors.map((actor)=>(` ${actor}, `))
                }</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* Review And Rating */}
        <section className='px-20 '>
          <h1 className='font-bold text-xl mb-6'>Recent Reviews and Rating</h1>
          <div>
            <Grid container className='border'>
              <Grid item sx={{marginLeft:'2rem'}} xs={6}>
                <div className='space-y-5 mt-8'>
                  {
                    [1,1,1].map((item)=><ProductReviewCard />)
                  }
                  
                </div>
              </Grid>
              <Grid xs={5} item sx={{marginTop:'5rem', marginLeft:'3rem'}}>
                  <h1 className='text-xl font-semibold pb-2'>Product Rating</h1>
                  <div className='flex items-center space-x-3 mb-5'>
                    <Rating value={4.5} precision={0.5} name='half-rating'  readOnly/>
                    <p>34134 Rating</p>
                  </div>

                  <Box sx={{marginBottom:'0.6rem'}}>
                    <Grid container>
                      <Grid item xs={2}>
                        <p>Excellent</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress sx={{height:'0.4rem', marginTop:'.8rem', borderRadius:'4rem', bgcolor:'wheat'}} variant="determinate" value={40}  color="success"/>
                        
                      </Grid>
                    </Grid>
    
                  </Box>
                  <Box sx={{marginBottom:'0.6rem'}}>
                    <Grid container>
                      <Grid item xs={2}>
                        <p>Very Good</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress sx={{height:'0.4rem', marginTop:'.8rem', borderRadius:'4rem',bgcolor:'wheat'}} variant="determinate" value={70}  color="inherit"/>
                        
                      </Grid>
                    </Grid>
    
                  </Box>
                  <Box sx={{marginBottom:'0.6rem'}}>
                    <Grid container>
                      <Grid item xs={2}>
                        <p>Good</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress sx={{height:'0.4rem', marginTop:'.8rem', borderRadius:'4rem',bgcolor:'wheat'}} variant="determinate" value={50}  color="primary"/>
                        
                      </Grid>
                    </Grid>
    
                  </Box>
                  <Box sx={{marginBottom:'0.6rem'}}>
                    <Grid container>
                      <Grid item xs={2}>
                        <p>Average</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress sx={{height:'0.4rem', marginTop:'.8rem', borderRadius:'4rem',bgcolor:'wheat'}} variant="determinate" value={30}  color="primary"/>
                        
                      </Grid>
                    </Grid>
    
                  </Box>
                  <Box >
                    <Grid container>
                      <Grid item xs={2}>
                        <p>Poor</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress sx={{height:'0.4rem', marginTop:'.8rem', borderRadius:'4rem',bgcolor:'wheat'}} variant="determinate" value={10}  color="secondary"/>
                        
                      </Grid>
                    </Grid>
    
                  </Box>
              </Grid>
  
            </Grid>
          </div>
        </section>
        {/* Similar Products  */}
        <section className='px-20 py-20'>
            <h1 className='font-semibold text-lg'>Similar Movies</h1>
            <div className='flex flex-wrap items-center py-10'>
              {
                similarMovies.slice(0,20).map((item)=> <HomeSectionCard item={item}/>)
              }
            </div>
        </section>
      </div>
    </div>
  )
}
