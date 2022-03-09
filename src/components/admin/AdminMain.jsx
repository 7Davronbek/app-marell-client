import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from './AdminLayout'

const AdminMain = () => {
    return (
        <>
         <AdminLayout>
             <div className="d-flex align-items-center">
                 <Link to='/' className="myCard">
                    <h5>Активные заказы</h5>
                    <p>Ближайшая: не ожидаетс</p>
                    
                 </Link>
             </div>
        </AdminLayout>   
        </>
    )
}

export default AdminMain
