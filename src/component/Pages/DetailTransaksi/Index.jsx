import React from 'react'
import { useNavigate } from 'react-router-dom'
import DaftarBarangGadai from './DaftarBarangGadai'
import DataKontrak from './DataKontrak'
import DataTagihan from './DataTagihan'

export default function Index() {
  const navigate = useNavigate()
  return (
    <div className="mt-5 md:col-span-2 md:mt-10 max-w-3xl mx-auto rounded">
      <h1 className="text-3xl font-bold mb-4">Transaksi Cicilan Tetap - Detail Transaksi</h1>
      <form className="mb-4">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <h2 className="px-4 py-2 mb-2 text font-semibold bg-gray-200">Informasi Transaksi</h2>
          <div className="space-y-2 px-4 pt-2">
          <div className='flex text-xs ' >
                <div className=' w-1/2 ' >
                    <div className='flex mb-5 ' >
                        <span className='w-1/4 pt-1 mr-2' >Pelanggan</span>
                        <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1' id="" />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1 mr-2' >Tanggal Transaksi</p>
                        <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1' id="" />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-1/4 pt-1 mr-2' >Nomor Transaksi</p>
                        <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1' id="" />
                    </div>
                </div>
                <div className=' w-1/2 '>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Produk Transaksi</p>
                        <select type="text" name="" className='bg-white border border-black w-full py-1 rounded-md px-1 ' id="" > 
                            <option value="">1</option>
                        </select>
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Nama Produk</p>
                        <input type="text" name="" className='bg-white border border-black w-full py-1 rounded-md px-1 ' id="" />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Keterangan Produk</p>
                        <select type="text" name="" className='bg-white border border-black w-full py-1 rounded-md px-1 ' id="" > 
                            <option value="">1</option>
                        </select>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </form>
      <DaftarBarangGadai />
      <DataKontrak />
      <DataTagihan/>
      <div className='flex justify-end mb-10' >
        
        <button
                className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-10 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                type="button"
                onClick={() => navigate('/pelanggan')}
              >
                Kembali
              </button>
      </div>
    </div>
  )
}
