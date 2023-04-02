import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import spin from '../../../photos/spin.svg'

const Showcase = () => {
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
   
    if(isLoading) {
      return (
          <div className="flex justify-center item center h-screen animate-spin">
              <Image src={spin} width={100} height={100} atl='spinner'/>
          </div>
      )
  }
  return (
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
      <div className="md:mt-20 mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mx-auto justify-center items-center">
        {meals && meals.slice(0,8).map((meal, i) => {
           return <div 
           onClick={()=>{route.push(`/Products/${meal.idMeal}`) }} 
           key={i} 
           className="relative rounded-lg cursor-pointer group w-[250px] h-[280px] overflow-hidden m-5 transition duration-200 ease-in-out">
           <div className="absolute -z-10 w-full overflow-hidden">
           <div className="group-hover:bg-gray-500/50 absolute w-full h-full z-10 border transition duration-200 ease-in-out"></div>
           <figure><Image src={meal.strMealThumb} alt={meal.strMeal} 
           width={280}
           height={300}
           className="group-hover:scale-125 transition duration-200 ease-in-out"
           /></figure>
           </div>
           <div className="flex items-center h-full  mt-5 z-30">
             <p className="text-lg text-center w-full group-hover:bg-[#ffa600]/75 group-hover:text-white border-x  font-semibold bg-white/75 px-10 py-5 transition duration-200 ease-in-out">{meal.strMeal}</p>
           </div>
         </div>
        })}
      </div>
    </div>
  );
};


export default Showcase;
