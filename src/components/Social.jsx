import React from 'react'
import { connect } from 'react-redux'
import { login, updateState } from '../redux/action/statesAction'
import EyeAnimation from './EyeAnimation'

const Social = (props) => {
    return (
        <>
            <div className={`social ${props.states ? 'actived' : ''}`}>
                <div className="container">
                    <div className="row  myRow">
                        <div className="col-md-8">
                            <div className="myRadius">
                                <p><strong>MARELL</strong> – цифровая экосистема, адаптированная  под формат современной жизни.</p>
                                <p className='margin'>В ней вы найдете <strong className='pink'>ОДЕЖДУ</strong>, в которой удобно захватывать мир. </p>
                                <p><strong className='blue'>ЕДУ</strong> для поддержания физического тела в идеальном состоянии.</p>
                                <p>И <strong className='light'>ИГРЫ</strong> для развития вашего разума и финансовой грамотности.</p>
                                <p className='margin'>Главной особенностью экосистемы стала возможность зарабатывать на ней!</p>
                                <p className='margin'><strong>MARELL</strong> – неугасаемый источник вдохновения и стимул для твоего совершенствования. Время идет.</p>
                            </div>
                        </div>

                        <div className="col-md-4 rightLogo d-flex justify-content-end">
                            <i><img src="/assets/image/circleLogo.png" alt="" /></i>
                        </div>
                    </div>

                    <div className="row mobileRow">
                        <div className="col-12 text-center">
                            <h6>КОНТАКТЫ</h6>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-between sociality">
                            <a className='d-flex align-items-center' target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=marta@marell.store">
                                <i className='mr-lg-4'><img src="/assets/icon/email.svg" alt="" /></i>
                                <p>Info@marell.com</p>
                            </a>

                            <a className='d-flex align-items-center' target='_blank' href="https://t.me/MARELL_shop"><i className='mr-lg-4'><img src="/assets/icon/tg.svg" alt="" /></i>
                                <p>@marell</p>
                            </a>

                            <a className='d-flex align-items-center' target='_blank' href="https://instagram.com/m.a.r.e.l.l?utm_medium=copy_link"><i className='mr-lg-4'><img src="/assets/icon/insta.svg" alt="" /></i>
                                <p>@M.A.R.E.L.L</p>
                            </a>

                            <a className='d-flex align-items-center' target='_blank' href="tel: +79253487408"><i className='mr-lg-4'><img src="/assets/icon/phone.svg" alt="" /></i>
                                <p>+7 925 348 47 08</p>
                            </a>
                        </div>
                    </div>

                    <div onClick={(e) => {props.updateState({ show: false }); e.stopPropagation()}} className={`logo eye cursor ${props.states ? 'trans' : ''}`}>
                        <EyeAnimation />
                    </div>
                </div>

            </div>



        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        states: state.states.show
    }
}

export default connect(mapStateToProps, { login, updateState })(Social)
