import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Name : </label>
        <input type="text" required placeholder='Enter Name '/>
        <br />
        <br />
        <label>Email : </label>
        <input type="text" required placeholder='Enter Email '/>
        <br />
        <br />
        <input type="button" value="Submit" />

      </form>
    </div>
  )
}

export default Form
