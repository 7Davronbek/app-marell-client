import React from 'react'

const RightNav = () => {
    return (
        <>
            <div className="logo">
                <img src="/assets/image/logo.png" className='w-100' alt="" />
            </div>

            <div className="myCardWrap">

                <a>
                    <div className="myCard active">
                        <div className="icon icon-main"></div>
                        <h5>Главная</h5>
                    </div>
                </a>

                <a href="#basket">
                    <div className="myCard">
                        <div className="icon icon-karzina"></div>
                        <h5>Корзина</h5>
                    </div>
                </a>

            </div>

            <div className="myCardWrap">
                <a href="#man">
                    <div className="myCard mans">
                        <div className="icon icon-man"></div>
                        <h5>Мужчине</h5>
                    </div>
                </a>

                <a href="#woman">
                    <div className="myCard">
                        <div className="icon icon-woman"></div>
                        <h5>Женщине</h5>
                    </div>
                </a>
            </div>

            <div className="myCardWrap">

                <a href="#partners">
                    <div className="myCard">
                        <div className="icon icon-partners"></div>
                        <h5>Партнеры</h5>
                    </div>
                </a>

                <a href="#support">
                    <div className="myCard">
                        <div className="icon icon-backup"></div>
                        <h5>Поддержка</h5>
                    </div>
                </a>

            </div>

            <a href="#private-office">
                <h4>ЛИЧНЫЙ КАБИНЕТ</h4>
            </a>
        </>
    )
}

export default RightNav
