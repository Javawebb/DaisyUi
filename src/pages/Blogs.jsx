import React from 'react'
import { Link } from 'react-router-dom'

export const Blogs = ({ blogs }) => {

  return (
    <div>
      {
        blogs.map((blog, index) => {
          return (
            <div key={index}>
              <h1>{blog.title.substring(0,15).toUpperCase()}</h1>
              <p>{blog.body.substring(0,20)}...</p>
              <Link to={`${index + 1}`}>See More</Link>
              <hr/>
            </div>
          )
        })
      }
    </div>

  )
}