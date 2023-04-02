import Image from "next/image";
import { useEffect, useState } from "react";
import spin from '../../photos/pizza.png'
import Head from "next/head";
import { useRouter } from "next/router";

import { BiSearchAlt } from "react-icons/bi";
const Products = ({food}) => {
    const route = useRouter()
    
    const meals = food?.meals
    if(!food) {
        return (
            <div className="flex justify-center item center h-screen animate-spin">
                <Image src={spin} width={100} height={100} atl='spinner'/>
            </div>
        )
    }
  return (
    <>
    <Head>
      <title>Products</title>
    </Head>
    <div >
      <div className="text-center md:mt-32 mt-10 w-2/3 mx-auto">
        
        <h4 className="text-3xl m-6 font-bold p-1 text-gray-800">Choose & Try</h4>
        
        <label htmlFor="search" className="bg-gray-200 flex justify-center items-center rounded-full">          
        <span className="pl-3 text-lg">
          <BiSearchAlt/>
        </span>
        <input id="search" className="w-full bg-gray-200 mx-5  py-2 border-none outline-none"/>
        </label>
      </div>
      <div className="md:mt-20 mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {meals && meals.map((meal, i) => {
           return <div 
           onClick={()=>{route.push(`/Products/${meal.idMeal}`) }} 
           key={i} 
           className="relative rounded-lg cursor-pointer group w-[250px] h-[280px] overflow-hidden m-5 transition duration-200 ease-in-out ">
           <div className="absolute -z-10 w-full overflow-hidden">
           <div className="group-hover:bg-gray-500/50 absolute w-full h-full z-10 border transition duration-200 ease-in-out"></div>
           <figure><Image src={meal.strMealThumb} alt={meal.strMeal} 
           width={280}
           height={300}
           className="group-hover:scale-125 transition duration-200 ease-in-out"
           /></figure>
           </div>
           <div className="flex items-center h-full  mt-5 z-30">
             <p className="text-lg text-center w-full group-hover:bg-[#ffa600] group-hover:text-white border-x  font-semibold bg-white/75 px-10 py-5 transition duration-200 ease-in-out">{meal.strMeal}</p>
           </div>
         </div>
        })}
      </div>
    </div>
    </>
  );
};


export default Products;

export const getStaticProps = async() =>{
 const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
 const data = await res.json();

  return {
    props:{
      food : data
    }
  }
}