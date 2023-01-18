
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import Cart from '../icons/cart.png'
function SingleProductCart() {
    return (
        <div className=''>
            <div className='w-80 h-96 md:w-52 bg-black my-3 flex justify-center items-center  md:h-72 rounded-lg md:rounded-md shadow-2xl bg-opacity-100'>
                <div className='w-64 h-80 md:w-44 md:h-64 rounded-2xl bg-slate-200 flex flex-col items-center justify-end'>
                    <section></section>
                    <p>product name</p>
                    <section>
                        <button>
                            <img width='30px' src={require('../icons/cart.png')} alt="" />
                        </button>
                        <button>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8456 6.42726L12 6.59097L12.1544 6.42726C14.132 4.33053 17.4026 4.57697 19.0807 6.94915C20.57 9.05459 20.2133 12.0335 18.275 13.6776L12 19L5.725 13.6776C3.78668 12.0335 3.42999 9.05459 4.91934 6.94915C6.59738 4.57698 9.86801 4.33053 11.8456 6.42726Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default SingleProductCart