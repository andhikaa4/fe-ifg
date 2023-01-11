import React, { useState } from 'react'

export default function DataTagihan() {
  return (
    <div className="overflow-x-auto rounded shadow bg-white mb-4 ">
            <h2 className="px-4 py-2 text font-semibold bg-gray-300 mb-2 ">Data Tagihan Cicilan dan Pembayaran Pelanggan</h2>
            <div className="px-4">
                <table className="my-5 table-auto w-full border-collapse border border-black">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="text-center py-1 text-sm border border-black">No Transaksi</th>
                            <th className="text-center py-1 text-sm border border-black">Cicilan Ke</th>
                            <th className="text-center py-1 text-sm border border-black">Pokok</th>
                            <th className="text-center py-1 text-sm border border-black">B. Jasa Penyimpanan</th>
                            <th className="text-center py-1 text-sm border border-black">Denda Terlambat</th>
                            <th className="text-center py-1 text-sm border border-black">Total Tagihan</th>
                            <th className="text-center py-1 text-sm border border-black">Status Cicilan</th>
                            <th className="text-center py-1 text-sm border border-black">Tanggal Aktif Cicilan</th>
                            <th className="text-center py-1 text-sm border border-black">Tanggal Bayar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black">xxx</td>
                            <td className="text-center text-sm py-1 border border-black">1</td>
                            <td className="text-center text-sm py-1 border border-black">200.000</td>
                            <td className="text-center text-sm py-1 border border-black">2.000</td>
                            <td className="text-center text-sm py-1 border border-black">0</td>
                            <td className="text-center text-sm py-1 border border-black">202.000</td>
                            <td className="text-center text-sm py-1 border border-black">Dibayar</td>
                            <td className="text-center text-sm py-1 border border-black">1 Jan 2023</td>
                            <td className="text-center text-sm py-1 border border-black">30 Jan 2023</td>
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>
        </div>
  )
}
