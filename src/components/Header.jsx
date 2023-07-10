import React from 'react'

const Header = ({title}) => {
  return (
    <div className='text-center text-white bg-sky-900 py-5'>
        <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  )
}

export default Header