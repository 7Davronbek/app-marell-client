import React from 'react'
import FullLayout from '../components/FullLayout'

const LeftCareer = () => {
  return (
    <>

      <FullLayout>
        <div className="leftCareer">
          <div className="row top">
            <div className="col-5">
              <div className="d-flex align-items-center">
                <h1>| Динамика партнеров</h1>
                <h2>ЛИДЕРЫ <span><img src="/assets/icon/rights.svg" alt="" /></span></h2>
              </div>

              <div className="cards">
                <div>
                  <h1>| Бонусов от компании</h1>
                  <button className="btn"><span>0.00</span> AMARELL</button>
                </div>
                <div className='ml-5'>
                  <h1>| Оборот команды</h1>
                  <button className="btn"><span>0.00</span> AMARELL</button>
                </div>
              </div>
            </div>

            <div className="col-7">
              <h1>| Поделиться</h1>

              <div className="cards">
                <div className='mr-3'>
                  <img src="/assets/image/user.png" alt="" />
                </div>
                <div className="cardsBody">
                  <div>
                    <h3>https://marell.store/?referral=91491062</h3>
                    <h4>Ваша реферальная ссылка</h4>
                  </div>
                  <div className="btn">
                    <div className='d-flex align-items-center'><img src="/assets/icon/copy.svg" alt="" /> <div className="ml-1 mr-1">|</div> <h1> Скопировать</h1> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row bottom">
            
          </div>
        </div>
      </FullLayout>

    </>
  )
}

export default LeftCareer