import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'

const AdminLayout = (props) => {
    const history = useHistory()
    
    const [menu, setMenu] = useState(false);

    return (
        <>
         <div className="adminLayout">
            <div className="container">
                <div className="row">
                        <div className={`col-lg-3 leftSide ${menu ? 'menued' : ''}`}>
                            <div className="leftWrap">

                                <div className="logo">
                                    <Link onClick={() => {setMenu(false)}} to='/'>
                                        <img src="/assets/image/logo.png" className='w-100' alt="" />
                                    </Link>
                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => {setMenu(false)}} to='/main'>
                                        <div className={`myCard ${history.location.pathname === '/main' ? 'active' : ''}`}>
                                            <div className="icon icon-main"></div>
                                            <h5>Главная</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => {setMenu(false)}} to='/basket'>
                                        <div className={`myCard ${history.location.pathname === '/basket' ? 'active' : ''}`}>
                                            <div className="icon icon-karzina"></div>
                                            <h5>Корзина</h5>
                                        </div>
                                    </Link>

                                </div>

                                <div className="myCardWrap">
                                    <Link onClick={() => {setMenu(false)}} to='/man'>
                                        <div className={`myCard mans ${history.location.pathname === '/man' ? 'actives' : ''}`}>
                                            <div className="icon icon-man"></div>
                                            <h5>Мужчине</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => {setMenu(false)}} to='/woman'>
                                        <div className={`myCard ${history.location.pathname === '/woman' ? 'active' : ''}`}>
                                            <div className="icon icon-woman"></div>
                                            <h5>Женщине</h5>
                                        </div>
                                    </Link>
                                </div>

                                <div className="myCardWrap">

                                    <Link onClick={() => {setMenu(false)}} to='/partners'>
                                        <div className={`myCard ${history.location.pathname === '/partners' ? 'active' : ''}`}>
                                            <div className="icon icon-partners"></div>
                                            <h5>Партнеры</h5>
                                        </div>
                                    </Link>

                                    <Link onClick={() => {setMenu(false)}} to='/support'>
                                        <div className={`myCard ${history.location.pathname === '/support' || history.location.pathname === '/support/partnership' || history.location.pathname === '/support/return-basis' || history.location.pathname === '/support/delivery-and-payment' ? 'active' : ''}`}>
                                            <div className="icon icon-support"></div>
                                            <h5>Поддержка</h5>
                                        </div>
                                    </Link>

                                </div>

                                <Link onClick={() => {setMenu(false)}} to='/main'>
                                    <h4>Выход</h4>
                                </Link>

                            </div>
                        </div>


                    <div className="col-9">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>   
        </>
    )
}

export default AdminLayout
