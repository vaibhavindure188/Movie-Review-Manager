import React from "react";
import Navbar from "../components/navbar/Navbar";
import MainCarousel from "../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/homeSectionCorousel/HomeSectionCarousel";
import Mens_kurta from '../components/homeSectionCorousel/Data'
import Footer from "../components/footer/Footer";
import Product from "../components/products/Product";
import ProductCard from "../components/products/ProductCard";
import HolliwoodData from "../../assets/moveData/HolliwoodMovieData";
import SouthMovieData from "../../assets/moveData/SouthMoveData";
import TvShowsData from "../../assets/moveData/TvShowsData";
function Home() {
  return (
    <>
    <div className="">
    
    </div>
      
      <div  >
      <MainCarousel />
      </div>
      <div className="border py-10">
        <HomeSectionCarousel Data = {Mens_kurta} sectionName={"Bolliwodd Movies"}/>
        <HomeSectionCarousel Data = {SouthMovieData} sectionName={"South Movies"}/>
        <HomeSectionCarousel Data = {TvShowsData} sectionName={"Tv Show"}/>
        <HomeSectionCarousel Data = {HolliwoodData} sectionName={"Holliwood Movies"}/>
        
        
      </div>

      

    </>
  );
}

export default Home;
