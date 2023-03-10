import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from '../Navbar'
import Footer from '../Footer'
import spin from '../../photos/spin.svg'
import Head from "next/head";
import { useRouter } from "next/router";

const Products = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const route = useRouter()
    useEffect(() => {
      setLoading(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
    .then((res) => res.json())
    .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    const meals = data?.meals
    console.log(meals)
    if(isLoading) {
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
    <div className="w-full">
      <div className="text-center md:mt-32 mt-10">
        <h4 className="text-lg text-white bg-[#FFB100] inline font-semibold p-1 ">
          TASTY & CRUNCHY
        </h4>
        <h4 className="text-5xl m-6 font-bold p-1 ">Choose & enjoy</h4>
        <h4 className="text-lg  font-thin p-1 ">
          Inspired by recipes and creations of world’s best chefs
        </h4>
      </div>
      <div className="md:mt-20 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mx-auto justify-center items-center">
        {meals && meals.map((meal, i) => {
           return <div key={i} className=" md:w-96 h-[600px] p-2 mx-auto bg-base-100 shadow-xl w-80">
           <figure><Image src={meal.strMealThumb} alt="Shoes" 
           width={420}
           height={380}
           /></figure>
           <div className="flex flex-col justify-between relative  mt-5">
             <div>
             <h2 className="text-2xl font-semibold">{meal.strMeal}</h2>
             <p className="text-lg font-light pt-2">Price: $ {(meal.idMeal).slice(-2)} </p>
             </div>
             <div className=" mt-6 ">
             <button
             onClick={()=>{
              route.push(`${meal.idMeal}`)
             }}
               type="button"
               className="flex items-center justify-center w-full p-3 font-semibold border-none tracking-wide rounded-md bg-gradient-to-r from-[#FFB100] to-[#fcb220] text-gray-50"
             >
               See Process
             </button>
             </div>
           </div>
         </div>
        })}
      </div>
    </div>
    </>
  );
};


export default Products;
