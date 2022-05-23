import React from 'react'
import FullLayout from '../components/FullLayout'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Orders = () => {
    return (
        <>
            <FullLayout>
                <div className="orders">
                    <div className="row">
                        <div className="col-12">
                            <h1>18-20 марта</h1>
                        </div>
                        <div className="col-12 mt-3">

                            <Swiper
                                navigation={true}
                                slidesPerView={4}
                                centeredSlides={false}
                                spaceBetween={10}
                                grabCursor={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2.3,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <p>Собран</p>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <p>Отсортирован</p>
                                        </div>
                                    </div>


                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <p>Отсортирован</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <p>В пути</p>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <p>В пути</p>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <p>В пути</p>
                                        </div>
                                    </div>

                                </SwiperSlide>


                            </Swiper>
                        </div>

                        <div className="col-12 mt-5">
                            <h1>Полученные</h1>
                        </div>
                        <div className="col-12 mt-3">

                            <Swiper
                                navigation={true}
                                centeredSlides={false}
                                spaceBetween={10}
                                grabCursor={true}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.5,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                }}

                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <div className="d-flex align-items-center my-3">
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                            </div>
                                            <p>Отзыв <span><img src="/assets/icon/camera.svg" alt="" /></span></p>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <div className="d-flex align-items-center my-3">
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                            </div>
                                            <p>Отзыв <span><img src="/assets/icon/camera.svg" alt="" /></span></p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <div className="d-flex align-items-center my-3">
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                            </div>
                                            <p>Отзыв <span><img src="/assets/icon/camera.svg" alt="" /></span></p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <div className="d-flex align-items-center my-3">
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                            </div>
                                            <p>Отзыв <span><img src="/assets/icon/camera.svg" alt="" /></span></p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <div className="d-flex align-items-center my-3">
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                            </div>
                                            <p>Отзыв <span><img src="/assets/icon/camera.svg" alt="" /></span></p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="carouselWrap ">
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/orders.png" alt="" className="w-100" />
                                            </div>
                                            <div className="d-flex align-items-center my-3">
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                            </div>
                                            <p>Отзыв <span><img src="/assets/icon/camera.svg" alt="" /></span></p>
                                        </div>
                                    </div>

                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>
            </FullLayout>
        </>
    )
}

export default Orders