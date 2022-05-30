import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const FullLayout = (props) => {

    const [menu, setMenu] = useState(false);

    const history = useHistory()



    return (
        <>
            <div className="left-layout fullLayout position-relative">

                <div className={`topNavigation } ${history.location.pathname === '/woman' ? 'pinkRadius' : ''}`}>
                    <div onClick={() => { setMenu(!menu) }} className="leftMenu">
                        <i style={{background: "#0EECEC"}} className="icon icon-main"></i>
                        <h3>МЕНЮ</h3>
                    </div>
                    <div className="centerLogo">
                        <Link to='/'>
                            <img className='w-100' src="/assets/image/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="rightBasket">
                        <span style={{background: '#FF2BFF'}} className="icon icon-basket"></span>
                    </div>
                </div>
                <div className="navigationLine"></div>

                <div onClick={() => { setMenu(false) }} className={`closeBtn d-none position-absolute ${menu ? 'activeBtn' : ''}`}>&times;</div>
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
                                        <div className={`myCard ${history.location.pathname === '/' ? 'active' : ''}`}>
                                            <div className="icon icon-main"></div>
                                            <h5>Главная</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => { setMenu(false) }} to='/basket'>
                                        <div className={`myCard ${history.location.pathname === '/basket' ? 'active' : ''}`}>
                                            <div className="icon icon-karzina"></div>
                                            <h5>Корзина</h5>
                                        </div>
                                    </Link>

                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => { setMenu(false) }} to='/catalog'>
                                        <div className={`myCard mans ${history.location.pathname === '/catalog' ? 'actives' : ''}`}>
                                            <div className="icon icon-katalog"></div>
                                            <h5>Каталог</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => { setMenu(false) }} to='/career'>
                                        <div className={`myCard ${history.location.pathname === '/career' ? 'active' : ''}`}>
                                            <div className=""><img src="/assets/icon/amarell.svg" alt="" /></div>
                                            <h5>Карьера</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => { setMenu(false) }} to='/brands'>
                                        <div className={`myCard ${history.location.pathname === '/brands' ? 'active' : ''}`}>
                                            <div className="icon icon-partners"></div>
                                            <h5>Бренды</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => { setMenu(false) }} to='/support'>
                                        <div className={`myCard ${history.location.pathname === '/support' || history.location.pathname === '/support/partnership' || history.location.pathname === '/support/return-basis' || history.location.pathname === '/support/delivery-and-payment' ? 'active' : ''}`}>
                                            <div className="icon icon-support"></div>
                                            <h5>Поддержка</h5>
                                        </div>
                                    </Link>

                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => { setMenu(false) }} to='/licniy-kabinet'>
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
                                    </Link>
                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => { setMenu(false) }} to='/favorives'>
                                        <div className={`myCard mans ${history.location.pathname === '/favorives' ? 'actives' : ''}`}>
                                            <div className="icon icon-heartBig"></div>
                                            <h5>Избранное</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => { setMenu(false) }} to='/orders'>
                                        <div className={`myCard mans ${history.location.pathname === '/orders' ? 'actives' : ''}`}>
                                            <div className="icon icon-car"></div>
                                            <h5>Заказы</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => { setMenu(false) }} to='/finance'>
                                        <div className={`myCard mans ${history.location.pathname === '/finance' ? 'actives' : ''}`}>
                                            <div className="icon icon-money"></div>
                                            <h5>Финансы</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => { setMenu(false) }} to='/questions'>
                                        <div className={`myCard mans ${history.location.pathname === '/questions' ? 'actives' : ''}`}>
                                            <div className="icon icon-faq"></div>
                                            <h5>FAQ</h5>
                                        </div>
                                    </Link>
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

export default FullLayout
