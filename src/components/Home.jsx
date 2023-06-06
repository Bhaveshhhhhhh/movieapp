import React from 'react'
import {motion} from "framer-motion"
import {Link} from "react-router-dom"

const Home = () => {
  const options = {
  initial:{x:"-100%", 
          opacity:0
        },
          whileInView:{
            x:0,
            opacity:1
          }
}

  return (
    <section className="home">
      <div>
        <motion.h1 {...options}>QuabTech <span>Movie App</span></motion.h1>
        <motion.p {...options} transition={{
          delay: 0.2}} >Book your movie, watch your world.</motion.p>
      </div>
      <Link to="/shows">
        Explore Shows
      </Link>
    </section>
  )
}

export default Home
