import React from 'react'
import SingleProductCart from '../components/SingleProductCart'

export default function Shop() {
    return (
        <div>
            <h1 className='underline  underline-offset-8 font-bold text-center text-lime-500 dark:text-violet-600 py-10'>All Products</h1>
            <div className='flex md:justify-between px-[20%] md:px-[10%] flex-wrap'>
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
            </div>
        </div>
    )
}
