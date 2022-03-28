import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Esspecially from '../../components/Esspecially';
import EyeAnimation from '../../components/EyeAnimation';
import LeftLayout from '../../components/LeftLayout';

const TShirt = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    const [catalog, setCatalog] = useState(false)
    return (
        <>
            {isLoading ? (
                <div className="loader">
                    <div className={`eye cursor text-center `}>
                        <EyeAnimation />
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className="catalogClothes forMan">

                <LeftLayout>


                    <div className="row">
                        <div className="col-12 zed">

                            <div className="searchWrap shadows positin-relative">
                                <div onClick={() => setCatalog(!catalog)} className="btn">

                                Mужская <span><img src="/assets/icon/down.svg" alt="" /></span>


                                </div>
                                <input type="text" placeholder='Я ищу...' className="form-control" />
                                <p><span><img src="/assets/icon/search.svg" alt="" /></span> поиск</p>


                                <div onMouseLeave={() => setCatalog(false)} className={`buttonWrap ${catalog ? 'active' : ''}`}>
                                    <h6>Женская одежда</h6>
                                    <h6>Мужская одежда</h6>
                                    <h6>Канцтовары</h6>
                                    <h6>Продукты для здоровья</h6>
                                    <h6>Украшения</h6>
                                    <h6>Косметика</h6>
                                    <h6>Косметика</h6>
                                    <h6>Косметика</h6>
                                    <h6>Косметика</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cardWrap">
                        <div className="row">
                            <div className="col-3 myCol">
                                <Link to='/catalog' className="card main">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <div className='d-flex align-items-center justify-content-center mt-3'>
                                            <h4>Одежда</h4>
                                            <span className='ml-3'><img src="/assets/icon/close.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/catalog/clothes' className="card main secondary">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <div className='d-flex align-items-center justify-content-center mt-3'>
                                            <h4>Мужская</h4>
                                            <span className='ml-3'><img src="/assets/icon/close.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-9">
                                <div className="row">

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Футболки</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Толстовки</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Толстовки</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Свитера</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Женская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Детская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Мужская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Женская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Детская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Мужская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Женская</h5>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/catalog/clothes/for-man/t-shirt' className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                                <h5>Детская</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>

                    <Esspecially />


                </LeftLayout>

            </div>
        </>
    )
}

export default TShirt
