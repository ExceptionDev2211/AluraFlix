import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import CardSection from '../../components/CardSection/CardSection'

const Home = () => {
  return (
    <>
        <Header variantA="blue"/>
        <Banner/>
        <CardSection sectionName="front end"/>
        
    </>
  )
}

export default Home