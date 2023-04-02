import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Slider from '../components/Home/component/Slider'
import Showcase from '../components/Home/component/Showcase'
import Story from '../components/Home/component/Story'
import Event from '../components/Home/component/Event'


const inter = Inter({ subsets: ['latin'] })

export default function Home({food}) {
  return (
    <>
      <Slider/>
      <Showcase food={food}/>
      <Story/>
      <Event/>
      
    </>
  )
}
export const getStaticProps = async() =>{
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
  const data = await res.json();
 
   return {
     props:{
       food : data
     }
   }
 }