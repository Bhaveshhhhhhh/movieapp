import React, { useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({imgurl , id ,name})=>{
  const navigate = useNavigate();
  return(
    <section className='section'>
      <div className='allmovie'>
        <img src={imgurl} alt={id} />
        <h3>Movie Name : {name}</h3>
      <button onClick={()=>navigate("/summary")}>Summary : {name}</button>
      </div>
    </section>
  )
}


const Shows = () => {

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
                <Cart key={i.show.id} imgurl={i.show.image.medium} id={i.show.id} name={i.show.name} />
               ))
          }
    </div> 
  )
}

export default Shows
