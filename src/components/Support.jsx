import React from 'react'
import { Link } from 'react-router-dom'
import LeftLayout from './LeftLayout'

const Support = () => {
    return (
        <div className="support">

            <LeftLayout>
                <h2>Поддержка</h2>

                <p className="w-50">Подробно опишите возникшую проблему, мы постараемся  помочь вам в кротчайшее время.</p>


                <div className="btnWrap">

                    <Link className='a' to='/support/delivery-and-payment'>Доставка и Оплата</Link>
                    <Link className='a' to='/support/return-basis'>Условия Возврата</Link>
                    <Link className='a' to='/support/partnership'>Сотрудничество</Link>

                </div>
            </LeftLayout>

        </div>
    )
}

export default Support
