import React from 'react'
import AdminLayout from './AdminLayout'

const PlasticCard = () => {
    return (
        <>
            <AdminLayout>
                <div className="plasticCard">
                    <h1 className='d-flex align-items-center'>Мои карты <span className="ml-4"><img src="/assets/icon/cart.svg" alt="" /></span></h1>

                    <div className="myCard">
                        <div className="img"><img src="/assets/image/mir.png" alt="" /></div>
                        <div>
                            <h2>123123******123</h2>
                            <h3>Основная карта</h3>
                        </div>
                    </div>

                    <div className="myCard">
                        <div className="img"><img src="/assets/image/visa.png" alt="" /></div>
                        <div>
                            <h2>123123******123</h2>
                            <h3 className='secondary'>Основная карта</h3>
                        </div>
                    </div>

                    <div className="cardLast">

                        <div className="card">
                            <div className="card-body">
                                <h5><span className="mr-3"><img src="/assets/icon/card-black.svg" alt="" /></span> Новая карта</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between">

                            <div className="card last">
                                <div className="card-body">
                                    <h5>Срок действия</h5>
                                </div>
                            </div>

                            <div className="card last">
                                <div className="card-body">
                                    <h5>CVV/CVC</h5>
                                </div>
                            </div>
                        </div>
                        

                        <div className="card last pink mx-auto">
                                <div className="card-body">
                                    <h5>Привязать карту</h5>
                                </div>
                            </div>

                    </div>

                </div>
            </AdminLayout>
        </>
    )
}

export default PlasticCard