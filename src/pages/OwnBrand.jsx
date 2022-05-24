import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FullLayout from '../components/FullLayout'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const OwnBrand = () => {
    const [card, setCard] = useState(false)

    return (
        <>
            <FullLayout>
                <div className="ownBrand">
                    <h1>Продавай не продавая вместе с MARELL </h1>
                    <h2>Marell.store  - это эффективный и выгодный канал продаж для вашего бренда.</h2>

                    <div className="row">
                        <div className="col-lg-5 overflow-hidden">

                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

                                    <div className="leftCards">

                                        <div className="cardsBody">
                                            <div className="d-flex align-items-center justify-content-around">

                                                <h3>НЕДОСТАТКИ</h3>
                                                <span><img src="/assets/image/brand.png" alt="" /></span>

                                            </div>
                                            <p>Придется зарабатывать пожизненно</p>
                                            <p>Не нужно продавать, но продаватся будет </p>
                                            <p>Придется забыть про поиск работы</p>
                                            <p>На 20% времени придёт 80% дохода</p>
                                            <p>Платформа доступна бесплатно и без смс </p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="leftCards">

                                        <div className="cardsBody">
                                            <div className="d-flex align-items-center justify-content-around">

                                                <h3>НЕДОСТАТКИ</h3>
                                                <span><img src="/assets/image/brand.png" alt="" /></span>

                                            </div>
                                            <p>Придется зарабатывать пожизненно</p>
                                            <p>Не нужно продавать, но продаватся будет </p>
                                            <p>Придется забыть про поиск работы</p>
                                            <p>На 20% времени придёт 80% дохода</p>
                                            <p>Платформа доступна бесплатно и без смс </p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="leftCards">

                                        <div className="cardsBody">
                                            <div className="d-flex align-items-center justify-content-around">

                                                <h3>НЕДОСТАТКИ</h3>
                                                <span><img src="/assets/image/brand.png" alt="" /></span>

                                            </div>
                                            <p>Придется зарабатывать пожизненно</p>
                                            <p>Не нужно продавать, но продаватся будет </p>
                                            <p>Придется забыть про поиск работы</p>
                                            <p>На 20% времени придёт 80% дохода</p>
                                            <p>Платформа доступна бесплатно и без смс </p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 myCol">

                            <h6>Анкета Бренда</h6>
                            <div className="rightCards">

                                <div className={`hidenCard ${card ? 'active' : ''}`}>
                                    <div className="frame"><img src="/assets/image/aframe.png" alt="" /></div>
                                    <i>Ваша заявка принята и находится на рассмотрении</i>
                                    <b>В ближайшее время с вами свяжется наш менеджер для уточнения деталей.</b>
                                </div>


                                <div className="d-flex align-items-center justify-content-around">
                                    <div>
                                        <label htmlFor="name">| НАЗВАНИЕ БРЕНДА</label>
                                        <input type="text" name="" id="name" placeholder='AMARELL' className='form-control' />
                                    </div>
                                    <div className='mx-2 w-25'>
                                        <label htmlFor="name2">| ВАШ ГОРОД</label>
                                        <input type="text" name="" id="name2" placeholder='AMARELL' className='form-control' />
                                    </div>
                                    <div>
                                        <label htmlFor="name3">| КАТЕГОРИЯ БРЕНДА</label>
                                        <select className='form-control' name="" id="name3">
                                            <option value="qwe">ОДЕЖДА</option>
                                            <option value="qwe">ОДЕЖДА</option>
                                            <option value="qwe">ОДЕЖДА</option>
                                            <option value="qwe">ОДЕЖДА</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-around">
                                    <div>
                                        <label htmlFor="name4">| АДРЕС ОФИСА</label>
                                        <input type="text" name="" id="name4" placeholder='Улица Роберта-Линкинштейна. дом 13 кв. 5' className='form-control' />
                                    </div>
                                    <div className='mx-2 '>
                                        <label htmlFor="name5">| ИНДЕКС</label>
                                        <input type="text" name="" id="name5" placeholder='109004' className='form-control' />
                                    </div>
                                    <div>
                                        <div className='mx-2 '>
                                            <label htmlFor="name6">| ТЕЛЕФОН</label>
                                            <input type="text" name="" id="name6" placeholder='+7-915-530-14-30' className='form-control' />
                                        </div>
                                    </div>
                                </div>

                                <div className="line"></div>

                                <div className="d-flex">
                                    <div>
                                        <label htmlFor="logo">| ЛОГОТИП </label>
                                        <div className="img">
                                            <i className="icon icon-photo"></i>
                                        </div>
                                    </div>
                                    <div className='w-75 ml-auto'>
                                        <label htmlFor="about">| РАССКАЖИТЕ О БРЕНДЕ</label>
                                        <textarea name="" className='form-control' id="about" placeholder='Давным Давно в далёкой далёкой галактике...'></textarea>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-around">
                                    <div>
                                        <label htmlFor="logo">| ЛУЧШИЙ ПРОДУКТ  </label>
                                        <div className="img">
                                            <i className="icon icon-photo"></i>
                                        </div>
                                        <div>
                                            <label htmlFor="qwe">| ОПИШИТЕ ПРОДУКТ</label>
                                            <input type="text" name="" id="qwe" placeholder='Давным Давно в далёкой далёкой галактике....' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='ml-3'>
                                        <label>| ПРИКРЕПИТЕ ФОТОГРАФИИ ВАШЕЙ ПРОДУКЦИИ </label>
                                        <p>| <span> не более 10 шт. </span></p>
                                        <div className="d-flex align-items-center justify-content-between my-2">
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                            <div className="mini"><i className="icon icon-photo"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <Link to='/admin/brands' onClick={() => setCard(true)} className="btn d-inline-block ml-auto mx-auto w-auto">РАЗМЕСТИТЬ БЕСПЛАТНО <span><img src="/assets/image/miniEye.png" alt="" /></span></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </FullLayout>
        </>
    )
}

export default OwnBrand