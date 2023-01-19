import React from 'react'
import SingleProductCart from '../components/SingleProductCart'

export default function Shop() {
    return (
        <div>
            <h1 className='underline  underline-offset-8 font-bold text-center text-lime-500 dark:text-violet-600 py-10'>All Products</h1>
            <div className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly'>
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
            </div>
        </div>
    )
}
