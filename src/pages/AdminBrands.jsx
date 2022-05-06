import React from 'react'
import MiniLayout from '../components/MiniLayout'

const AdminBrands = () => {
    return (
        <MiniLayout>
            <div className="adminBrands">
                <div className="row">
                    <div className="col-4 left">
                        <div className="topCards">
                            <div className="cards">
                                <div>
                                    <h1>AMARELL 0.00 </h1>
                                    <h2>Баланс</h2>
                                </div>
                                <span><img src="/assets/image/eyeMini.png" alt="" /></span>
                            </div>
                            <div className="cards ml-2">
                                <div>
                                    <h1>AMARELL 0.00 </h1>
                                    <h2>Месячный доход</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <img src="/assets/image/doxod.svg" alt="" className="w-100" />
                        </div>

                        <div className="bottomCard">
                            <div className="cards">
                                <h1>| Вывод </h1>

                                <div className="d-flex align-items-center">
                                    <div>
                                        <label htmlFor="name">Сумма</label>
                                        <div className="wrap">
                                            <input type="text" placeholder='123132' className="form-control p-0" />
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

                        <h6 cla>| Последние транзакции</h6>
                        <div className="last">
                            <div className="cards">
                                <span><img src="/assets/image/history.png" alt="" /></span>
                                <h5>Транзакций ещё нет</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 right p-0">
                        <h6 className='mt-3'>| Активные заказы </h6>

                        <div className="topCards">
                            <div className="cards">
                                <img src="/assets/image/order.png" alt="" />
                                <h2>| Заказ 01  </h2>
                                <div className="d-flex align-items-center mt-2 w-75 justify-content-between">
                                    <h3>Ожидание</h3>
                                    <i className="icon icon-info"></i>
                                </div>
                            </div>
                            <div className="cards">
                                <img src="/assets/image/order.png" alt="" />
                                <h2>| Заказ 01  </h2>
                                <div className="d-flex align-items-center mt-2 w-75 justify-content-between">
                                    <h3>Ожидание</h3>
                                    <i className="icon icon-info"></i>
                                </div>
                            </div>
                            <div className="cards">
                                <img src="/assets/image/order.png" alt="" />
                                <h2>| Заказ 01  </h2>
                                <div className="d-flex align-items-center mt-2 w-75 justify-content-between">
                                    <h3>Ожидание</h3>
                                    <i className="icon icon-info"></i>
                                </div>
                            </div>
                            <div className="cards">
                                <img src="/assets/image/order.png" alt="" />
                                <h2>| Заказ 01  </h2>
                                <div className="d-flex align-items-center mt-2 w-75 justify-content-between">
                                    <h3>Ожидание</h3>
                                    <i className="icon icon-info"></i>
                                </div>
                            </div>
                        </div>

                        <h6 className='mt-3'>| Последние отзывы </h6>

                        <div className="middle">
                            <div className="cards">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span><img src="/assets/image/user_circle.png" alt="" /></span>
                                    <div className='mx-2'>
                                        <h2>Иван Иванов</h2>
                                        <div className="d-flex align-items-center">
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span><img src="/assets/icon/like.svg" alt="" /></span>
                                        <h3>0</h3>
                                        <span><img src="/assets/icon/dislike.svg" alt="" /></span>
                                        <h3>0</h3>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="img"><img src="/assets/image/card1.png" alt="" /></div>
                                    <div>
                                        <h4>Футболка “Marell” </h4>
                                        <h4>ID 234486</h4>
                                    </div>
                                </div>
                                <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны...</p>
                                <a href="#">Подробнее...</a>
                            </div>

                            <div className="cards">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span><img src="/assets/image/user_circle.png" alt="" /></span>
                                    <div className='mx-2'>
                                        <h2>Иван Иванов</h2>
                                        <div className="d-flex align-items-center">
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                            <i className="icon icon-star mr-1"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span><img src="/assets/icon/like.svg" alt="" /></span>
                                        <h3>0</h3>
                                        <span><img src="/assets/icon/dislike.svg" alt="" /></span>
                                        <h3>0</h3>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="img"><img src="/assets/image/card1.png" alt="" /></div>
                                    <div>
                                        <h4>Футболка “Marell” </h4>
                                        <h4>ID 234486</h4>
                                    </div>
                                </div>
                                <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны...</p>
                                <a href="#">Подробнее...</a>
                            </div>
                        </div>

                        <h6 className='mt-3'>| Лучшие дропшиперы</h6>

                        <div className="bottomCards">
                            <div className="cards">
                                <div className="img">
                                    <div className="circle">1</div>
                                    <img src="/assets/image/wolf.png" alt="" />
                                </div>

                                <label htmlFor="name">Никнейм</label>
                                <input type="text" id='name' className='form-control' placeholder='Волк с Уолл-стрит' />

                                <label htmlFor="name2">Объем продаж</label>
                                <input type="text" id='name2' className='form-control' placeholder='900 000 AMARELL' />

                                <label className='last' htmlFor="name3">Никнейм</label>
                                <input type="text" id='name3' className='form-control' placeholder='Введите сумму' />

                                <div className="d-flex align-items-center justify-content-between mt-3" >
                                    <button className="btn">Наградить</button>
                                    <button className="btn red">Отменить</button>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="img">
                                    <div className="circle">2</div>
                                    <img src="/assets/image/wolf.png" alt="" />
                                </div>

                                <label htmlFor="name">Никнейм</label>
                                <input type="text" id='name' className='form-control' placeholder='Волк с Уолл-стрит' />

                                <label htmlFor="name2">Объем продаж</label>
                                <input type="text" id='name2' className='form-control' placeholder='900 000 AMARELL' />

                                <label className='last' htmlFor="name3">Никнейм</label>
                                <input type="text" id='name3' className='form-control' placeholder='Введите сумму' />

                                <div className="d-flex align-items-center justify-content-between mt-3" >
                                    <button className="btn">Наградить</button>
                                    <button className="btn red">Отменить</button>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="img">
                                    <div className="circle">3</div>
                                    <img src="/assets/image/wolf.png" alt="" />
                                </div>

                                <label htmlFor="name">Никнейм</label>
                                <input type="text" id='name' className='form-control' placeholder='Волк с Уолл-стрит' />

                                <label htmlFor="name2">Объем продаж</label>
                                <input type="text" id='name2' className='form-control' placeholder='900 000 AMARELL' />

                                <label className='last' htmlFor="name3">Никнейм</label>
                                <input type="text" id='name3' className='form-control' placeholder='Введите сумму' />

                                <div className="d-flex align-items-center justify-content-between mt-3" >
                                    <button className="btn">Наградить</button>
                                    <button className="btn red">Отменить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MiniLayout>
    )
}

export default AdminBrands