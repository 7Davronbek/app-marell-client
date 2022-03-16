import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AdminLayout from './AdminLayout'

const Faq = () => {
    return (
        <AdminLayout>
            <div className="faq">
                <h1 className="h1">FAQ <span className='ml-4'><img src="/assets/icon/warning.svg" alt="" /></span></h1>

                <h2>Добро дожаловать на <span><img src="/assets/image/logo.png" alt="" /></span></h2>

                <div className="d-flex align-items-center justify-content-between topCard">

                    <div className="card">
                        <div className="card-body">
                            <div className="img">
                                <img src="/assets/image/faq/1.png" alt="" />
                                <img className='second' src="/assets/image/faq/2.png" alt="" />
                            </div>
                            <div>
                                <h3>100 тыс+</h3>
                                <h4>Брендов на сайте</h4>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="img">
                                <img src="/assets/image/faq/3.png" alt="" />
                            </div>
                            <div>
                                <h3>50 млн+</h3>
                                <h4>Посетителей в месяц</h4>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="img">
                                <img src="/assets/image/faq/4.png" alt="" />
                            </div>
                            <div>
                                <h3>1,5 млн+</h3>
                                <h4>Заказов в день</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="d-flex justify-content-between px-3">
                    <div>
                        <Link className='myShadows' to='/'>AML Policy</Link>
                        <Link className='myShadows' to='/'>Пользовательское соглашение</Link>
                        <Link className='myShadows' to='/'>Политика конфиденциальности</Link>
                    </div>
                    <div>
                        <Link className='myShadows' to='/'>Условия обмена/возврата</Link>
                        <Link className='myShadows' to='/'>Реквизиты</Link>
                        <Link className='myShadows' to='/'>KYC</Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Faq