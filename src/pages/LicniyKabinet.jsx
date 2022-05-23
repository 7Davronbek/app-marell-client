import React from 'react'
import FullLayout from '../components/FullLayout'

const LicniyKabinet = () => {
  return (
    <>
      <FullLayout>
        <div className="licniyKabinet">
          <div className="row">
            <div className="col-lg-5">
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

              <div className="cardsBottom my-4 m-0">
                <div className="d-flex align-items-center justify-content-between mt-2 mb-4 wrap" >
                  <h1>| Подписка</h1>
                  <div className="icon icon-info cursor"> </div>
                  <div className="hidens">
                    <h4>Подписка даёт возможность участвовать в многоуровневой партнерской программе. </h4>
                    <h4 className='mt-4'>Приобретите подписку и зарабатывайте до 15% с покупок ваших партнеров.</h4>
                  </div>
                </div>

                <div className="bottomCards mt-2 mb-4">
                  <div className="cardsTop">
                    <h2>1 МЕСЯЦ</h2>
                    <h3><span>6</span> AMARELL</h3>
                  </div>
                  <div className="cardsBot">
                    <button className="btn">Продлить</button>
                    <button className="btn pinkBtn">Отменить</button>
                  </div>

                  <div className="cardsTop ">
                    <h2>12 МЕСЯЦ</h2>
                    <h3><span>53</span> AMARELL</h3>
                  </div>
                  <div className="cardsBot">
                    <button className="btn">УЛУЧШИТЬ</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rightCards mb-4 mb-lg-0">
                <div className="d-flex align-items flex-lg-row flex-column">
                  <div className='mr-2'>
                    <label htmlFor="name2">Имя</label>
                    <input type="text" id='name2' className="form-control" placeholder='Волк с Уолл-стрит' />
                  </div>
                  <div>
                    <label htmlFor="name3">Фамилия</label>
                    <input type="text" id='name3' className="form-control" placeholder='Волк с Уолл-стрит' />
                  </div>
                </div>
                <div className="d-flex align-items flex-lg-row flex-column">
                  <div className='mr-2'>
                    <label htmlFor="phone">Номер телефна</label>
                    <input type="text" id='phone' className="form-control" placeholder='Волк с Уолл-стрит' />
                  </div>
                  <div>
                    <label htmlFor="ru">Страна</label>
                    <input type="text" id='ru' className="form-control" placeholder='Волк с Уолл-стрит' />
                  </div>
                </div>
                <div className="d-flex align-items flex-lg-row flex-column">
                  <div className='mr-2'>
                    <label htmlFor="password">Смена пароля</label>
                    <input type="password" id='password' className="form-control" placeholder='Новый пароль' />
                  </div>
                  <div>
                    <label htmlFor="password2">Подтверждение пароля</label>
                    <input type="password" id='password2' className="form-control" placeholder='Волк с Уолл-стрит' />
                  </div>
                </div>

                <div className="d-flex align-items flex-lg-row flex-column">
                  <div className='mr-2'>
                    <label htmlFor="password3">Текущий пароль</label>
                    <input type="password" id='password3' className="form-control" placeholder='Новый пароль' />
                  </div>
                  <div>
                    <button className="btn">Сохранить</button>
                  </div>
                </div>

              </div>

              <div className="rightCards py-3 py-lg-0">
                <h1>| Адреса доставки</h1>

                <div className="d-flex align-items-center flex-lg-row flex-column">
                  <div className="mr-2 w-75">
                    <label htmlFor="index">Индекс</label>
                    <input type="text" className="form-control" id="index" />
                  </div>
                  <div className='w-75'>
                    <label htmlFor="index2">Адрес</label>
                    <input type="text" className="form-control" id="index2" />
                  </div>
                </div>

                <div className="d-flex align-items-center flex-lg-row flex-column">
                  <div className="mr-2 w-75">
                    <label htmlFor="index3">Индекс</label>
                    <input type="text" className="form-control" id="index3" />
                  </div>
                  <div className='w-75'>
                    <label htmlFor="index4">Адрес</label>
                    <input type="text" className="form-control" id="index4" />
                  </div>
                </div>

                <p>Добавить адрес +</p>

              </div>
            </div>
          </div>
        </div>
      </FullLayout>
    </>
  )
}

export default LicniyKabinet