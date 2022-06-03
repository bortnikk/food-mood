import React, { useState , useEffect } from 'react'
// import { motion } from 'framer-motion'
import {
   Link,
   useParams
} from 'react-router-dom'

function Cuisine() {

   const [cuisine, setCuisine] = useState([])
   let params = useParams()

   const getCuisine = async (name) => {
      const data = await fetch(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_API_KEY}&cuisine=${name}`
      )
      const recipes = await data.json()
      setCuisine(recipes.results)
   }

   useEffect(() => {
      getCuisine(params.type) 
      console.log(params.type)
   },[params.type])

   return (
      <section className="nav__pages" >
         <div className="grid">
            {cuisine.map((item) => {
               return (
                  <Link to='/' className="grid__card" key={item.id}>
                     <img src={item.image} alt={item.title} />
                     <h4>{item.title}</h4>
                  </Link>
               )
            })}
         </div>

      </section>
  )
}

export default Cuisine