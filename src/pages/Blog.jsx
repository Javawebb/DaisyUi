import React from 'react'
import { useParams } from 'react-router-dom'

export const Blog = ({blogs}) => {

    const {id} = useParams()
    const blog =blogs[id - 1]

  return (
    <div>
        <h1>{blog.title.toUpperCase()}</h1>
        <p>{blog.body}</p>
    </div>
  )
}
