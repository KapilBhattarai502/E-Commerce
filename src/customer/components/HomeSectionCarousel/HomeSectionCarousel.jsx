import React from 'react'


const HomeSectionCarousel = () => {
  return (
    <div>
        <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1500}
    infinite
        
    />
    </div>
  )
}

export default HomeSectionCarousel