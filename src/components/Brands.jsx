import React, { useState } from 'react'
import LeftLayout from './LeftLayout'
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Brands = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>

            <div className="partners position-relative">

                <LeftLayout>

                    <div className="row myRow">
                        <div className="col-6">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide className='topImg'>
                                    <img alt='marell' className='w-100' src="/assets/image/slider.png" />
                                </SwiperSlide>
                                <SwiperSlide className='topImg'>
                                    <img alt='marell' className='w-100' src="/assets/image/slider.png" />
                                </SwiperSlide>
                                <SwiperSlide className='topImg'>
                                    <img alt='marell' className='w-100' src="/assets/image/slider.png" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img alt='marell' className='w-100' src="/assets/image/sliderMini.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='marell' className='w-100' src="/assets/image/sliderMini.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='marell' className='w-100' src="/assets/image/sliderMini.png" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="col-6">
                            <div className="top">
                                <div>
                                    <h1>Футболка “Marell” </h1>
                                    <div className="d-flex align-items-center mt-1">
                                        <i className="icon mr-1 icon-star"></i>
                                        <i className="icon mr-1 icon-star"></i>
                                        <i className="icon mr-1 icon-star"></i>
                                        <i className="icon mr-1 icon-star"></i>
                                        <i className="icon mr-1 icon-star"></i>
                                        <h2>3.5</h2>
                                    </div>
                                </div>
                                <span><img src="/assets/icon/export.svg" alt="" /></span>

                            </div>
                        </div>
                    </div>





                    {/* 
            <div className="row pt-5 ">
                <div className="col-lg-4 col-6 mb-4">
                    <div className="myCard myRadius pinks">
                        <div className="cardHeader">
                            <i><img src="/assets/image/main2.png" className='w-100' alt="" /></i>
                        </div>

                        <div className="cardBody">
                            <button className="btn topBtn">Подробнее</button>

                            <div className="d-flex align-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6>Категория</h6>
                                    <h5>Косметика</h5>
                                </div>

                                <div className="d-flex align-center bottomBtn">
                                    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-6 mb-4">
                    <div className="myCard myRadius pinks">
                        <div className="cardHeader">
                            <i><img src="/assets/image/main2.png" className='w-100' alt="" /></i>
                        </div>

                        <div className="cardBody">
                            <button className="btn topBtn">Подробнее</button>

                            <div className="d-flex align-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6>Категория</h6>
                                    <h5>Косметика</h5>
                                </div>

                                <div className="d-flex align-center bottomBtn">
                                    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-6 mb-4">
                    <div className="myCard myRadius pinks">
                        <div className="cardHeader">
                            <i><img src="/assets/image/main2.png" className='w-100' alt="" /></i>
                        </div>

                        <div className="cardBody">
                            <button className="btn topBtn">Подробнее</button>

                            <div className="d-flex align-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6>Категория</h6>
                                    <h5>Косметика</h5>
                                </div>

                                <div className="d-flex align-center bottomBtn">
                                    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-6 mb-4">
                    <div className="myCard myRadius pinks">
                        <div className="cardHeader">
                            <i><img src="/assets/image/main2.png" className='w-100' alt="" /></i>
                        </div>

                        <div className="cardBody">
                            <button className="btn topBtn">Подробнее</button>

                            <div className="d-flex align-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6>Категория</h6>
                                    <h5>Косметика</h5>
                                </div>

                                <div className="d-flex align-center bottomBtn">
                                    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-6 mb-4">
                    <div className="myCard myRadius pinks">
                        <div className="cardHeader">
                            <i><img src="/assets/image/main2.png" className='w-100' alt="" /></i>
                        </div>

                        <div className="cardBody">
                            <button className="btn topBtn">Подробнее</button>

                            <div className="d-flex align-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6>Категория</h6>
                                    <h5>Косметика</h5>
                                </div>

                                <div className="d-flex align-center bottomBtn">
                                    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-6 mb-4">
                    <div className="myCard myRadius pinks">
                        <div className="cardHeader">
                            <i><img src="/assets/image/main2.png" className='w-100' alt="" /></i>
                        </div>

                        <div className="cardBody">
                            <button className="btn topBtn">Подробнее</button>

                            <div className="d-flex align-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h6>Категория</h6>
                                    <h5>Косметика</h5>
                                </div>

                                <div className="d-flex align-center bottomBtn">
                                    <button className="btn mr-2"><img src="/assets/icon/circle3.svg" alt="" /></button>
                                    <button className="btn mr-2"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

                </LeftLayout>

            </div>


        </>
    )
}

export default Brands
