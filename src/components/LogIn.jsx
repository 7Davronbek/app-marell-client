import React, { useState } from 'react'
import LeftLayout from './LeftLayout'

const LogIn = () => {

    const [passwordShown, setPasswordShown] = useState(false)


    return (
        <div className='private-office login'>
            <LeftLayout>
                <div className="loginWrap d-flex align-items-center justify-content-center vh-100">
                    <div className="myMainCard d-flex w-50">

                        <div className="left d-flex flex-column position-relative">
                            <i><img src="/assets/image/prMini.svg" alt="" /></i>
                            <h6>MARELL</h6>
                        </div>

                        <div className="middle border-0 w-100">

                            <label htmlFor="id">ID/почта/логин </label>
                            <input type="text" id='id' className="form-control" />

                            <label htmlFor="password">Пароль</label>
                            <div className="inputWrap">
                                <input  type={passwordShown ? 'text' : 'password'} id='password' className="form-control" />
                                <div className='miniEye ' onClick={() => {setPasswordShown(!passwordShown)}} ><img src="/assets/icon/miniEye.svg" alt=""/></div>
                            </div>

                            <a>Забыл пароль</a>

                            <div className="d-flex align-items-center justify-content-center btnWrap">
                                <button className="btn nyBtn pink mr-3">Вход</button>
                            </div>
                        </div>

                    </div>

                </div>
            </LeftLayout>
        </div>
    )
}

export default LogIn
