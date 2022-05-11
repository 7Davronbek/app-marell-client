import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <div className="pageNotFound">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <Link className='text-center' to='/'><img src="/assets/image/logo.png" alt="" /></Link>
                        <h1><img src="/assets/image/err.png" alt="" /></h1>
                        <p>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она была удалена или вы ввели неверный адрес. Перейдите на нашу <span ><Link className='pink' to='/'>главную страницу</Link></span> и попробуйте найти необходимую вам информацию там.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound