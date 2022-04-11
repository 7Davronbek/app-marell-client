import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Esspecially from '../../components/Esspecially';
import EyeAnimation from '../../components/EyeAnimation';
import LeftLayout from '../../components/LeftLayout';
import TShirtPagination from '../../components/TShirtPagination';

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
            <div className="catalogClothes forMan tShirt">

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
                                <Link to='/catalog/clothes/for-man' className="card main third">
                                    <div className="card-body">
                                        <img src="/assets/image/catalog.png" className='w-100' alt="" />
                                        <div className='d-flex align-items-center justify-content-center mt-3'>
                                            <h4>Футболки</h4>
                                            <span className='ml-3'><img src="/assets/icon/close.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-9">
                                <div className="d-flex">
                                    <div className='d-flex flex-column'>
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/1.png" alt="" className="w-100" />
                                                <div className="icon icon-heart"></div>
                                            </div>
                                            <div className="cardsBody">
                                                <div className="top">
                                                    <button className="btn first">Футболка “Marell” </button>
                                                    <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                                </div>
                                                <div className="bottom">
                                                    <div className=''>
                                                        <h5>RUB</h5>
                                                        <h4>1600 P</h4>
                                                    </div>
                                                    <div className=''>
                                                        <h5>AMARELL</h5>
                                                        <h4>94</h4>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/1.png" alt="" className="w-100" />
                                                <div className="icon icon-heart"></div>
                                            </div>
                                            <div className="cardsBody">
                                                <div className="top">
                                                    <button className="btn first">Футболка “Marell” </button>
                                                    <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                                </div>
                                                <div className="bottom">
                                                    <div className=''>
                                                        <h5>RUB</h5>
                                                        <h4>1600 P</h4>
                                                    </div>
                                                    <div className=''>
                                                        <h5>AMARELL</h5>
                                                        <h4>94</h4>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/1.png" alt="" className="w-100" />
                                                <div className="icon icon-heart"></div>
                                            </div>
                                            <div className="cardsBody">
                                                <div className="top">
                                                    <button className="btn first">Футболка “Marell” </button>
                                                    <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                                </div>
                                                <div className="bottom">
                                                    <div className=''>
                                                        <h5>RUB</h5>
                                                        <h4>1600 P</h4>
                                                    </div>
                                                    <div className=''>
                                                        <h5>AMARELL</h5>
                                                        <h4>94</h4>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cards">

                                            <div className="cardsHeader">
                                                <img src="/assets/image/1.png" alt="" className="w-100" />
                                                <div className="icon icon-heart"></div>
                                            </div>
                                            <div className="cardsBody">
                                                <div className="top">
                                                    <button className="btn first">Футболка “Marell” </button>
                                                    <button className="btn"><img src="/assets/icon/cardBag.svg" alt="" /></button>
                                                </div>
                                                <div className="bottom">
                                                    <div className=''>
                                                        <h5>RUB</h5>
                                                        <h4>1600 P</h4>
                                                    </div>
                                                    <div className=''>
                                                        <h5>AMARELL</h5>
                                                        <h4>94</h4>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star mr-1"></i>
                                                        <i className="icon icon-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>



                </LeftLayout>

                <TShirtPagination />

                <Esspecially />
            </div>
        </>
    )
}

export default TShirt
