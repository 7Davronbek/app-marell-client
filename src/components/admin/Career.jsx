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

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th><h2>Lv1</h2></th>
                                        <th className='text-center'><h3>2%</h3></th>
                                        <th className='text-right'><h4>5000 Р/ 500 Р + подписка</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h5>Lv2</h5></th>
                                        <th className='text-center'><h3>3%</h3></th>
                                        <th className='text-right'><h4>100 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h5>Lv3</h5></th>
                                        <th className='text-center'><h3>4%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h6>Lv4</h6></th>
                                        <th className='text-center'><h3>5%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                </tbody>
                            </table>

                            <p>Для достижения уровня необходимо выполнить условия по товарообороту, в течение расчетного периода 30 дней
                                Существует 3 несгораемых процента 5%/10%/15%</p>
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