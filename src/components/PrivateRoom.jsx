import React from 'react'
import { Link } from 'react-router-dom'
import LeftLayout from './LeftLayout'

const PrivateRoom = () => {
    return (
        <div className="private-office ">
            <LeftLayout>
                <div className="myPrivate">
                    <div className="myMainCard d-flex ">
                        <div className="left d-flex flex-column position-relative">
                            <i><img src="/assets/image/prMini.svg" alt="" /></i>
                            <h6>MARELL</h6>
                        </div>
                        <div className="mid">
                            <p>
                                Создание аккаунта позволит вам не только получать скидки и уникальные предложения, но и начать зарабатывать рекомендуя продукцию компании своим друзьям.
                            </p>

                            <p className='mt-3'>
                                Вы сможете зарабатывать до 15% от стоимости покупок ваших друзей!
                                И выводить прибыль ежедневно.
                            </p>

                            <div className="d-flex align-items-center justify-content-center btnWrap">
                                <Link to='/log-in'><button className="btn nyBtn pink mr-3">Вход</button></Link>
                                <Link to='/sign-in'><button className="btn nyBtn blue">Регистрация</button></Link>
                            </div>
                        </div>
                        <div className="right">
                            <i><img src="/assets/image/pure.png" alt="" /></i>

                            <h5><span className="square"></span> Один аккаунт для всех компаний</h5>
                            <h5><span className="square"></span> Единая финансовая система</h5>
                            <h5><span className="square"></span> ID для всех мероприятий компании</h5>
                            <h5><span className="square"></span> Единая партнерская сеть</h5>
                            <h5><span className="square"></span> Система лояльности бонусы и скидки</h5>
                        </div>
                    </div>

                </div>
            </LeftLayout>
        </div>

    )
}

export default PrivateRoom
