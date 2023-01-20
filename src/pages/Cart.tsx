import React from 'react'

export default function Cart() {
  return (
    <div className='w-[450px] md:w-[550px] h-[80vh] bg-slate-100 mx-auto my-8 shadow-xl rounded-md'>
      <h3 className='font-bold pt-5 pl-3 text-cyan-500 underline underline-offset-8'>Shoping Cart..</h3>
      <br />
      <hr />
      {/* Table */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-900 uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-lime-500">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              
              <td className="px-6 py-4">
                <div>
                  <button className='text-3xl text-rose-600'>+</button>
                  <> $<b>1250</b> </>
                  <button className='text-[40px] text-rose-600'>-</button>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
        
        <br />
      </div>
      <div className='w-[82%]'>
          <div className='flex justify-end  '>
          <h3 className='underline'>Total: </h3>
          <b className='text-red-600 ml-2'> 14690</b>
          </div>
        </div>
    </div>
  )
}
