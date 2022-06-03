import React, { useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'

import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'

function Navbar() {

  const [input, setInput] = useState('')
  const navigate = useNavigate()
  
  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/'+input)
  }

  return (
     <nav>
      <div className="navbar__input">

              <NavLink className='h1' to='/'>
                <h1>Food<span>Mood</span></h1>
              </NavLink>
              
        <form
          className='form'
          onSubmit={submitHandler}

                >
                <FaSearch className="input__img"/>
                <input
                  onChange={(e)=>setInput(e.target.value)}
                  type="text"
                  value={input}
                  placeholder='SEARCH RECIPES HERE'
                />
              </form>
        
        </div>
         <ul className='navbar__buttons'>
           <li>
               <NavLink className="navbar__link" to='/cuisine/italian'>
                 <FaPizzaSlice />
                 <h3>Italian</h3>
               </NavLink>
           </li>
           <li>
               <NavLink className="navbar__link" to='/cuisine/american'>
                 <FaHamburger />
                 <h3>American</h3>
               </NavLink>
           </li>
           <li>
               <NavLink className="navbar__link" to='/cuisine/thai'>
                 <GiNoodles />
                 <h3>Thai</h3>
               </NavLink>
           </li>
           <li>
               <NavLink className="navbar__link" to='/cuisine/chinese'>
                 <GiChopsticks />
                 <h3>Chinese</h3>
               </NavLink>
           </li>
         </ul>
    </nav>
  )
}

export default Navbar