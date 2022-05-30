import LeftLayout from '../components/LeftLayout'
import React, { useEffect, useState } from 'react'
import EyeAnimation from '../components/EyeAnimation';

const Brands = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  return (
    <>

      {isLoading ? (
        <div className="loader">
          <div className={`eye cursor text-center `}>
            <EyeAnimation />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="brands">

        <LeftLayout>

          <div className="row">
            <div className="col-12 zed">

              <div className="searchWrap shadows positin-relative">
                <input type="text" placeholder='Я ищу...' className="form-control" />
                <p><span><img src="/assets/icon/search.svg" alt="" /></span> Поиск </p>
              </div>

            </div>
          </div>

          <div className="row mt-lg-5 mt-4 justify-content-lg-between justify-content-around ">
            <div className="d-flex flex-column myWrap">
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column myWrap">
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  flex-column myWrap">
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex lastWrap flex-column myWrap">
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="cardsTop">
                  <i className="icon icon-heart"></i>
                  <img src="/assets/image/brandCard.png" className='w-100' alt="" />
                </div>
                <div className="cardsBody">
                  <h5>MARELL</h5>
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                    <i className="icon icon-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </LeftLayout>

      </div>

    </>
  )
}

export default Brands