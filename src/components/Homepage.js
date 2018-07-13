import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Homepage.css'
import PostTimeline from './PostTimeline';
const Homepage = ({ currentUser }) => {
  if(!currentUser.isAuthenticated) {
    return (
    <div className='text-container'>
        <div className='main-text'>
          <h2>Transparent Ed-Tech<br/>owned by academics.</h2>
        </div>
        <div className='description-text'>
        Gyde is a monetarily decentralized education platform centered around collaborations at all levels, and our mission is to connect networks of schools using locally driven data.
        </div>
        <div className='description-text mission-statement'>
        Specifically, our mission is two fold:<br/>
        <div className='bullet-points'>
        •To communicate research to professors in order to expand the realm of knowledge accessible to humanity.<br/>

        •To provide guidance to students in order to expand the realm of humanity having access to knowledge.<br/>
        </div>
        <div className='last-line-mission'>
        In doing so, we have the opportunity to become the first education platform to connect secondary students to college students, and college students to academic researchers.
        </div>
        </div>
        <div className='button-container'>
          <button className='button'><Link to='/signup'>Sign Up</Link></button>
          <button className='button'><Link to ='/signin'>Sign In</Link></button>
        </div>
    </div>
    )
  }
  return (
    <div className='post-container'>
      <PostTimeline/>
    </div>
  )




}

export default Homepage;
