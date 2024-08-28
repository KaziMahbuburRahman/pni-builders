import Navbar from '@/Components/shared/Navbar'
import React from 'react'
import Newsletter from './shared/Newsletter'
import Blogcard from './cards/Blogcard'

export const Header = () => {
    return (
        <div>
            <Navbar />
            <Newsletter />
            
        </div>
    )
}
