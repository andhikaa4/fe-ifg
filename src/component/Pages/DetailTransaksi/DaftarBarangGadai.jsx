import React, { useState } from 'react'

export default function DaftarBarangGadai() {
  return (
    <div className="overflow-x-auto rounded shadow bg-white mb-4 ">
            <h2 className="px-4 py-2 text font-semibold bg-gray-300 mb-2 ">Hasil Pencarian</h2>
            <div className="px-4">
                <table className="my-5 table-auto w-full border-collapse border border-black">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="text-center py-1 text-sm border border-black">No</th>
                            <th className="text-center py-1 text-sm border border-black">Nama Barang</th>
                            <th className="text-center py-1 text-sm border border-black">Kondisi</th>
                            <th className="text-center py-1 text-sm border border-black">Jlh Barang</th>
                            <th className="text-center py-1 text-sm border border-black">Harga Per Satuan</th>
                            <th className="text-center py-1 text-sm border border-black">Total</th>
                            <th className="text-center py-1 text-sm border border-black"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black"></td>
                            <td className="text-center text-sm py-1 border border-black"></td>
                            <td className="text-center text-sm py-1 border border-black"></td>
                            <td className="text-center text-sm py-1 border border-black"></td>
                            <td className="text-center text-sm py-1 border border-black"></td>
                            <td className="text-center text-sm py-1 border border-black"></td>
                            <td className="text-center text-sm py-1 border border-black">-</td>
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>
        </div>
  )
}
