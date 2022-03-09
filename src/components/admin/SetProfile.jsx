import React from 'react'
import AdminLayout from './AdminLayout'

const SetProfile = () => {
    return (
        <>
            <AdminLayout>
                <div className="row">
                    <div className="col-7 offset-2">
                        <div className="setProfile">
                            <div className="card">
                                <div className="card-body">
                                    <form>

                                        <label htmlFor="login">Логин</label>
                                        <input type="text" id='login' className='form-control' />

                                        <label htmlFor="name">Имя</label>
                                        <input type="text" id='name' className='form-control' />

                                        <label htmlFor="surname">Фамилия</label>
                                        <input type="text" id='surname' className='form-control' />

                                        <label htmlFor="birthday">Дата рождения</label>
                                        <input type="text" id='birthday' className='form-control' />

                                        <label htmlFor="sex">Пол</label>
                                        <input type="text" id='sex' className='form-control' />

                                        <label htmlFor="changePhone">Изменить телефон</label>
                                        <input type="text" id='changePhone' className='form-control' />

                                        <label htmlFor="changeEmail">Изменить email</label>
                                        <input type="text" id='changeEmail' className='form-control' />

                                        <button className="btn">Сохранить изменения</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default SetProfile