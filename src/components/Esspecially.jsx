import React from 'react'
import AliceCarousel from 'react-alice-carousel';

const Esspecially = () => {
  return (
    <>
      <div className="esspecially">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Специально для вас </h2>
            </div>
            <div className="col-12">

              <AliceCarousel className='myCarousel' responsive={{
                0: {
                  items: 6
                }
              }} mouseTracking autoPlay={true} autoPlayInterval={3500} disableDotsControls={true} infinite={true} >

                <div className="carouselWrap ">
                  <div className="myCard">
                    <img src="/assets/image/catalog.png" alt="" className="w-100" />
                    <h5>Обувь</h5>
                  </div>
                </div>
                <div className="carouselWrap ">
                  <div className="myCard">
                    <img src="/assets/image/catalog.png" alt="" className="w-100" />
                    <h5>Канцтовары</h5>
                  </div>
                </div>
                <div className="carouselWrap ">
                  <div className="myCard">
                    <img src="/assets/image/catalog.png" alt="" className="w-100" />
                    <h5>Для здоровья</h5>
                  </div>
                </div>
                <div className="carouselWrap ">
                  <div className="myCard">
                    <img src="/assets/image/catalog.png" alt="" className="w-100" />
                    <h5>Украшения</h5>
                  </div>
                </div>
                <div className="carouselWrap ">
                  <div className="myCard">
                    <img src="/assets/image/catalog.png" alt="" className="w-100" />
                    <h5>Косметика</h5>
                  </div>
                </div>
                <div className="carouselWrap ">
                  <div className="myCard">
                    <img src="/assets/image/catalog.png" alt="" className="w-100" />
                    <h5>Мужская</h5>
                  </div>
                </div>

              </AliceCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Esspecially