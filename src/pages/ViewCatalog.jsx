import React, { useState } from 'react'
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from 'react-router-dom';
import LeftLayout from '../components/LeftLayout';

const ViewCatalog = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>

            <div className="partners position-relative">

                <LeftLayout>

                    <div className="row myRow">
                        <div className="col-lg-6 col-md-6 p-0 pl-lg-5 pr-lg-5">
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
                                    <i><img src="/assets/image/marellMini2.png" alt="" /></i>
                                </SwiperSlide>
                                <SwiperSlide className='topImg'>
                                    <img alt='marell' className='w-100' src="/assets/image/slider.png" />
                                    <i><img src="/assets/image/marellMini2.png" alt="" /></i>
                                </SwiperSlide>
                                <SwiperSlide className='topImg'>
                                    <img alt='marell' className='w-100' src="/assets/image/slider.png" />
                                    <i><img src="/assets/image/marellMini2.png" alt="" /></i>
                                </SwiperSlide>
                            </Swiper>

                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper "
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

                        <div className="col-lg-6 col-md-6">
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
                                <div className="col-lg-6">
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

                                <div className="col-lg-6 pt-lg-5 pt-3">
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

                        <div className="col-12">
                            <Nav tabs className=' myNavs nav-pills nav-justified'>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Описание
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Отзывы
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>

                                <TabPane tabId="1" className=''>
                                    <Row className='myRows mt-4'>
                                        <div data-aos='fade-right' className=" col-12 mb-2 px-2">
                                            <div className="cards">

                                                <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны быть описаны максимально подробно. Но сделанные на базе интернет-аналитики выводы неоднозначны и будут разоблачены. Разнообразный и богатый опыт говорит нам, что перспективное...</p>
                                                <h5>Вырез горловины	........................... округлый</h5>
                                                <h5>Декоративные элементы .............. принт</h5>
                                                <h5>Любимые герои	.............................. Другие персонажи Дисней</h5>
                                                <h5>Назначение ......................................	повседневная</h5>
                                                <h5>Особенности модели .....................	дышащий материал</h5>
                                                <h5>Покрой ...............................................	свободный</h5>
                                                <h5>Размер на модели ...........................	L</h5>
                                                <h5>Рисунок ..............................................	marvel</h5>

                                            </div>

                                            <Link to='#'>Подробнее...</Link>
                                        </div>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className='   '>
                                    <Row className='myRows mt-4'>
                                        <div className="col-lg-6 mb-lg-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="topCard">
                                                        <div>
                                                            <img src="/assets/icon/user.svg" alt="" />
                                                        </div>
                                                        <div>
                                                            <h2>Иван Иванов</h2>
                                                            <div className="d-flex align-items-center">
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center'>
                                                            <div className="d-flex align-items-center">
                                                                <span><img src="/assets/icon/like.svg" alt="" /></span>
                                                                <h5>0</h5>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span><img src="/assets/icon/dislike.svg" alt="" /></span>
                                                                <h5>0</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны быть описаны максимально подробно. Но сделанные на базе интернет-аналитики выводы неоднозначны и будут разоблачены. Разнообразный и богатый опыт говорит нам, что перспективное...</p>
                                                    <Link to='/catalog/view/reviews'>Подробнее...</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="topCard">
                                                        <div>
                                                            <img src="/assets/icon/user.svg" alt="" />
                                                        </div>
                                                        <div>
                                                            <h2>Иван Иванов</h2>
                                                            <div className="d-flex align-items-center">
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                                <i className="icon icon-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center'>
                                                            <div className="d-flex align-items-center">
                                                                <span><img src="/assets/icon/like.svg" alt="" /></span>
                                                                <h5>0</h5>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span><img src="/assets/icon/dislike.svg" alt="" /></span>
                                                                <h5>0</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны быть описаны максимально подробно. Но сделанные на базе интернет-аналитики выводы неоднозначны и будут разоблачены. Разнообразный и богатый опыт говорит нам, что перспективное...</p>
                                                    <Link to='/catalog/view/reviews'>Подробнее...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </TabPane>

                            </TabContent>
                        </div>
                    </div>


                </LeftLayout>

            </div >


        </>
    )
}

export default ViewCatalog
