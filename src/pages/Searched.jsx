import React, {
  useState,
  useEffect
} from 'react'

import {
  useParams,
  Link
} from 'react-router-dom'

function Searched() {

  const [searched, setSearched] = useState([])

  let params = useParams()

      const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_API_KEY}&query=${name}`
        )
        const recipes = await data.json()
        setSearched(recipes.results)
      }

      useEffect(() => {
        getSearched(params.search)
      },[params.search])
  
  return (
    <section className="searched">
        <div className="searched__grid">
            {searched.map((searchedItem) => {
               return (
                  <Link to={'/recipes/'+searchedItem.id} className="searched__grid--card " key={searchedItem.id}>
                     <img src={searchedItem.image} alt={searchedItem.title} />
                     <h4>{searchedItem.title}</h4>
                  </Link>
               )
            })}
        </div>
    </section>
  )
}

export default Searched