import React from 'react'
import { Link } from 'react-router-dom'

const dropdown = ({ isOpen, toggle }) => {
  return (
    <div 
       className={
           isOpen 
              ? "grid grid-rows-4 text-center items-center bg-blue-500" 
              : "hidden"
        } 
        onClick={toggle}
    >
            <Link className="p-4" to="/">Home</Link>
    </div>
  )
}

export default dropdown
