import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BenefitOffers = () => {
    return (
        <>
            <div className="benefitOffers">
                <div className="container">
                    <div className="row">
                        <div className="col-12 position-relative">
                            <h1>ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ</h1>
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
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                993: {
                                    // width: 768,
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>

                                <div className="carouselWrap ">
                                    <div className="cards">
                                        <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                        <i className="icon icon-heart"></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="carouselWrap ">
                                    <div className="cards">
                                        <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                        <i className="icon icon-heart"></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="carouselWrap ">
                                    <div className="cards">
                                        <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                        <i className="icon icon-heart"></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="carouselWrap ">
                                    <div className="cards">
                                        <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                        <i className="icon icon-heart"></i>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 web">
                            <div className="cards">
                                <img src="/assets/image/benefitOffers.png" alt="" className="w-100" />
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 overflow-auto">

                            <div className="ad">
                                <div></div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitOffers