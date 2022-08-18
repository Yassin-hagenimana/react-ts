import React from 'react'
import "./styles.css"
function TextField() {
  return (
    <form className='input'>
 <input type="text" placeholder='Enter a Task' className='input_box'/>
   <button type='submit' className='input_submit'>
    Go</button>
    </form>
  )
}

export default TextField