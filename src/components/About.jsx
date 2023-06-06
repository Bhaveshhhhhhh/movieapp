import React from 'react'
import me from "../assets/founder.jpeg"

const About = () => {
  return (
    <section className="about">
        <main>
            <h1>About Us</h1>
            <div>
                <article>
                    <div>
                        <img src={me} alt="founder" />
                        <h3>Bhavesh Choudhary</h3>
                    </div>
                    <p>I am Bhavesh Choudhary <b>Frontend Web Developer</b></p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About
