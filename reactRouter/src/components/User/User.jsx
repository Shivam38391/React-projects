import React from 'react'

import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()

  return (
    <div>
        <h1 className='bg-gray-700  text-white rounded-sm p-4' >User : { userid }</h1>
    </div>
  )
}

export default User