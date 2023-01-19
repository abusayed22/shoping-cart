
import React from 'react'


function SingleProductCart() {
    return (
        <div className=''>
            <div className='w-80 h-96 md:w-52 bg-red-300 my-3 flex justify-center items-center  md:h-72 rounded-lg md:rounded-md shadow-2xl bg-opacity-100 md:mx-5'>
                <div className='w-64 h-80 md:w-44 md:h-64 rounded-2xl bg-red-100 flex flex-col items-center justify-end'>
                    <section></section>
                    <b>pant</b>
                    <p>Price: <span>1290</span></p>
                    <section>
                        <button>
                            <img className='relative rounded-full h-10 w-10 bg-rose-600 mr-3' width={'40px'} height={'40px'} src={require('../icons/cart.png')} alt="" />
                            {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span> */}
                            {/* <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
                        </button>
                        <button>
                            <svg className='hover:bg-rose-400 hover:rounded-3xl' width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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