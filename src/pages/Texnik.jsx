import React from 'react'
import { Link } from 'react-router-dom'

const Texnik = () => {
    return (
        <>
            <div className="pageNotFound">
                <div className="row">
                    <div className="col-12">
                        <Link className='text-center' to='/'><img src="/assets/image/logo.png" alt="" /></Link>
                    </div>
                    <div className="col-9 mx-auto d-flex">
                        <div>
                            <h1><img src="/assets/image/tex.png" alt="" /></h1>
                            <p>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она была удалена или вы ввели неверный адрес. Перейдите на нашу <span ><Link className='pink' to='/'>главную страницу</Link></span> и попробуйте найти необходимую вам информацию там.</p>
                        </div>
                        <div className='mt-5'>
                            <img src="/assets/image/texGr.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Texnik