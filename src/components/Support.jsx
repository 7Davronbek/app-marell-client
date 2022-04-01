import React from 'react'
import { Link } from 'react-router-dom'
import LeftLayout from './LeftLayout'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

const Support = () => {
    return (
        <div className="support">

            <LeftLayout>
                <h2>Поддержка</h2>

                <p className="w-50">Подробно опишите возникшую проблему, мы постараемся  помочь вам в кротчайшее время.</p>

                <div className="col-12">
                    <Accordion>
                        <AccordionItem data-aos='fade-right'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What harsh truths do you prefer to ignore?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem data-aos='fade-right'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem data-aos='fade-right'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What harsh truths do you prefer to ignore?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem data-aos='fade-right'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                    </Accordion>

                </div>

                {/* 
                <div className="btnWrap">

                    <Link className='a' to='/support/delivery-and-payment'>Доставка и Оплата</Link>
                    <Link className='a' to='/support/return-basis'>Условия Возврата</Link>
                    <Link className='a' to='/support/partnership'>Сотрудничество</Link>

                </div> */}
            </LeftLayout>

        </div>
    )
}

export default Support
