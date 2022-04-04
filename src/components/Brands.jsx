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

                            <div className="row">
                                <div className="col-6">
                                    <div className="wrap">
                                        <div className=''>
                                            <h6>RUB</h6>
                                            <h3>1600 P</h3>
                                        </div>
                                        <div>
                                            <h6>AMARELL</h6>
                                            <h3>94</h3>
                                        </div>
                                    </div>

                                    <h4>Таблица размеров</h4>
                                    <div className="buttonWrap">
                                        <button className="btn">XS</button>
                                        <button className="btn">S</button>
                                        <button className="btn">M</button>
                                        <button className="btn">L</button>
                                        <button className="btn">XL</button>
                                    </div>
                                    <h5>Артикул: 585858</h5>
                                    <div className="d-flex align-items-center justify-content-between   ">
                                        <button className="btn basket">В корзину</button>
                                        <i><img src="/assets/icon/love.svg" alt="" /></i>
                                    </div>
                                </div>

                                <div className="col-6 pt-5">
                                    <h4 className='w-50 mx-auto text-center d-block'>Цвета</h4>
                                    <div className="colorWrap">
                                        <div className="left"><img src="/assets/icon/left.svg" alt="" /></div>
                                        <button className="btn"></button>
                                        <button className="btn"></button>
                                        <button className="btn"></button>
                                        <button className="btn"></button>
                                        <button className="btn"></button>
                                        <div className="right"><img src="/assets/icon/right.svg" alt="" /></div>
                                    </div>
                                    <p><b>Состав:</b> хлопок 80%, полиэстер 20%</p>
                                </div>
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
