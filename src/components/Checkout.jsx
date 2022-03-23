import React from 'react'
import LeftLayout from './LeftLayout'

const Checkout = () => {
    return (
        <>
            <LeftLayout>
                <div className="checkout">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cardsLeft">
                                <div className="cardsBody">
                                    <div className="inputWrap">
                                        <input type="text" placeholder='Адрес' className="form-control" />
                                        <i><img src="/assets/icon/edit.svg" alt="" /></i>
                                    </div>
                                    <p>Бесплатная доставка по России</p>
                                </div>

                                <div className="line"></div>

                                <div className="bottomCards">
                                    <h5>18-20 марта</h5>
                                    <h6>6 товаров</h6>
                                    <div className="d-flex align-items-center">
                                        <div className="mr-3"><img src="/assets/image/left.png" alt="" /></div>
                                        <div><img src="/assets/image/right.png" alt="" /></div>
                                    </div>
                                </div>

                                <div className="bottom">
                                    <div className="cards shadows">
                                        <img src="/assets/image/checkout.png" alt="" className="w-100" />
                                    </div>
                                    <div className="cards shadows">
                                        <img src="/assets/image/checkout.png" alt="" className="w-100" />
                                    </div>
                                    <div className="cards shadows">
                                        <img src="/assets/image/checkout.png" alt="" className="w-100" />
                                    </div>
                                </div>

                                <div className="bottom mt-3">
                                    <div className="cards shadows">
                                        <img src="/assets/image/checkout.png" alt="" className="w-100" />
                                    </div>
                                    <div className="cards shadows">
                                        <img src="/assets/image/checkout.png" alt="" className="w-100" />
                                    </div>
                                    <div className="cards shadows">
                                        <img src="/assets/image/checkout.png" alt="" className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="cardsRight">
                                <div className="cardsBody">
                                    <h2>Способ оплаты</h2>
                                    <div className="line"></div>
                                    <button className="btn"><span><img src="/assets/image/visaCart.png" alt="" /></span> <h6>Карта</h6> <span></span></button>
                                    <button className="btn"><span><img src="/assets/image/eyeMini.png" alt="" /></span> <h1> AMARELL</h1> <span></span></button>

                                    <div className="bottomLine"></div>

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <b>6 товаров на сумму</b>
                                        <h3>9 600 P</h3>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <b>6 товаров на сумму</b>
                                        <h3>756 <span className="ml-2"><img src="/assets/image/eyeMini.png" alt="" /></span></h3>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <b>Скидка</b>
                                        <h3>0 P </h3>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <b>Доставка</b>
                                        <h3><span>Бесплатно</span></h3>
                                    </div>

                                    <div className="line"></div>

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h1>Доставка</h1>
                                        <h3>9 600 P</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <span className="mr-2"><img src="/assets/image/check.png" alt="" /></span>
                                <h2>Согласен с условиями Правил пользования торговой площадкой и правилами возврата товара</h2>
                            </div>

                            <button className="btn bottomBtn">Оплатить</button>
                        </div>
                    </div>
                </div>
            </LeftLayout>
        </>
    )
}

export default Checkout