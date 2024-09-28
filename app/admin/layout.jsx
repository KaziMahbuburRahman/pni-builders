import Sidebar from '@/Components/AdminComponents/Sidebar'
import { getServerSession } from 'next-auth';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Layout({ children }) {
const session = await getServerSession(authOptions);
console.log("session",session);
if (!session || session.user.role !== 'admin') {
  redirect('/login');
}
    return (
        <>

            <div>
                <ToastContainer theme='dark' />
                <Sidebar />
                <div className='lg:mb-0 mb-14'></div>
            </div>
            {children}
        </>
    )
}
