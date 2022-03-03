import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LeftLayout from './LeftLayout';

const Man = () => {
    return (
        <>
            <div className="man">
                
                <LeftLayout>

                    <div className="topNavbar myRadius d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center leftBtn">
                            <button className="btn">Категории</button>
                            <button className="btn">Фильтр</button>
                            <button className="btn">Коллекции</button>
                        </div>
                        <input type="text" placeholder='ПОИСК' className='form-control' />
                    </div>

                    <h5 className='mb-4'><span className="blue">Top</span> Men</h5>

                    <AliceCarousel className='myCarousel' responsive={{
                        450: {
                            items: 1
                        },
                        480: {
                            items: 2
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

                                    <div className="d-flex align-items-center justify-content-between">
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

                                    <div className="d-flex align-items-center justify-content-between">
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
                                    <i><img src="/assets/image/main1.png" alt="" className='w-100 mainImg' /></i>
                                    <i className="position-absolute bg"><img src="/assets/image/main1bg.png" className='w-100' alt="" /></i>
                                </div>

                                <div className="bodyContent myRadius">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <button className="btn topBtn white">Подробнее</button>
                                        <button className="btn topBtn">Купить</button>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between">
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

                                    <div className="d-flex align-items-center justify-content-between">
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


                    </AliceCarousel>


                    <h6 className="myRadius title px-1 mb-2 w-25 text-center mt-4">Новинки</h6>
                    <div className="newsContent d-flex align-items-center justify-content-between">
                        <i className='mr-3'><img src="/assets/image/main33.png" alt="" className="w-100" /></i>
                        <i className='mr-3'><img src="/assets/image/main33.png" alt="" className="w-100" /></i>
                        <i><img src="/assets/image/main33.png" alt="" className="w-100" /></i>
                    </div>

                </LeftLayout>

            </div>
        </>
    )
}

export default Man
