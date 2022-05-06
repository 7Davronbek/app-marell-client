import React from 'react'
import MiniLayout from '../components/MiniLayout'

const Tovar = () => {
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
                </div>
            </div>
        </MiniLayout>
    )
}

export default Tovar