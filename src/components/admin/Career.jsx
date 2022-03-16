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
                                    <tr>
                                        <th><h5>Lv5</h5></th>
                                        <th className='text-center'><h3>3%</h3></th>
                                        <th className='text-right'><h4>100 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h5>Lv6</h5></th>
                                        <th className='text-center'><h3>4%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h6>Lv7</h6></th>
                                        <th className='text-center'><h3>5%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h5>Lv8</h5></th>
                                        <th className='text-center'><h3>3%</h3></th>
                                        <th className='text-right'><h4>100 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h5>Lv9</h5></th>
                                        <th className='text-center'><h3>4%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h6>Lv10</h6></th>
                                        <th className='text-center'><h3>5%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h5>Lv11</h5></th>
                                        <th className='text-center'><h3>4%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                    <tr>
                                        <th><h6>Lv12</h6></th>
                                        <th className='text-center'><h3>5%</h3></th>
                                        <th className='text-right'><h4>250 000 P</h4></th>
                                    </tr>
                                </tbody>
                            </table>

                            <p className='mt-3'>Для достижения уровня необходимо выполнить условия по товарообороту, в течение расчетного периода 30 дней
                                Существует 3 несгораемых процента 5%/10%/15%</p>
                        </div>

                        <div className="col-lg-5 right">
                            <p>При активации/получении Lv1 Партнер получает 2% от покупок/подписки своей первой линииp</p>
                            <p className='mt-3'>При достижении Lv2 Партнер получает 3% от первой линии и разницу между своим процентом и процентом партнера первой линии: 3-2=1% с глубины</p>

                            <h5 className='mt-5'>Я 15%</h5>
                            <h5>Lv1    Максим 5%</h5>
                            <h5>Lv2    Антон 10% </h5>
                            <h5>Lv3    Никита 5%</h5>

                            <p className="mt-3">Никита делает покупку на 1000₽ значит Антон получает 10% от покупки Никиты, Максим не получает процент так как Антон обошёл его по проценту, Я получаю разницу между моими 15% и 10% Антона, 15-10=5% с покупки Никиты.</p>
                            <p className="mt-3">Если вы не хотите ежемесячно совершать покупки на маркетплэйсе для возможности заработка, приобретайте подписку:</p>

                            <h5 className="green mt-5">869р – месяц; </h5>
                            <h5 className='green'>3968р – 6 месяцев;</h5>
                            <h5 className="green">9683р – 1 год</h5>

                        </div>
                    </div>

                </div>

            </AdminLayout>
        </>
    )
}

export default Career