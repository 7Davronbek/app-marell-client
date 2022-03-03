import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { login, updateState } from '../redux/action/statesAction'
import EyeAnimation from './EyeAnimation';
import Social from './Social';

const Header = (props) => {
    return (
        <>
            <div className={`header position-relative `}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div onClick={(e) => {props.updateState({ show: true }); e.stopPropagation()}} className={`eye cursor text-center ${props.show ? 'eyed' : ''}`}>
                                <EyeAnimation />
                            </div>
                            <div className="col-12">
                                <div className="logo">
                                    <img className='w-100' src="/assets/image/logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12 flex-wrap btnWrap d-flex align-items-center justify-content-between">
                                <a className='myBtn' href="https://t.me/purecashflow" target='_blank'>CASHFLOW</a>
                                <Link onClick={(e) => e.stopPropagation()} className='myBtn' to="/main">CLOTHES</Link>
                                <Link onClick={(e) => e.stopPropagation()} className='myBtn ' to="/partners">PARTNERS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Social />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        states: state.states.show
    }
}

export default connect(mapStateToProps, { login, updateState })(Header)
