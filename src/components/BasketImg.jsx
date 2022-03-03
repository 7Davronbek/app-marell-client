import React from 'react'

const BasketImg = () => {
    return (
        <>
            <div className="row basketImgWrap">
                <div className="col-6 p-0 position-relative">
                    <div className="position-absolute number">1</div>
                    <i><img src="/assets/image/basket.png" className='w-100' alt=""/></i>
                </div>
                <div className="col-6 p-0 position-relative">
                    <div className="position-absolute number secondary">2</div>
                    <i><img src="/assets/image/basket.png" className='w-100' alt=""/></i>
                </div>
                <div className="col-6 p-0 position-relative">
                    <div className="position-absolute number"><span className="blue">3</span></div>
                    <i><img src="/assets/image/basket.png" className='w-100' alt=""/></i>
                </div>
                <div className="col-6 p-0 position-relative">
                    <div className="position-absolute number secondary">4</div>
                    <i><img src="/assets/image/basket.png" className='w-100' alt=""/></i>
                </div>
                <div className="col-6 p-0 position-relative">
                    <div className="position-absolute number"><span className="blue">5</span></div>
                    <i><img src="/assets/image/basket.png" className='w-100' alt=""/></i>
                </div>
                <div className="col-6 p-0 position-relative">
                    <div className="position-absolute number secondary"><span className="blue">6</span></div>
                    <i><img src="/assets/image/basket.png" className='w-100' alt=""/></i>
                </div>
            </div>
        </>
    )
}

export default BasketImg
