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
                            }} mouseTracking autoPlay={true} autoPlayInterval={3500} disableDotsControls={true} infinite={true} >

                                <div className="carouselWrap ">
                                    <div className="cards">

                                        <div className="cardsHeader">
                                            <img src="/assets/image/1.png" alt="" className="w-100" />
                                            <div className="icon icon-heart"></div>
                                        </div>
                                        <div className="cardsBody">
                                            <div className="top">
                                                <button className="btn first">Футболка “Marell” </button>
                                                <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                            </div>
                                            <div className="bottom">
                                                <div className=''>
                                                    <h5>RUB</h5>
                                                    <h4>1600 P</h4>
                                                </div>
                                                <div className=''>
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
                                    <div className="cards">

                                        <div className="cardsHeader">
                                            <img src="/assets/image/1.png" alt="" className="w-100" />
                                            <div className="icon icon-heart"></div>
                                        </div>
                                        <div className="cardsBody">
                                            <div className="top">
                                                <button className="btn first">Футболка “Marell” </button>
                                                <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                            </div>
                                            <div className="bottom">
                                                <div className=''>
                                                    <h5>RUB</h5>
                                                    <h4>1600 P</h4>
                                                </div>
                                                <div className=''>
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
                                    <div className="cards">

                                        <div className="cardsHeader">
                                            <img src="/assets/image/1.png" alt="" className="w-100" />
                                            <div className="icon icon-heart"></div>
                                        </div>
                                        <div className="cardsBody">
                                            <div className="top">
                                                <button className="btn first">Футболка “Marell” </button>
                                                <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                            </div>
                                            <div className="bottom">
                                                <div className=''>
                                                    <h5>RUB</h5>
                                                    <h4>1600 P</h4>
                                                </div>
                                                <div className=''>
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
                                    <div className="cards">

                                        <div className="cardsHeader">
                                            <img src="/assets/image/1.png" alt="" className="w-100" />
                                            <div className="icon icon-heart"></div>
                                        </div>
                                        <div className="cardsBody">
                                            <div className="top">
                                                <button className="btn first">Футболка “Marell” </button>
                                                <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                            </div>
                                            <div className="bottom">
                                                <div className=''>
                                                    <h5>RUB</h5>
                                                    <h4>1600 P</h4>
                                                </div>
                                                <div className=''>
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
                                    <div className="cards">

                                        <div className="cardsHeader">
                                            <img src="/assets/image/1.png" alt="" className="w-100" />
                                            <div className="icon icon-heart"></div>
                                        </div>
                                        <div className="cardsBody">
                                            <div className="top">
                                                <button className="btn first">Футболка “Marell” </button>
                                                <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                            </div>
                                            <div className="bottom">
                                                <div className=''>
                                                    <h5>RUB</h5>
                                                    <h4>1600 P</h4>
                                                </div>
                                                <div className=''>
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

                            </AliceCarousel>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BestSeller