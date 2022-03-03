import React from 'react'
import Basket from './Basket'
import BasketImg from './BasketImg'
import LeftLayout from './LeftLayout'

const Baskets = () => {
    return (
        <div className='basket'>
            <LeftLayout>
                <div className="row">
                    <div className="col-lg-7 middle pt-5">
                        <BasketImg />
                    </div>

                    <div className="col-lg-5 rightBasket">
                        <Basket />
                    </div>
                </div>
            </LeftLayout>
        </div>
    )
}

export default Baskets
