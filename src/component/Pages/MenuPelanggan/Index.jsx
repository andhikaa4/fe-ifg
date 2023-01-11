import React, { useState } from 'react'
import HasilPelanggan from './HasilPelanggan'
import { PelangganBaru } from './PelangganBaru'

export default function Index() {
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className="mt-5 md:col-span-2 md:mt-10 max-w-3xl mx-auto rounded">
      <h1 className="text-3xl font-bold mb-4">Pengaturan Pelanggan</h1>
      <form className="mb-4">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <h2 className="px-4 py-2 mb-2 text font-semibold bg-gray-200">Cari Data Pelanggan</h2>
          <div className="space-y-2 px-4 pt-2">
          <div className='flex text-xs ' >
                <div className=' w-3/5  ml-6 ' >
                    <div className='flex mb-5 ' >
                        <span className='w-1/4 pt-1' >No KTP</span>
                        <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1' id="" />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1' >Nama Pelanggan</p>
                        <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1' id="" />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1' >ID Customer</p>
                        <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1' id="" />
                    </div>
                </div>
                <div className=' w-2/5 '>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1' >Status</p>
                        <select type="text" name="" className='bg-white border border-black w-4/5 py-1 rounded-md px-1 ' id="" > 
                            <option value="">1</option>
                        </select>
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1' >Nomor HP</p>
                        <input type="text" name="" className='bg-white border border-black w-4/5 py-1 rounded-md px-1 ' id="" />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1' >Jenis Usaha</p>
                        <select type="text" name="" className='bg-white border border-black w-4/5 py-1 rounded-md px-1 ' id="" > 
                            <option value="">1</option>
                        </select>
                    </div>
                </div>
            </div>
          </div>
          <div className="px-4 pt-2 pb-6 text-center">
            <button
              className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
              type="submit"
            >
              Cari
            </button>
            <button
              className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
              type="button"
            >
              Kosongkan
            </button>
            {/* <Link to="/user-new-setting"> */}
            <button
              className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
              type="button"
              onClick={() => setOpenForm(true)}
            >
              Pelanggan Baru
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
      {openForm ? (<PelangganBaru onClick={() => setOpenForm(false)} />) : null}
      <HasilPelanggan />
    </div>
  )
}
