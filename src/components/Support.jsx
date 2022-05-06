import React, { useEffect, useState } from 'react'
// import LeftLayout from './LeftLayout'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';
import EyeAnimation from './EyeAnimation';
import FullLayout from './FullLayout';

const Support = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="support">
            {isLoading ? (
                <div className="loader">
                    <div className={`eye cursor text-center `}>
                        <EyeAnimation />
                    </div>
                </div>
            ) : (
                ""
            )}

            <FullLayout>

                <div className="row myRow">
                    <div className="col-5">
                        <h2>MARELL FAQ</h2>

                        <p>Здесь вы найдете ответы на часто задаваемые вопросы о платформе Marell.store.</p>

                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Что такое Marell.store?
                                        <i className="icon icon-info"></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h6>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </h6>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Для кого предназначена платформа Marell.store?
                                        <i className="icon icon-info"></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h6>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </h6>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Важен ли мой опыт и возраст для участия?
                                        <i className="icon icon-info"></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h6>
                                        Плащадка  Marell.store для лиц старше 18 лет.
                                    </h6>

                                    <h6 className="mt-4">Ваш опыт неважен, главное чтобы вы были активным человеком. Чем больше активность, тем выше заработок.</h6>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Для кого предназначена платформа Marell.store?
                                        <i className="icon icon-info"></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h6>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </h6>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Для кого предназначена платформа Marell.store?
                                        <i className="icon icon-info"></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h6>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </h6>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Для кого предназначена платформа Marell.store?
                                        <i className="icon icon-info"></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <h6>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </h6>
                                </AccordionItemPanel>
                            </AccordionItem>

                        </Accordion>

                    </div>

                    <div className="col-7">
                        <div className="top">
                            <button className="btn">Доставка и Оплата</button>
                            <button className="btn">Условия Возврата</button>
                            <button className="btn">СотрудничествоОплата</button>
                        </div>

                        <div className="middle">
                            <h4>Способы получить свой заказ в России и СНГ:</h4>


                            <h4>•	Курьерская доставка (без примерки) по Москве в пределах МКАД</h4>

                            <h4>•	Доставка курьерской службой СДЭК в пункт выдачи
                                Курьерская доставка по Москве в пределах МКАД
                                Стоимость: 350 рублей</h4>

                            <h4>Способ оплаты: банковской картой (заказ отправляем при 100% оплате)</h4>

                            <h4>Если у вас возникли вопросы, напишите в диалоговое окно раздела «Поддержка». Наши специалисты помогут вам в кротчайшие сроки.</h4>

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>

                        <div className="bottom">
                            <div className="bottomCard">
                            <div className="admin_text">
                                    <span><img src="/assets/image/marellMini2.png" alt="" /></span>
                                    <h3>Подробно опишите возникшую проблему и оставьте контакт для связи. Мы постараемся помочь вам в кротчайшее время.</h3>
                                </div>
                                <div className="user_text">
                                    <h3>Не приходят реферальные </h3>
                                    <div className="circle"></div>
                                </div>
                            </div>

                            <div className="main_text">
                                <input type="text" placeholder='|' className="form-control" />
                                <span><img src="/assets/icon/telegram.svg" alt="" /></span>
                                <span><img src="/assets/icon/file.svg" alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                <div className="btnWrap">

                    <Link className='a' to='/support/delivery-and-payment'>Доставка и Оплата</Link>
                    <Link className='a' to='/support/return-basis'>Условия Возврата</Link>
                    <Link className='a' to='/support/partnership'>Сотрудничество</Link>

                </div> */}
            </FullLayout>

        </div>
    )
}

export default Support
