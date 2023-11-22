import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, dolore.</p>
      <div>
        <input type="email" placeholder='Your Email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
