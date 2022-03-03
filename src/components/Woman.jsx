import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LeftLayout from './LeftLayout';
import { useHistory } from 'react-router-dom'

const Woman = () => {
    const history = useHistory()
    return (
        <div className='woman'>
        <LeftLayout>

            <div className="topNavbar myRadius d-flex align-items-center justify-content-between pinks">
                <div className="d-flex align-items-center leftBtn">
                    <button className={`btn ${history.location.pathname === '/woman' ? 'pinkShadow' : ''}`}>Категории</button>
                    <button className={`btn ${history.location.pathname === '/woman' ? 'pinkShadow' : ''}`}>Фильтр</button>
                    <button className={`btn ${history.location.pathname === '/woman' ? 'pinkShadow' : ''}`}>Коллекции</button>
                </div>
                <input type="text" placeholder='ПОИСК' className={`form-control ${history.location.pathname === '/woman' ? 'pinkText' : ''}`} />
            </div>

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
                                    <button className="btn bottomBtn pinkes"><img src="/assets/icon/share.svg" alt="" /></button>
                                    <button className="btn bottomBtn pinkes"><img src="/assets/icon/star.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </AliceCarousel>

            <h6 className="title myRadius mb-2 px-1 pinks w-25 text-center mt-4">Новинки</h6>
            <div className="newsContent d-flex align-items-center justify-content-between">
                <i className='mr-3'><img src="/assets/image/main33.png" alt="" className="w-100" /></i>
                <i className='mr-3'><img src="/assets/image/main33.png" alt="" className="w-100" /></i>
                <i><img src="/assets/image/main33.png" alt="" className="w-100" /></i>
            </div>
        </LeftLayout>
        </div>
    )
}

export default Woman
