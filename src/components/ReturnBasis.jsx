import React from 'react'
import { Link } from 'react-router-dom'
import LeftLayout from './LeftLayout'

const ReturnBasis = () => {
    return (
        <div className='support'>

        <LeftLayout>
            <h2>Условия возврата</h2>

            <p className="w-50">Подробно опишите возникшую проблему, мы постараемся  помочь вам в кротчайшее время.</p>


            <div className="btnWrap">

                <Link className='a' to='/support/delivery-and-payment'>Доставка и Оплата</Link>
                <Link className='a' to='/support/return-basis'>Сотрудничество</Link>
                <Link className='a' to='/support'>Поддержка</Link>

            </div>
        </LeftLayout>

        </div>
    )
}

export default ReturnBasis
