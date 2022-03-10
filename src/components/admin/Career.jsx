import React from 'react'
import AdminLayout from './AdminLayout'

const Career = () => {
    return (
        <>
            <AdminLayout>
                <div className="career">
                    <h1>Карьера <span>%</span></h1>

                    <div className="row">
                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <h2>Lv1</h2>
                                        <h3>2%</h3>
                                        <h4>5000 Р/ 500 Р + подписка</h4>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <h2>Lv2</h2>
                                        <h3>3%</h3>
                                        <h4>100 000 P</h4>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <h2>Lv3</h2>
                                        <h3>3%</h3>
                                        <h4>250 000 Р</h4>
                                    </div>
                                </div>
                            </div>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th><h2>Lv1</h2></th>
                                        <th><h3>2%</h3></th>
                                        <th><h4>5000 Р/ 500 Р + подписка</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h2>Lv2</h2></th>
                                        <th><h3>3%</h3></th>
                                        <th><h4>100 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h2>Lv1</h2></th>
                                        <th><h3>3%</h3></th>
                                        <th><h4>250 000 P</h4></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-5">
                            <p>При активации/получении Lv1 Партнер получает 2% от покупок/подписки своей первой линии 

При достижении Lv2 Партнер получает 3% от первой линии и разницу между своим процентом и процентом партнера первой линии: 3-2=1% с глубины</p>
                        </div>
                    </div>

                </div>
            </AdminLayout>
        </>
    )
}

export default Career