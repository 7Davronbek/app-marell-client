import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LeftLayout from './LeftLayout';

const Main = () => {
    return (
        <div className="main">
            <div className="rightSide">

                <LeftLayout>

                    <h5 className='mb-4'><span className="blue">Top</span> Men</h5>

                    <AliceCarousel className='myCarousel' responsive={{
                        0: {
                            items: 1
                        },
                        800: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }} mouseTracking autoPlay={true} autoPlayInterval={3500} disableDotsControls={true} infinite={true} className=''>

                        <div className="carouselWrap ">
                            <div className='myCard cursor '>
                                <div className="headerImg position-relative">
                                    <i><img src="/assets/image/main1.png" alt="" className='w-100 mainImg' /></i>
                                    <i className="position-absolute bg"><img src="/assets/image/main1bg.png" className='w-100' alt="" /></i>
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


                    <h5 className='mb-3 mt-4'><span className="pink">Top</span> Women</h5>

                    <AliceCarousel className='myCarousel' responsive={{
                        0: {
                            items: 1
                        },
                        1000: {
                            items: 3
                        }
                    }} mouseTracking autoPlay={true} autoPlayInterval={3800} disableDotsControls={true} infinite={true} className=''>

                        <div className="carouselWrap ">
                            <div className='myCard cursor '>
                                <div className="headerImg position-relative">
                                    <i><img src="/assets/image/main1.png" alt="" className='w-100 mainImg' /></i>
                                    <i className="position-absolute bg"><img src="/assets/image/main1bg.png" className='w-100' alt="" /></i>
                                </div>

                                <div className="bodyContent myRadius pinks">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <button className="btn topBtn white">Подробнее</button>
                                        <button className="btn topBtn pinkess">Купить</button>
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
                                            <button className="btn bottomBtn pinkes"><img src="/assets/icon/share.svg" alt="" /></button>
                                            <button className="btn bottomBtn pinkes"><img src="/assets/icon/star.svg" alt="" /></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="carouselWrap ">
                            <div className='myCard cursor '>
                                <div className="headerImg position-relative">
                                    <i><img src="/assets/image/main2.png" alt="" className='w-100 mainImg' /></i>
                                    <i className="position-absolute bg"><img src="/assets/image/main2bg.png" className='w-100' alt="" /></i>
                                </div>

                                <div className="bodyContent myRadius pinks">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <button className="btn topBtn white">Подробнее</button>
                                        <button className="btn topBtn pinkess">Купить</button>
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
                                            <button className="btn bottomBtn pinkes"><img src="/assets/icon/share.svg" alt="" /></button>
                                            <button className="btn bottomBtn pinkes"><img src="/assets/icon/star.svg" alt="" /></button>
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

                                <div className="bodyContent myRadius pinks">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <button className="btn topBtn white">Подробнее</button>
                                        <button className="btn topBtn pinkess">Купить</button>
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
                                            <button className="btn bottomBtn pinkes"><img src="/assets/icon/share.svg" alt="" /></button>
                                            <button className="btn bottomBtn pinkes"><img src="/assets/icon/star.svg" alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carouselWrap ">
                            <img src="/assets/image/main33.png" className='w-100' alt="" />
                        </div>

                    </AliceCarousel>

                </LeftLayout>

            </div>
        </div>
    )
}

export default Main
