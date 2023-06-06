import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'


const Cart1 = ({imgurl , id ,name , summary})=>{
  const navigate = useNavigate();
  return(
    <section className='section'>
      <div className='allmovie'>
        <img src={imgurl} alt={id} />
        <h3>Movie Name : {name}</h3>
        <p>{summary}</p>
      <button onClick={()=>navigate("/form")}>Book Ticket</button>
      </div>
    </section>
  )
}

const Summary = () => {

  const [show, setShows] = useState([])

  const fetchUserData = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setShows(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
    <div>
          {
            show.map((i)=>(
                <Cart1 key={i.show.id} imgurl={i.show.image.medium} id={i.show.id} name={i.show.name} summary = {i.show.summary}/>
               ))
          }
    </div> 


    // <div className='summary'>
    //       <h3 className='heading'>All American</h3>
    //       <p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger</p>
    //       <Link to="/form"><button>Book Ticket</button></Link>
    // </div>
  )
}

export default Summary
