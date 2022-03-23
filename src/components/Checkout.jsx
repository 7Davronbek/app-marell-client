import React from 'react'
import LeftLayout from './LeftLayout'

const Checkout = () => {
    return (
        <>
            <LeftLayout>
                <div className="checkout">
                    <div className="row">
                        <div className="col-lg-6">
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

                        <div className="col-lg-6">
                            <div className="cardsRight">
                                <div className="cardsBody">
                                    <h2>Способ оплаты</h2>
                                    <div className="line"></div>
                                    <button className="btn"><span><img src="/assets/image/visaCart.png" alt="" /></span> Карта</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LeftLayout>
        </>
    )
}

export default Checkout