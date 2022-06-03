import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Popular() {
   
   const [popular, setPopular] = useState([])
    
   useEffect(() => {
      getPopular()
    },[])

   
   const getPopular = async () => {

      const check = localStorage.getItem('popular')

      if (check) {
         setPopular(JSON.parse(check))
      } else {
         const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_MY_API_KEY}&number=9`
         )
         const data = await api.json()

         localStorage.setItem('popular', JSON.stringify(data.recipes))

         setPopular(data.recipes)
         console.log(data.recipes)
      }
   }

   return (
      
      <section className='popular__recipe'>

         <h2>Popular Food Recipes</h2>

         <div className='popular__recipe--wrapper'>
            {popular.map((recipe) => {
               return(
                  <Link to={'/recipes/'+recipe.id} className="popular__recipe--card" key={recipe.id}>
                     <div className='popular__recipe--image'>
                        <img className="popular__recipe--pic" src={recipe.image} alt={recipe.title} />
                     </div>
                     <p className="popular__recipe--title">{recipe.title}</p>
                  </Link>
               );
               })}
         </div>

         
   </section>
      
  )
}

export default Popular