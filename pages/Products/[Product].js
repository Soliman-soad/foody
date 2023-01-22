import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Product = () => {
    const route = useRouter()
    const productId = route.query.Product

    const [productData, setProductData] = useState(null);
    useEffect(()=>{
        console.log(productId)
        fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
        .then(res => res.json())
        .then(data => {
            setProductData(data)
            console.log(data)
        })
    },[])
    const foodData = productData?.meals[0]
    return (
        <div className="mx-5 ">
            <h2 className="text-4xl font-semibold text-center mt-5">{foodData?.strMeal} Recipe</h2>
            <div className="grid items-center md:mt-10 mt-8">
                  <div>
                    <div className=' mx-auto w-10/12 md:w-7/12 m-5'>
            <ReactPlayer url={foodData?.strYoutube} width playIcon playsinline={true}/>
            </div>
                  </div>
                <div>

                    <div>
                        <ul className="flex">
                        <span className="font-bold mr-2">Ingredient:</span> 
                        <li> {foodData?.strIngredient1}, </li>      
                        <li>{foodData?.strIngredient2},</li>      
                        <li>{foodData?.strIngredient3},</li>      
                        <li>{foodData?.strIngredient4},</li>      
                        <li>{foodData?.strIngredient5},</li>      
                        <li>{foodData?.strIngredient6},</li>      
                        <li>{foodData?.strIngredient7},</li>      
                        <li>{foodData?.strIngredient8},</li>      
                        <li>{foodData?.strIngredient9}</li>      
                    </ul>
                    </div>
                    
                    <p><span className="font-bold"> 
                        Process:
                    </span> {foodData?.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;