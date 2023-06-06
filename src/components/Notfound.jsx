import React from 'react'
import {MdError} from "react-icons/md"
import {Link} from "react-router-dom"

const Notfound = () => {
  return(
      <section className="notfound">
        <main>
            <div>
                <MdError/>
                <h1>404</h1>
            </div>
            <p>Page not found, click below to go to Home Page.</p>
            <Link to="/">Go To Home</Link>
        </main>
    </section>
  )
}

export default Notfound
