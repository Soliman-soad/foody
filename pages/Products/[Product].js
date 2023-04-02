import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import spin from "../../photos/spin.svg"
import YouTube from 'react-youtube';
import YouTubeIframe from "react-youtube-iframe";
import Head from "next/head";

const Product = ({food}) => {

    const [isLoading, setLoading] = useState(false)
    
    useEffect(()=>{
    setLoading(!isLoading)
    },[])


    const foodData = food

    
    const opts = {
        height: "380",
        width: "740",
        
      };
    const opts2 = {
        height: "320",
        width: "320",
        
      };
      
    return (<>
        <Head>
            <title>{foodData?.strMeal} Recipe</title>
        </Head>
        <div className="mx-5 ">
            <h2 className="text-3xl font-semibold text-center mt-5">Recipe of {foodData?.strMeal}</h2>
            <div className=" md:mt-10 mt-8">
                    <div className='mx-auto my-8'>
                        <div className="grid md:grid-cols-12 justify-center gap-5 w-full">
            <div className="col-span-9 flex items-center justify-center">
           <YouTube className="mx-auto hidden md:block" opts={opts} videoId={(foodData?.strYoutube).slice(32)}/>
           <YouTube className="md:hidden" opts={opts2} videoId={(foodData?.strYoutube).slice(32)}/>
            </div>
            <div className="col-span-3 bg-slate-200 px-8 py-6">
                        <span className="font-bold">Ingredient:</span> 
                    <ul className="list-disc px-5 py-2">
                        <li> {foodData?.strIngredient1} </li>      
                        <li>{foodData?.strIngredient2}</li>      
                        <li>{foodData?.strIngredient3}</li>      
                        <li>{foodData?.strIngredient4}</li>      
                        <li>{foodData?.strIngredient5}</li>      
                        <li>{foodData?.strIngredient6}</li>      
                        <li>{foodData?.strIngredient7}</li>      
                        <li>{foodData?.strIngredient8}</li>      
                        <li>{foodData?.strIngredient9}</li>      
                    </ul>
            </div>
           
                        </div>
            </div>
                  
                <div className="my-5">
                        <h2 className="font-bold text-xl mb-2"> Process:
                    </h2> 
                    <p>
                        
                    {foodData?.strInstructions}</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default Product;

export const getStaticProps = async(context) =>{
    const {params} = context;
    
    const res = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${params?.Product}`)
    const data = await res.json()

    

    return{
        props:{
            food : data?.meals[0]
        }
    }

}

export const getStaticPaths = async() =>{
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const foods = await res.json()

    const paths = foods.meals.map(food =>{
        return {
            params:{
                Product : `${food?.idMeal}`
            }
        }
    })

    return{
        paths,
        fallback : false
    }
}