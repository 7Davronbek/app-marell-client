import React from 'react'
import FullLayout from '../components/FullLayout'

const LicniyKabinet = () => {
  return (
    <>
      <FullLayout>
        <div className="licniyKabinet">
          <div className="row">
            <div className="col-5">
              <div className="cards">
                <div className="image">
                  <span><img src="/assets/image/wolf.png" alt="" /></span>
                  <h6>LV1</h6>
                </div>

                <div className=" left">
                  <h5>900</h5>
                  <i><img src="/assets/icon/plus.svg" alt="" /></i>
                </div>
                
                <label htmlFor="name">Никнейм</label>
                <input id='name' type="text" className='form-control borders' placeholder='Волк с Уолл-стрит' />
                
                <label htmlFor="email">E-mail</label>
                <input id='email' type="email" className='form-control borders' placeholder='Emailru@mail.ru' />
                
                <label htmlFor="bussiness">Бизнес Ангел</label>
                <input id='bussiness' type="text" className='form-control borders' placeholder='Пёс с Уолл-стрит' />

                <h4>Вход в профиль с помщью 2FA</h4>
                <select name="" id="">
                  <option value="qwe">Выберите метод защиты</option>
                  <option value="qwe">Выберите метод защиты 2</option>
                  <option value="qwe">Выберите метод защиты 3</option>
                </select>

                <div className="d-flex align-items-center my-4">
                  <i><img src="/assets/icon/security.png" alt="" /></i>
                  <h3>При потере 2FA доступов, восстановить доступ к аккаунту можно будет только через 2FA ключи или службу поддержки</h3>
                </div>

                <button className="btn">Сохранить</button>

              </div>

              <div className="cardsBottom">
                <div className="d-flex align-items-center justify-content-between">
                  <h1>| Подписка</h1>
                  <i className="icon icon-info"></i>
                </div>

                <div className="bottomCards">
                  <div className="cardsTop">
                    <h2>1 МЕСЯЦ</h2>
                    <h3><span>6</span> AMARELL</h3>
                  </div>
                  <div className="cardsBottom">
                    <button className="btn">Продлить</button>
                    <button className="btn pinkBtn">Отменить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
            </div>
          </div>
        </div>
      </FullLayout>
    </>
  )
}

export default LicniyKabinet