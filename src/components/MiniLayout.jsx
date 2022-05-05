import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const MiniLayout = (props) => {

    const [menu, setMenu] = useState(false);

    const history = useHistory()



    return (
        <>
            <div className="left-layout position-relative">

                <div className={`topNavigation } ${history.location.pathname === '/woman' ? 'pinkRadius' : ''}`}>
                    <div onClick={() => { setMenu(true) }} className="leftMenu">
                        <img src="/assets/image/miniEye.png" alt="" />
                        <h3>МЕНЮ</h3>
                    </div>
                    <div className="centerLogo">
                        <Link to='/'>
                            <img className='w-100' src="/assets/image/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="rightBasket">
                        <span className="icon icon-basket"></span>
                    </div>
                </div>
                <div className="navigationLine"></div>

                <div onClick={() => { setMenu(false) }} className={`closeBtn position-absolute ${menu ? 'activeBtn' : ''}`}>&times;</div>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-3 leftSide ${menu ? 'menued' : ''}`}>
                            <div className="leftWrap">

                                <div className="logo">
                                    <Link onClick={() => { setMenu(false) }} to='/'>
                                        <img src="/assets/image/logo.png" className='w-100' alt="" />
                                    </Link>
                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => { setMenu(false) }} to='/'>
                                        <div className={`myCard`}>
                                            <div className="icon icon-main"></div>
                                            <h5>Главное меню</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => { setMenu(false) }} to='/admin/brands'>
                                        <div className={`myCard ${history.location.pathname === '/admin/brands' ? 'active' : ''}`}>
                                            <div className="icon icon-widjet"></div>
                                            <h5>Кабинет бренда</h5>
                                        </div>
                                    </Link>

                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => { setMenu(false) }} to='/admin/orders'>
                                        <div className={`myCard ${history.location.pathname === '/admin/orders' ? 'active' : ''}`}>
                                            <div className="icon icon-karzina"></div>
                                            <h5>Заказы</h5>
                                        </div>
                                    </Link>
                                    <Link onClick={() => { setMenu(false) }} to='/admin/tovar'>
                                        <div className={`myCard mans ${history.location.pathname === '/admin/tovar' ? 'actives' : ''}`}>
                                            <div className="icon icon-katalog"></div>
                                            <h5>Мои товары</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => { setMenu(false) }} to='/admin/employee'>
                                        <div className={`myCard ${history.location.pathname === '/admin/employee' ? 'active' : ''}`}>
                                            <div className=""><img src="/assets/icon/amarell.svg" alt="" /></div>
                                            <h5>Сотрудники</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => { setMenu(false) }} to='/admin/client'>
                                        <div className={`myCard ${history.location.pathname === '/admin/client' ? 'active' : ''}`}>
                                            <div className="icon icon-partners"></div>
                                            <h5>Клиенты</h5>
                                        </div>
                                    </Link>

                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => { setMenu(false) }} to='/admin/support'>
                                        <div className={`myCard ${history.location.pathname === '/admin/support' ? 'active' : ''}`}>
                                            <div className="icon icon-support"></div>
                                            <h5>Поддержка</h5>
                                        </div>
                                    </Link>

                                    <div className="myCardWrap">
                                        <Link onClick={() => { setMenu(false) }} to='/admin/user'>
                                            <div className={`myCard mans ${history.location.pathname === '/admin/user' ? 'actives' : ''}`}>
                                                <div className="icon icon-user"></div>
                                                <h5>Личный кабинет</h5>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <Link onClick={() => { setMenu(false) }} to='/licniy-kabinet'>
                                        <div className={`myCard mans ${history.location.pathname === '/licniy-kabinet' ? 'actives' : ''}`}>
                                            <div className="icon icon-user"></div>
                                            <h5>Личный кабинет</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => { setMenu(false) }} to='/own-brand'>
                                        <div className={`myCard ${history.location.pathname === '/own-brand' ? 'active' : ''}`}>
                                            <div className="icon icon-widjet"></div>
                                            <h5>Кабинет бренда</h5>
                                        </div>
                                    </Link> */}
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-9">
                            {props.children}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniLayout
