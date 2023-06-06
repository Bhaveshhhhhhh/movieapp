import React from 'react'
import {AiFillInstagram , AiFillGithub , AiFillYoutube} from "react-icons/ai"


const Footer = () => {
  return (
<footer>
      <div>
        <h2>quabtech-movie-app</h2>
        <p>Here you can find. all your favorite movies.</p>
        <br />
        <em>we give attention to genuine feedback.</em>
        <strong>
          @all rights received quabtech-movie-app
        </strong>
        </div>
        <aside>
          <h4>FOLLOW ME ON.</h4>
          <a href="https://www.youtube.com/@Right-Master_Facts"><AiFillYoutube/></a>
          <a href="https://github.com/Bhaveshhhhhhh"><AiFillGithub/></a>
          <a href="nstagram.com/iam_bhaveshh___/"><AiFillInstagram/></a>
        </aside>   
    </footer>
  )
}

export default Footer
