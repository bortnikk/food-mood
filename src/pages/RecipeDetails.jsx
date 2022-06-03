import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails() {

   const params = useParams()

   const [details, setDetails] = useState({})
   
   useEffect(() => {
      fetchDetails(params.id)
   },[params.id])

   const fetchDetails = async () => {
      const data = await fetch(`
         https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_MY_API_KEY}
      `)
      const dataResults = await data.json()
      setDetails(dataResults)
      console.log(dataResults)
   }

  return (
     <section className="recipe__details">
        <div className="recipe__details--wrapper">
           <div className="recipe__details--container">
               <img src={details.image} alt={details.description} />
               <h6>{details.title}</h6>
           </div>
           <p>{details.instructions}</p>
           <p>{details.cheap ? 'Expensive' : 'Cheap'}</p>
           <p>{details.dairyFree ? 'non Dairy Free' : 'Dairy Free' }</p>
           <p>{details.glutenFree ? 'non Gluten Free' : 'Gluten Free' }</p>
           <p>{details.vegetarian ? 'Vegan' : 'not Vegan' }</p>
           <a href={details.sourceUrl} target="_blank" rel="noreferrer">
              for the full infromation visit {`<`}
           </a>
        </div>
    </section>
  )
}

export default RecipeDetails