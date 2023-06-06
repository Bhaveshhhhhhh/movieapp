import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie} from "react-icons/bi"
import {motion} from "framer-motion"

const Header = () => {
  return (
    <nav>
      <motion.div 
      initial={{x : "-100%"}}
      whileInView={{x:0}}>
        <BiCameraMovie/>
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  )
}

export default Header
