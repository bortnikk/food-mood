import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function TodaysFavorite() {
   
   const [favorite, setFavorite] = useState([])
    
   useEffect(() => {
      getFavorite()
    },[])

   
   const getFavorite = async () => {

      const check = localStorage.getItem('favorite')

      if (check) {
         setFavorite(JSON.parse(check))
      } else {
         const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_MY_API_KEY}&number=24`
         )
         const data = await api.json()

         localStorage.setItem('favorite', JSON.stringify(data.recipes))

         setFavorite(data.recipes)
         console.log(data.recipes)
      }
   }

   return (
      <section className='favorite__recipe'>
         <h2>Today's Favorite</h2>
            <Splide
                  className='favorite__recipe--wrapper'
                  options={{
                     perPage: 3,
                     pagination: false,
                     gap: '10px',

                     perMove:3,
                     arrows: false,
                     drag: 'free',
                     autoplay: true,
                     pause: false,
                     pauseOnHover: true,
                     lazyLoad: true,

               }}>
                     {favorite.map((recipe) => {
                        return (
                           <SplideSlide key={recipe.id}>
                              <Link to={'/recipes/'+recipe.id} className="favorite__recipe--card" key={recipe.id}>
                                 <div className='favorite__recipe--image'>
                                    <img className="favorite__recipe--pic" src={recipe.image} alt={recipe.title}/>
                                 </div>
                                 <p className="favorite__recipe--title">{recipe.title}</p>
                                 <div className='gradient'></div>
                              </Link>
                           </SplideSlide>
                        );
                     })}
               </Splide>
      </section>
  )
}

export default TodaysFavorite