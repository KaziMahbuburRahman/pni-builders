import Sidebar from '@/Components/AdminComponents/Sidebar'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }) {
    return (
        <>

            <div>
                <ToastContainer theme='dark' />
                <Sidebar />
            </div>
            {children}
        </>
    )
}
