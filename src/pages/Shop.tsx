import React from 'react'
import SingleProductCart from '../components/SingleProductCart';
import shopData from '../data/data.json'

export default function Shop() {
    return (
        <div>
            <h1 className='underline  underline-offset-8 font-bold text-center text-lime-500 dark:text-violet-600 py-10'>All Products</h1>
            <div className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly'>
                {shopData.map(data => (
                <SingleProductCart id={data.id} productName={data.productName} price={data.price}/>

                ))}
            </div>
        </div>
    )
}
