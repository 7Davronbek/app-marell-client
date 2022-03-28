import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EyeAnimation from './EyeAnimation';
import LeftLayout from './LeftLayout';

const Catalog = () => {
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
            <div className="catalog">

                <LeftLayout>


                    <div className="row">
                        <div className="col-12 zed">

                            <div className="searchWrap shadows positin-relative">
                                <div onClick={() => setCatalog(!catalog)} className="btn">

                                    ВСЕ <span><img src="/assets/icon/down.svg" alt="" /></span>


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
                            <div className="col-3">
                                <Link to='/catalog/clothes' className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Одежда</h5>
                                    </div>
                                </Link>
                            </div>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Обувь</h5>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Канцтовары</h5>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Для здоровья</h5>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Украшения</h5>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Косметика</h5>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>18 +</h5>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to='/catalog/clothes' className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <h5>Сервисы</h5>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </LeftLayout>

            </div>
        </>
    )
}

export default Catalog
