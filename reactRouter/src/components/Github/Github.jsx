import React from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()


  return (
    <>
    <div className='text-center m-4 bg-slate-600 text-yellow-100 p-4 text-3xl'>Github Followers:  {data.followers }</div>
    <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github

export const  githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/shivam38391")
    console.log("api fire");
    return response.json()
}