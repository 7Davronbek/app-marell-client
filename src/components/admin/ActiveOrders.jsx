import React from 'react'
import AdminLayout from './AdminLayout'

const ActiveOrders = () => {
    return (
        <>
            <AdminLayout>
                <div className="activeOrders">
                    <h1 className="h1">Заказы <span className="ml-4"><img src="/assets/icon/car.svg" alt="" /></span></h1>

                    <div className="row my-5">
                        <div className="col-12">
                            <h2>18-20 марта</h2>
                        </div>
                    </div>

                    <div className="row px-4">
                        <div className="col-4">
                            <div className="card myShadows" >
                                <div className="card-body">
                                    <img src="/assets/image/card2.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <h4>Собран</h4>
                        </div>
                        <div className="col-4">
                            <div className="card myShadows" >
                                <div className="card-body">
                                    <img src="/assets/image/card2.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <h4>Отсортирован</h4>
                        </div>
                        <div className="col-4">
                            <div className="card myShadows" >
                                <div className="card-body">
                                    <img src="/assets/image/card2.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <h4>В пути</h4>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-12">
                            <h2>Полученные</h2>
                        </div>
                    </div>

                    <div className="row px-4">

                        <div className="col-4">
                            <div className="card myShadows">
                                <div className="card-body">
                                    <img src="/assets/image/card2.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="starWrap">
                                <span className="icon icon-star pink"></span>
                                <span className="icon icon-star pink"></span>
                                <span className="icon icon-star pink"></span>
                                <span className="icon icon-star pink"></span>
                                <span className="icon icon-star pink"></span>
                            </div>

                            <div className="camera">
                                <h6>Отзыв</h6>
                                <span><img src="/assets/icon/camera.svg" alt="" /></span>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card myShadows">
                                <div className="card-body">
                                    <img src="/assets/image/card2.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="starWrap">
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                            </div>

                            <div className="camera">
                                <h6>Отзыв</h6>
                                <span><img src="/assets/icon/camera.svg" alt="" /></span>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card myShadows">
                                <div className="card-body">
                                    <img src="/assets/image/card2.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="starWrap">
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                                <span className="icon icon-star black"></span>
                            </div>

                            <div className="camera">
                                <h6>Отзыв</h6>
                                <span><img src="/assets/icon/camera.svg" alt="" /></span>
                            </div>
                        </div>

                    </div>

                </div>
            </AdminLayout>
        </>
    )
}

export default ActiveOrders