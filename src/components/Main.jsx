import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import BenefitOffers from './BenefitOffers';
import BestSeller from './BestSeller';
import LeftLayout from './LeftLayout';
import Reviews from './Reviews';

const Main = () => {
    const [catalog, setCatalog] = useState(false)
    return (
        <div className="main">
            <div className="rightSide">

                <LeftLayout>

                    <div className="row">
                        <div className="col-12 zed">

                            <div className="searchWrap shadows positin-relative">
                                <div onClick={() => setCatalog(!catalog)} className="btn">

                                    ВСЕ <span><img src="/assets/icon/down.svg" alt="" /></span>


                                </div>
                                <input type="text" placeholder='Я ищу...' className="form-control" />
                                <p><span><img src="/assets/icon/search.svg" alt="" /></span> поиск</p>


                                <div onMouseLeave={() => setCatalog(false)} className={`buttonWrap ${catalog ? 'active' : ''}`}>
                                    <h6>Женская одежда</h6>
                                    <h6>Мужская одежда</h6>
                                    <h6>Канцтовары</h6>
                                    <h6>Продукты для здоровья</h6>
                                    <h6>Украшения</h6>
                                    <h6>Косметика</h6>
                                    <h6>Косметика</h6>
                                    <h6>Косметика</h6>
                                    <h6>Косметика</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 " >
                            <div className="mainHeader">

                                <AliceCarousel className='myCarousel' responsive={{
                                    0: {
                                        items: 1
                                    }
                                }} mouseTracking autoPlay={true} autoPlayInterval={3500} disableDotsControls={true} infinite={true} >

                                    <div className="carouselWrap ">
                                        <div className="myCard">
                                            <img src="/assets/image/mainHeader.png" alt="" className="w-100" />
                                        </div>
                                    </div>

                                </AliceCarousel>

                            </div>
                        </div>
                    </div>

                    <div className="mainHeader2">
                        <div className="row">
                            <div className="col-6">
                                <img src="/assets/image/mainHeader2.png" alt="" className="w-100" />
                            </div>
                            <div className="col-6">
                                <img src="/assets/image/mainHeader2.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>



                </LeftLayout>

                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="mainLine">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </div>

                <BestSeller />
                <BenefitOffers />
                <Reviews />

            </div>
        </div>
    )
}

export default Main
