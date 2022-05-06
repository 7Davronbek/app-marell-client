import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MiniLayout from '../components/MiniLayout'

const Tovar = () => {
    const [catalog, setCatalog] = useState(false)
    return (
        <MiniLayout>
            <div className="tovar">
                <div className="row">
                    <div className="col-4">
                        <h1>| Добавить товар </h1>

                        <div className="cards">
                            <div className="d-flex">
                                <div>
                                    <h2>| Фото </h2>
                                    <div className="full"><i className="icon icon-photo"></i></div>
                                    <div className="d-flex align-items-center">
                                        <div className="half"><i className="icon icon-photo"></i></div>
                                        <div className="half"><i className="icon icon-photo"></i></div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="half"><i className="icon icon-photo"></i></div>
                                        <div className="half"><i className="icon icon-photo"></i></div>
                                    </div>
                                    <select name="" id="">
                                        <option value="qwe">Категория</option>
                                        <option value="qwe">Категория</option>
                                        <option value="qwe">Категория</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="qwe">Размер</option>
                                        <option value="qwe">Размер</option>
                                        <option value="qwe">Размер</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="qwe">Цвет</option>
                                        <option value="qwe">Цвет</option>
                                        <option value="qwe">Цвет</option>
                                    </select>
                                    <input type="text" className="form-control" placeholder='Цвет' />
                                    <button className="btn">Отправить на утверждение <span><img src="/assets/image/miniEye.png" alt="" /></span></button>
                                </div>

                                <div className='ml-2'>
                                    <label htmlFor="qwe">| Название товара</label>
                                    <input type="text" id='qwe' className="form-control" />

                                    <label htmlFor="qwe2">| Артикул</label>
                                    <input type="text" id='qwe2' className="form-control" />

                                    <label htmlFor="qwe3">| Описание</label>
                                    <textarea type="text" id='qwe3' className="form-control" />

                                    <label htmlFor="qwe4">| Хорактеристики</label>
                                    <textarea type="text" id='qwe4' className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="row">
                            <div className="col-12 zed">

                                <div className="searchWrap mb-3 shadows positin-relative">
                                    <div onClick={() => setCatalog(!catalog)} className="btn">

                                        ВСЕ <span><img src="/assets/icon/down.svg" alt="" /></span>


                                    </div>
                                    <input type="text" placeholder='Я ищу...' className="form-control" />
                                    <p><span><img src="/assets/icon/search.svg" alt="" /></span> поиск</p>


                                    <div onMouseLeave={() => setCatalog(false)} className={`buttonWrap ${catalog ? 'active' : ''}`}>
                                        <h6>Женская одежда</h6>
                                        <h6>Мужская одежда</h6>
                                        <h6>Канцтовары</h6>
                                        <h6>Продукты для здоровья</h6>
                                        <h6>Украшения</h6>
                                        <h6>Косметика</h6>
                                        <h6>Косметика</h6>
                                        <h6>Косметика</h6>
                                        <h6>Косметика</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cardWrap">
                            <h1 className='mt-3'>| Мои товары по категориям </h1>
                            <div className="row">
                                <div className="col-3">
                                    <Link to='/catalog/clothes' className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Одежда</h5>
                                        </div>
                                    </Link>
                                </div>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Обувь</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Канцтовары</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Для здоровья</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Украшения</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Косметика</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>18 +</h5>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/catalog/clothes' className="col-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                            <h5>Сервисы</h5>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <h1 className="mt-5">| Последние добавленные </h1>

                            <div className='d-flex right'>
                                <div className="cards">

                                    <div className="cardsHeader">
                                        <img src="/assets/image/1.png" alt="" className="w-100" />
                                        <div className="icon icon-heart"></div>
                                    </div>
                                    <div className="cardsBody p-0">
                                        <div className="top">
                                        <b>Футболка “Marell” </b>
                                        <i className="icon icon-info"></i>
                                        </div>
                                        <div className="bottom">
                                            <div className=''>
                                                <h5>RUB</h5>
                                                <h4>1600 P</h4>
                                            </div>
                                            <div className='mx-1    '>
                                                <h5>AMARELL</h5>
                                                <h4>94</h4>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cards">

                                    <div className="cardsHeader">
                                        <img src="/assets/image/1.png" alt="" className="w-100" />
                                        <div className="icon icon-heart"></div>
                                    </div>
                                    <div className="cardsBody p-0">
                                        <div className="top">
                                        <b>Футболка “Marell” </b>
                                        <i className="icon icon-info"></i>
                                        </div>
                                        <div className="bottom">
                                            <div className=''>
                                                <h5>RUB</h5>
                                                <h4>1600 P</h4>
                                            </div>
                                            <div className='mx-1    '>
                                                <h5>AMARELL</h5>
                                                <h4>94</h4>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star mr-1"></i>
                                                <i className="icon icon-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MiniLayout>
    )
}

export default Tovar