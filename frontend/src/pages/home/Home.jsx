import React from 'react'
import Banner from './Banner.jsx';
import TopSellers from './TopSellers.jsx';
import Recommened from './Recommened.jsx';
import News from './News.jsx';


const Home = () => {
  return (
    <>
         <Banner />
         <TopSellers/>
         <Recommened />
         <News/>

    </>
  )
}

export default Home;