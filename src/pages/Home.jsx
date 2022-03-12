import React from 'react'
import { MainPost } from '../components/MainPost'

export const Home = ({posts}) => {
  return (
    <div className='container mx-auto mt-10'>
      <MainPost post={posts[0]}/>
      <MainPost post={posts[1]}/>
      <MainPost post={posts[2]}/>
    </div>
  )
}
