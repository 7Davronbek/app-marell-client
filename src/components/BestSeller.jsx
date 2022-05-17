import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
                        <div className="col-12 position-relative ">
                            <div className="swiperBg">
                                <img src="/assets/image/bgSlider.png" alt="" />
                            </div>

                            <Swiper
                                navigation={true}
                                centeredSlides={false}
                                spaceBetween={10}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    // when window width is >= 640px
                                    640: {
                                        // width: 640,
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    767: {
                                        // width: 768,
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 768px
                                    993: {
                                        // width: 768,
                                        slidesPerView: 4,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                                <SwiperSlide>

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
                                </SwiperSlide>

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BestSeller