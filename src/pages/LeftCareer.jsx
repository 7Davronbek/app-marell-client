import React from 'react'
import FullLayout from '../components/FullLayout'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
            <div className="col-5 left">
              <h1>| Командные бонусы</h1>
              <div className="myCards">
                <div className="cardsLeft">
                  <h6>1%</h6>
                  <h3>2%</h3>
                </div>
                <div className="">

                  <div className="cardsRight blue ">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Текущий процент</h5>
                      <h5>1%</h5>
                    </div>
                  </div>

                  <div className="cardsRight">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>ЛО</h5>
                      <h5>00.00 AMARELL </h5>
                    </div>
                  </div>

                  <div className="cardsRight pink active">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Следующий процент</h5>
                      <h5>2%</h5>
                    </div>
                  </div>

                  <div className="cardsRight">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Необходимый КО</h5>
                      <h5>00.00 AMARELL </h5>
                    </div>
                  </div>

                  <div className="cardsRight">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Осталось КО до уровня </h5>
                      <h5>00.00 AMARELL </h5>
                    </div>
                  </div>

                  <div className="cardsRight">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Обязательный ЛО</h5>
                      <h5>Подписка / ЛО $50 </h5>
                    </div>
                  </div>

                  <div className="cardsRight">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4>Единоразовый бонус за уровень</h4>
                      <h4>Доступен с уровня 4%</h4>
                    </div>
                  </div>

                </div>
              </div>
              <div className="arrow">
                <h3>Посмотреть таблицу бонусов</h3>
                <div className="icon icon-down"></div>
              </div>
            </div>
            <div className="col-7 right">
              <h2>| Моя команда</h2>

              <div className="cards">
                <div className="cardsHeader">
                  <div className="mini">
                    <h3>5 000</h3>
                    <h4>Всего людей в команде</h4>
                  </div>
                  <div className="mini">
                    <h3>1 126</h3>
                    <h4>Акивных людей в команде</h4>
                  </div>
                  <div className="mini">
                    <h3>10 126</h3>
                    <h4>Карьерный оборот <span><img src="/assets/icon/i.png" alt="" /></span></h4>

                    <div className="hover">
                      <h6>Учитывается:</h6>

                      <h6>100% ЛО партнёров 1-й линии и 50% инвестиций партнёров от 2-й линии и на всю глубину Вашей струкуры.</h6>

                      <h6>Максимальный оборот с одной ветки - 50% для достижения ближайшего статуса.</h6>

                    </div>

                  </div>
                  <div className="mini">
                    <h3>10 126 000</h3>
                    <h4>Общий оборот</h4>
                  </div>
                </div>

                <div className="cardsMid">
                  <div className="left">
                    <i><img src="/assets/icon/search_24.svg" alt="" /></i>
                    <input type="text" className='form-control' placeholder='Введите ИМЯ/НИК или ID пользоваеля...' />
                    <div className="d-flex myBtn">
                      Вернуться
                      <span><img src="/assets/icon/close.png" alt="" /></span>
                    </div>
                  </div>

                  <div className="right">
                    <h5>По дате регистрации</h5>
                    <div className="hiden">
                      <h5>По имени</h5>
                      <h5>По ЛО</h5>
                    </div>
                  </div>
                </div>


                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="cardsBottom">
                          <div className="cardsBottomLeft">
                            <i><img src="/assets/icon/plus.svg" alt="" /></i>
                            <div className="circle"></div>
                            <div>
                              <h1>Username1</h1>
                              <h2>Уровень: 1</h2>
                            </div>
                          </div>
                          <div className="cardsBottomRight ml-auto">
                            <div>
                              <h3>50.00 AMARELL</h3>
                              <h4>ЛО</h4>
                            </div>
                            <span className='icon icon-info'></span>
                          </div>
                        </div>

                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                      <div className="cardsBottom inner">
                        <div className="cardsBottomLeft">
                          <i><img src="/assets/icon/plus.svg" alt="" /></i>
                          <div className="circle"></div>
                          <div>
                            <h1>Username1</h1>
                            <h2>Уровень: 1</h2>
                          </div>
                        </div>
                        <div className="cardsBottomRight ml-auto">
                          <div>
                            <h3>50.00 AMARELL</h3>
                            <h4>ЛО</h4>
                          </div>
                          <span className='icon icon-info'></span>
                        </div>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="cardsBottom">
                          <div className="cardsBottomLeft">
                            <i><img src="/assets/icon/plus.svg" alt="" /></i>
                            <div className="circle"></div>
                            <div>
                              <h1>Username1</h1>
                              <h2>Уровень: 1</h2>
                            </div>
                          </div>
                          <div className="cardsBottomRight ml-auto">
                            <div>
                              <h3>50.00 AMARELL</h3>
                              <h4>ЛО</h4>
                            </div>
                            <span className='icon icon-info'></span>
                          </div>
                        </div>

                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                      <div className="cardsBottom inner">
                        <div className="cardsBottomLeft">
                          <i><img src="/assets/icon/plus.svg" alt="" /></i>
                          <div className="circle"></div>
                          <div>
                            <h1>Username1</h1>
                            <h2>Уровень: 1</h2>
                          </div>
                        </div>
                        <div className="cardsBottomRight ml-auto">
                          <div>
                            <h3>50.00 AMARELL</h3>
                            <h4>ЛО</h4>
                          </div>
                          <span className='icon icon-info'></span>
                        </div>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="cardsBottom">
                          <div className="cardsBottomLeft">
                            <i><img src="/assets/icon/plus.svg" alt="" /></i>
                            <div className="circle"></div>
                            <div>
                              <h1>Username1</h1>
                              <h2>Уровень: 1</h2>
                            </div>
                          </div>
                          <div className="cardsBottomRight ml-auto">
                            <div>
                              <h3>50.00 AMARELL</h3>
                              <h4>ЛО</h4>
                            </div>
                            <span className='icon icon-info'></span>
                          </div>
                        </div>

                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                      <div className="cardsBottom inner">
                        <div className="cardsBottomLeft">
                          <i><img src="/assets/icon/plus.svg" alt="" /></i>
                          <div className="circle"></div>
                          <div>
                            <h1>Username1</h1>
                            <h2>Уровень: 1</h2>
                          </div>
                        </div>
                        <div className="cardsBottomRight ml-auto">
                          <div>
                            <h3>50.00 AMARELL</h3>
                            <h4>ЛО</h4>
                          </div>
                          <span className='icon icon-info'></span>
                        </div>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="cardsBottom">
                          <div className="cardsBottomLeft">
                            <i><img src="/assets/icon/plus.svg" alt="" /></i>
                            <div className="circle"></div>
                            <div>
                              <h1>Username1</h1>
                              <h2>Уровень: 1</h2>
                            </div>
                          </div>
                          <div className="cardsBottomRight ml-auto">
                            <div>
                              <h3>50.00 AMARELL</h3>
                              <h4>ЛО</h4>
                            </div>
                            <span className='icon icon-info'></span>
                          </div>
                        </div>

                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                      <div className="cardsBottom inner">
                        <div className="cardsBottomLeft">
                          <i><img src="/assets/icon/plus.svg" alt="" /></i>
                          <div className="circle"></div>
                          <div>
                            <h1>Username1</h1>
                            <h2>Уровень: 1</h2>
                          </div>
                        </div>
                        <div className="cardsBottomRight ml-auto">
                          <div>
                            <h3>50.00 AMARELL</h3>
                            <h4>ЛО</h4>
                          </div>
                          <span className='icon icon-info'></span>
                        </div>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </FullLayout>

    </>
  )
}

export default LeftCareer