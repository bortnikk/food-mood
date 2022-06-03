import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Vegeterian() {
   
   const [vegeterian, setVegeterian] = useState([])
    
   useEffect(() => {
      getVegeterian()
    },[])

   
   const getVegeterian = async () => {

      const check = localStorage.getItem('vegeterian')

      if (check) {
         setVegeterian(JSON.parse(check))
      } else {
         const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_MY_API_KEY}&number=12&tags=vegetarian`
         )
         const data = await api.json()

         localStorage.setItem('vegeterian', JSON.stringify(data.recipes))

         setVegeterian(data.recipes)
         console.log(data.recipes)
      }
   }

   return (
      
      <section className='vegeterian__recipe'>

         <h2>Vegeterian Food Recipes</h2>

         <div className='vegeterian__recipe--wrapper'>
            {vegeterian.map((recipe) => {
               return(
                  <Link to={'/recipes/'+recipe.id} className="vegeterian__recipe--card" key={recipe.id}>
                     <div className='vegeterian__recipe--image'>
                        <img className="vegeterian__recipe--pic" src={recipe.image} alt={recipe.title}/>
                     </div>
                     <p className="vegeterian__recipe--title">{recipe.title}</p>
                  </Link>
               );
               })}
         </div>

         
   </section>
      
  )
}

export default Vegeterian