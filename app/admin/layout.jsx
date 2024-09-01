import Sidebar from '@/Components/AdminComponents/Sidebar'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <div>
                <Sidebar />
            </div>
            {children}
        </>
    )
}
