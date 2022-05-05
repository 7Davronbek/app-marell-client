import React from 'react'
import FullLayout from '../components/FullLayout'

const Finance = () => {
    return (
        <>
            <FullLayout>
                <div className="finance">
                    <div className="topCard">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div className="cards">
                                        <h1>| Баланс</h1>
                                        <div className="d-flex align-items-center mt-2">
                                            <input type="number" placeholder='9045.45698' className="form-control" />
                                            <h2>AMARELL</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="cards">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h1>| Пополнить</h1>
                                            <h1 className='d-flex align-items-center'> 1 <h2 className='m-0 mr-2'> AMA </h2> = 120p</h1>
                                        </div>
                                        <div className="d-flex align-items-center mt-2">
                                            <input type="number" placeholder='9045.45698' className="form-control" />
                                            <h2>AMARELL</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4 p-0">
                                    <div className="cards">
                                        <h1>| Способ пополнения</h1>
                                        <div className="d-flex align-items-center mt-2">
                                            <div className="select">
                                                <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> Cryptocurrency <i className="icon icon-down"></i></h3>
                                                <div className="hidden">
                                                    <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> Банковская карта</h3>
                                                    <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> QIWI</h3>
                                                    <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> ЮМАНИ</h3>
                                                </div>
                                            </div>
                                            <button className="btn">ПОПОЛНИТЬ</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="bottomCard">
                        <div className="container">
                            <div className="row">
                                <div className="col-7">
                                    <div className="cards">
                                        <h1>| Вывод </h1>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <label htmlFor="name">Сумма</label>
                                                <div className="wrap">
                                                    <input type="number" placeholder='123132' className="form-control" />
                                                    <h4>AMARELL</h4>
                                                </div>
                                            </div>
                                            <div className='w-50 ml-3'>
                                                <label htmlFor="qwe">Способ вывода</label>
                                                <div className="select">
                                                    <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> Cryptocurrency <i className="icon icon-down"></i></h3>
                                                    <div className="hidden">
                                                        <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> Банковская карта</h3>
                                                        <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> QIWI</h3>
                                                        <h3><span className='mr-2'><img src="/assets/icon/btc.svg" alt="" /></span> ЮМАНИ</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <label className='mt-3' htmlFor="id">Кошелек</label>
                                        <div className="wrap">
                                            <input type="text" className="form-control" placeholder='1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX' />
                                        </div>
                                        <h5 className="mt-3">Комиссия: 1%</h5>
                                        <button className="btn">ВЫВОД</button>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="cards">
                                        <h1>| Перевод пользователю</h1>

                                        <div className="d-flex">
                                            <div>
                                                <label htmlFor="sum"></label>
                                                <div className="wrap">
                                                    <input type="number" placeholder='123132' className="form-control" />
                                                    <h4>AMARELL</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FullLayout>
        </>
    )
}

export default Finance