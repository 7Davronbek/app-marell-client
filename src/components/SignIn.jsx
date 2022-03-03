import React, { useState } from 'react'
import LeftLayout from './LeftLayout'

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const [passwordShown2, setPasswordShown2] = useState(false)
    return (
        <div className="private-office signIn">
            <LeftLayout>
                <div className="signInWrap d-flex align-items-center justify-content-center vh-100">
                    <div className="myMainCard d-flex ">
                        <div className="left d-flex flex-column position-relative">
                            <i><img src="/assets/image/prMini.svg" alt="" /></i>
                            <h6>MARELL</h6>
                        </div>
                        <div className="mid">

                            <div className="columnWrap d-flex align-items-center justify-content-between">

                                <div className="wrap">
                                    <label htmlFor="surname">Фамилия</label>
                                    <input type="text" id='surname' className="form-control" />
                                </div>

                                <div className="wrap mx-2">
                                    <label htmlFor="name">Имя</label>
                                    <input type="text" id='name' className="form-control" />
                                </div>

                                <div className="wrap">
                                    <label htmlFor="fatherName">Отчество</label>
                                    <input type="text" id='fatherName' className="form-control" />
                                </div>

                            </div>

                            <div className="columnWrap d-flex align-items-center justify-content-between">

                                <div className="wrap mr-2">
                                    <label htmlFor="login">Логин</label>
                                    <input type="text" id='login' className="form-control" />
                                </div>

                                <div className="wrap">
                                    <label htmlFor="id">ID/почта/логин Прегласителя</label>
                                    <input type="text" id='id' className="form-control bigInput" />
                                </div>

                            </div>

                            <div className="columnWrap d-flex align-items-center justify-content-between">

                                <div className="wrap mr-2">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id='email' className="form-control" />
                                </div>

                                <div className="wrap">
                                    <label htmlFor="number">Телефон</label>
                                    <input type="number" id='number' className="form-control " />
                                </div>

                            </div>

                            <div className="columnWrap d-flex align-items-center justify-content-between mt-4">

                                <div className="wrap mr-2">
                                    <label htmlFor="password">Пароль</label>
                                    <div className="inputWrap">
                                        <input type={passwordShown ? 'text' : 'password'} id='password' className="form-control" />
                                        <div className='miniEye ' onClick={() => { setPasswordShown(!passwordShown) }} ><img src="/assets/icon/miniEye.svg" alt="" /></div>
                                    </div>
                                </div>

                                <div className="wrap">
                                    <label htmlFor="email2">Подтверждение почты</label>
                                    <input type="email" id='email2' className="form-control " />
                                </div>

                            </div>

                            <div className="columnWrap d-flex align-items-center justify-content-between">

                                <div className="wrap mr-2">
                                    <label htmlFor="password2">Подтверждение пароля</label>
                                    <div className="inputWrap">
                                        <input type={passwordShown2 ? 'text' : 'password'} id='password2' className="form-control" />
                                        <div className='miniEye ' onClick={() => { setPasswordShown2(!passwordShown2) }} ><img src="/assets/icon/miniEye.svg" alt="" /></div>
                                    </div>
                                </div>

                                <div className="wrap">
                                    <label htmlFor="number2">Подтверждение Телефона</label>
                                    <input type="number" id='number2' className="form-control " />
                                </div>

                            </div>

                            <div className="d-flex align-items-center mb-2 mt-3">
                                <input type="checkbox"  id="agree"/>
                                <label className='m-0 mx-2' htmlFor="agree">Я даю согласие на обработку данных</label>
                            </div>

                            <div className="d-flex align-items-center">
                                <input type="checkbox"  id="understand"/>
                                <label className='m-0 mx-2' htmlFor="understand">Я принимаю условия и положения</label>
                            </div>


                            <div className="d-flex align-items-center justify-content-center btnWrap">
                                <a><button className="btn nyBtn blue">Регистрация</button></a>
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

export default SignIn
