import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const BestSeller = () => {
    return (
        <>
            <div className="bestSeller">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>ТОП ПРОДАЖ</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <AliceCarousel className='myCarousel' responsive={{
                                0: {
                                    items: 1
                                },
                                800: {
                                    items: 2
                                },
                                1200: {
                                    items: 4
                                }
                            }} mouseTracking autoPlay={false} autoPlayInterval={3500} disableDotsControls={true} infinite={true} >

                                <div className="carouselWrap ">
                                    <div className="cards">

                                        <div className="cardsHeader">
                                            <img src="/assets/image/1.png" alt="" className="w-100" />
                                            <div className="icon icon-heart"></div>
                                        </div>
                                        <div className="cardsBody">
                                            <div className="top">
                                                <button className="btn">Футболка “Marell” </button>
                                                <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                            </div>
                                            <div className="bottom">
                                                <div className='d-flex align-items-center'>
                                                    <h5>RUB</h5>
                                                    <h4>1600 P</h4>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <h5>AMARELL</h5>
                                                    <h4>94</h4>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <i className="icon icon-star mr-1"></i>
                                                    <i className="icon icon-star mr-1"></i>
                                                    <i className="icon icon-star mr-1"></i>
                                                    <i className="icon icon-star mr-1"></i>
                                                    <i className="icon icon-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carouselWrap ">
                                    <div className='myCard cursor '>
                                        <div className="headerImg position-relative">
                                        </div>

                                        <div className="bodyContent myRadius">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <button className="btn topBtn white">Подробнее</button>
                                                <button className="btn topBtn">Купить</button>
                                            </div>

                                            <div className="bottomContent d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h6>RUB</h6>
                                                    <h5>10.5k</h5>
                                                </div>

                                                <div>
                                                    <h6>BTC</h6>
                                                    <h5>94</h5>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <button className="btn bottomBtn first"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                                    <button className="btn bottomBtn"><img src="/assets/icon/share.svg" alt="" /></button>
                                                    <button className="btn bottomBtn"><img src="/assets/icon/star.svg" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="carouselWrap ">
                                    <img src="/assets/image/main33.png" className='w-100' alt="" />
                                </div>

                                <div className="carouselWrap ">
                                    <div className='myCard cursor '>
                                        <div className="headerImg position-relative">
                                            <i><img src="/assets/image/main1.png" alt="" className='w-100 mainImg' /></i>
                                            <i className="position-absolute bg"><img src="/assets/image/main1bg.png" className='w-100' alt="" /></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="carouselWrap ">
                                    <div className='myCard cursor '>
                                        <div className="headerImg position-relative">
                                            <i><img src="/assets/image/main2.png" alt="" className='w-100 mainImg' /></i>
                                            <i className="position-absolute bg"><img src="/assets/image/main2bg.png" className='w-100' alt="" /></i>
                                        </div>

                                        <div className="bodyContent myRadius">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <button className="btn topBtn white">Подробнее</button>
                                                <button className="btn topBtn">Купить</button>
                                            </div>

                                            <div className="bottomContent d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h6>RUB</h6>
                                                    <h5>10.5k</h5>
                                                </div>

                                                <div>
                                                    <h6>BTC</h6>
                                                    <h5>94</h5>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <button className="btn bottomBtn first"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                                    <button className="btn bottomBtn"><img src="/assets/icon/share.svg" alt="" /></button>
                                                    <button className="btn bottomBtn"><img src="/assets/icon/star.svg" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carouselWrap ">
                                    <img src="/assets/image/main33.png" className='w-100' alt="" />
                                </div>

                            </AliceCarousel>

                        </div>
                    </div>
                </div>
            </div>

            <div className="vh-100"></div>
        </>
    )
}

export default BestSeller