import React from 'react'
import LeftLayout from '../components/LeftLayout';

const ViewReviews = () => {
    return (
        <div className="viewReviews">


            <LeftLayout>
                <div className="row">
                    <div className="col-12">
                        <h1>Отзывы</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card d-flex align-items-center flex-row">
                            <div className="card-body">
                                <div className="topCard">
                                    <div>
                                        <img src="/assets/icon/user.svg" alt="" />
                                    </div>
                                    <div>
                                        <h2>Иван Иванов</h2>
                                        <div className="d-flex align-items-center">
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className="d-flex align-items-center">
                                            <span><img src="/assets/icon/like.svg" alt="" /></span>
                                            <h5>0</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span><img src="/assets/icon/dislike.svg" alt="" /></span>
                                            <h5>0</h5>
                                        </div>
                                    </div>
                                </div>
                                <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны быть описаны максимально подробно. Но сделанные на базе интернет-аналитики выводы неоднозначны и будут разоблачены. Разнообразный и богатый опыт говорит нам, что перспективное...</p>
                            </div>
                            <div className="imgWrap">
                                <img src="/assets/image/card3.png" alt="" />
                                <i><img src="/assets/image/marellMini2.png" alt="" /></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card d-flex align-items-center flex-row">
                            <div className="card-body">
                                <div className="topCard">
                                    <div>
                                        <img src="/assets/icon/user.svg" alt="" />
                                    </div>
                                    <div>
                                        <h2>Иван Иванов</h2>
                                        <div className="d-flex align-items-center">
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className="d-flex align-items-center">
                                            <span><img src="/assets/icon/like.svg" alt="" /></span>
                                            <h5>0</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span><img src="/assets/icon/dislike.svg" alt="" /></span>
                                            <h5>0</h5>
                                        </div>
                                    </div>
                                </div>
                                <p>Акционеры крупнейших компаний, вне зависимости от их уровня, должны быть описаны максимально подробно. Но сделанные на базе интернет-аналитики выводы неоднозначны и будут разоблачены. Разнообразный и богатый опыт говорит нам, что перспективное...</p>
                            </div>
                            <div className="imgWrap">
                                <img src="/assets/image/card3.png" alt="" />
                                <i><img src="/assets/image/marellMini2.png" alt="" /></i>
                            </div>
                        </div>
                    </div>
                </div>

            </LeftLayout>

        </div>
    )
}

export default ViewReviews