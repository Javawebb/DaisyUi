import React from 'react'

export const Authors = () => {
    const authors = ['Javokhir','Ollayor','Sabur','Shakhzod']
  return (
    <div>
        <ul>
        {authors.map((author,index) => <li key={index}>{author}</li>)}
        </ul>
    </div>
  )
}
