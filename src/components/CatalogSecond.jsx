import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EyeAnimation from './EyeAnimation';
import LeftLayout from './LeftLayout';

const CatalogSecond = () => {
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
            <div className="catalogClothes catalogSecondary">

                <LeftLayout>


                    <div className="row">
                        <div className="col-12 zed d-flex align-items-center">

                            <div className="searchWrap w-100 shadows positin-relative mr-3">
                                <div onClick={() => setCatalog(!catalog)} className="btn">

                                    Одежда <span><img src="/assets/icon/down.svg" alt="" /></span>


                                </div>
                                <input type="text" value='Футболка Marell ' placeholder='Я ищу...' className="form-control" />
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


                            <div className="arrow ml-auto">
                                <img src="/assets/icon/sort_arrow.svg" alt="" />
                                <div className="arrowWrap">
                                    <h6>По убыванию цены</h6>
                                    <h6>По возрастанию цены</h6>
                                    <h6>По популярности</h6>
                                    <h6>По рейтингу</h6>
                                    <h6>Сначала новинки</h6>
                                </div>
                            </div>
                            <div className="filter"><img src="/assets/icon/filter.svg" alt="" /></div>

                        </div>
                    </div>

                    <div className="row mt-5">
                        <Link to='/catalog/view' className="col-lg-4 col-6">
                            <div className="cards">

                                <div className="cardsHeader">
                                    <img src="/assets/image/main2.png" alt="" className="w-100" />
                                    <div className="icon icon-heart"></div>
                                    <div className="marell"><img src="/assets/image/marellMini.png" alt="" /></div>
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
                        </Link>
                        <Link to='/catalog/view' className="col-lg-4 col-6">
                            <div className="cards">

                                <div className="cardsHeader">
                                    <img src="/assets/image/main2.png" alt="" className="w-100" />
                                    <div className="icon icon-heart"></div>
                                    <div className="marell"><img src="/assets/image/marellMini.png" alt="" /></div>
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
                        </Link>
                        <Link to='/catalog/view' className="col-lg-4 col-6">
                            <div className="cards">

                                <div className="cardsHeader">
                                    <img src="/assets/image/main2.png" alt="" className="w-100" />
                                    <div className="icon icon-heart"></div>
                                    <div className="marell"><img src="/assets/image/marellMini.png" alt="" /></div>
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
                        </Link>
                        <Link to='/catalog/view' className="col-lg-4 col-6">
                            <div className="cards">

                                <div className="cardsHeader">
                                    <img src="/assets/image/main2.png" alt="" className="w-100" />
                                    <div className="icon icon-heart"></div>
                                    <div className="marell"><img src="/assets/image/marellMini.png" alt="" /></div>
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
                        </Link>
                        <Link to='/catalog/view' className="col-lg-4 col-6">
                            <div className="cards">

                                <div className="cardsHeader">
                                    <img src="/assets/image/main2.png" alt="" className="w-100" />
                                    <div className="icon icon-heart"></div>
                                    <div className="marell"><img src="/assets/image/marellMini.png" alt="" /></div>
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
                        </Link>
                        <Link to='/catalog/view' className="col-lg-4 col-6">
                            <div className="cards">

                                <div className="cardsHeader">
                                    <img src="/assets/image/main2.png" alt="" className="w-100" />
                                    <div className="icon icon-heart"></div>
                                    <div className="marell"><img src="/assets/image/marellMini.png" alt="" /></div>
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
                        </Link>
                    </div>


                </LeftLayout>


            </div>
        </>
    )
}

export default CatalogSecond
