import React from 'react'
import { Link } from 'react-router-dom';
import shoping from '../icons/icons8-shopping-mall-48.png'
function Header() {
    return (
        <div className='h-14 w-screen bg-rose-400'>
            <ul className='flex py-[10px] justify-center '>
                <li><Link className='w-32 text-white hover:text-lime-300 border-none mx-2 opacity-60' to='/'>Home</Link></li>
                <li><Link className='mx-2 text-white hover:text-lime-300' to='/shop'>Shop</Link></li>

                <Link className='ml-[30px]' to='/cart'>
                    <div className='relative w-[40px]'>
                        <img width={'25px'} src={shoping} alt="" />
                    <h1 className='absolute font-bold animate-ping right-2 top-[-9px]'><span>12</span></h1>
                    </div>
                </Link>
            </ul>
        </div>
    )
}

export default Header