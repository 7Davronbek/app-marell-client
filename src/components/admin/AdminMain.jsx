import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from './AdminLayout'

const AdminMain = () => {
    return (
        <>
            <AdminLayout>
                <div className="adminMain">
                    <div className="row align-items-center ">

                        <div className="col-5 h-100">

                            <Link to='/admin-marell/active-orders' className="myCard adminCard h-100">
                                <div>
                                    <h5>Активные заказы</h5>
                                    <p>Ближайшая: не ожидается</p>
                                </div>
                                <span><img src="/assets/icon/car.svg" alt="" /></span>
                            </Link>
                        </div>
                        <div className="col-3 px-1 h-100">
                            <Link to='/admin-marell/career' className="myCard adminCard h-100">
                                <div>
                                    <h5>Активные заказы</h5>
                                </div>
                                <span><h5 className="pink">2%</h5></span>
                            </Link>
                        </div>

                        <div className="col-4 h-100">

                            <Link to='/admin-marell/balance-operations' className="myCard adminCard h-100">
                                <div>
                                    <h5>Операции с балансом</h5>
                                </div>
                                <span><img src="/assets/icon/cart.svg" alt="" /></span>
                            </Link>
                        </div>

                    </div>

                    <div className="row secondaryRow align-items-center">
                        <div className="col-8">
                            <div className="adminCard">
                                <div className="d-flex align-items-center">
                                    <div className="tiketWrap">
                                        <span><img src="/assets/icon/ticket.svg" alt="" /></span>
                                        <span><img src="/assets/icon/heard.svg" alt="" /></span>
                                    </div>

                                    <h5>Избранные</h5>

                                    <h6>55</h6>
                                </div>

                                <div className="row">
                                    <div className="col-4">
                                        <div className="adminCard ">
                                            <img src="/assets/image/card1.png" alt="" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="adminCard ">
                                            <img src="/assets/image/card1.png" alt="" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="adminCard ">
                                            <img src="/assets/image/card1.png" alt="" className="w-100" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 secondaryCol">
                            <Link to='/marell-admin/shoping-history' className="adminCard d-flex align-items-center justify-content-between">
                                <h5>История покупок</h5>
                                <span><img src="/assets/icon/bag.svg" alt="" /></span>
                            </Link>
                            <Link to='/marell-admin/favorite-brands' className="adminCard d-flex align-items-center justify-content-between">
                                <h5>Любимые бренды</h5>
                                <span><img src="/assets/icon/save.svg" alt="" /></span>
                            </Link>
                            <Link to='/marell-admin/faq' className="adminCard d-flex align-items-center justify-content-between">
                                <h5>FAQ</h5>
                                <span><img src="/assets/icon/warning.svg" alt="" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default AdminMain
