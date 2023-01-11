import React from 'react'

export default function DataKontrak() {
  return (
    <div className="overflow-x-auto rounded shadow bg-white mb-4">
            <h2 className="px-4 py-2 text font-semibold bg-gray-300 mb-2 ">Data Kontrak</h2>
            <div className="space-y-2 px-4 pt-2">
          <div className='flex text-xs ' >
                <div className=' w-1/2 ' >
                    <div className='flex mb-5 ' >
                        <span className='w-2/5 pt-1 mr-2' >Total Nilai Taksiran</span>
                        <input type="text" name="" className='bg-white border border-black w-1/2 rounded-md px-1' id="" disabled  />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >LTV</p>
                        <input type="text" name="" className='bg-white border border-black w-1/5 py-1 rounded-md px-1' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >Maksimum Nilai Pinjaman</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >Nilai Pencairan Pelanggan</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >Biaya Admin Buka</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >Diskon Adm. Buka</p>
                        <span>

                            <input type="text" name="" className='bg-white border border-black w-2/5 mr-1 py-1 rounded-md px-1' id="" disabled />%
                        </span>
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >Biaya Admin Buka Akhir</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-2/5 pt-1 mr-2' >Total Nilai Pinjaman</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1' id="" disabled />
                    </div>
                </div>
                <div className=' w-1/2 '>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Tanggal Transaksi</p>
                        <select type="text" name="" className='bg-white border border-black w-full py-1 rounded-md px-1 ' id="" disabled > 
                            <option value="">1</option>
                        </select>
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Tgl Jatuh Tempo</p>
                        <input type="text" name="" className='bg-white border border-black w-full py-1 rounded-md px-1 ' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1 ' >Biaya Jasa Penyimpanan</p>
                        <div className='flex w-3/5 ' >
                            <span className='w-1/2' >
                                <input type="text" name="" className='bg-white border border-black w-3/5 py-1 rounded-md px-1 ' id="" disabled />%
                            </span>
                            <span className='w-1/2'>
                                Per
                            <input type="text" name="" className='bg-white border border-black w-2/5 py-1 rounded-md px-1 ' id="" disabled /> Bulan
                            </span>
                        </div>
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Biaya Jasa Penyimpanan / Periode</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1 ' id="" disabled />
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Total Biaya Jasa Penyimpanan</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1 ' id="" disabled /> 
                           
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Biaya Admin Tutup</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1 ' id="" disabled /> 
                        
                    </div>
                    <div className='flex mb-5' >
                        <p className='w-3/5 pt-1' >Total Pengembalian</p>
                        <input type="text" name="" className='bg-white border border-black w-1/2 py-1 rounded-md px-1 ' id="" disabled /> 
                    </div>
                </div>
            </div>
          </div>
        </div>
  )
}
