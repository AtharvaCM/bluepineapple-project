import React from 'react'
import CricSubNavBar from '../../Components/Navbar/CricSubNavBar'
import CricFeaturedMatches from './CricFeaturedMatches'
import CricketMainContent from './CricketMainContent'

function Cricket() {
  return (
    <>
      <CricSubNavBar />
      <CricFeaturedMatches></CricFeaturedMatches>
      <CricketMainContent></CricketMainContent>
    </>

  )
}

export default Cricket