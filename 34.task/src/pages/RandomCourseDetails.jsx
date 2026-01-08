import React from 'react'
import { useParams } from 'react-router-dom'

const RandomCourseDetails = () => {

  const params = useParams()

  return (
    <div className='RandomCourseDetails-wrapper flex justify-center'>
      <h1 className='underline text-4xl text-red-500 mt-2'>{params.id} Course Details Page</h1>
    </div>
  )
}

export default RandomCourseDetails