import React from 'react'
import MainCarousel from '../../MainCarousel'
import HomeSectionCarousel from '../../../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../../../Data/menskurta'
import { mens_shirt } from '../../../../../../Data/mensshirts'



const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel sectionName={"Men's Kurta"} data={mens_kurta}/>
          <HomeSectionCarousel sectionName={"Men's Shoes"} data={mens_kurta}/>
          <HomeSectionCarousel sectionName={"Mens's Shirt"} data={mens_shirt}/>
          <HomeSectionCarousel sectionName={"Women's Saree"}data={mens_kurta}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
          
        </div>
    </div>
  )
}

export default Homepage