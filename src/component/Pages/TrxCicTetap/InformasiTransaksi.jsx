import { useState } from "react"
import { Link } from "react-router-dom"

export function InformasiTransaksi() {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    
    return (
        <div className="overflow-x-auto rounded shadow bg-white mb-4">
            <form className="mb-4">
                <div>
                    <div className="space-y-2 px-4 pt-2">
                        <div>
                            <h2 className="py-2 mb-2 text font-semibold">Informasi Transaksi</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="ml-4">
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Pelanggan*</h2>
                                            <input
                                                className="mx-4 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Tanggal Transaksi</h2>
                                            <input
                                                className="mx-4 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                value={date}
                                                readOnly
                                            // value={namaProduk}
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Nomor Transaksi</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            // value={tanggalTransaksi}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-4">
                                    <div className="mb-7 flex flex-row form-control">
                                        <h2 className="text-left text-sm py-1 w-1/2">Produk Transaksi*</h2>
                                        <select className="h-8 input py-0 w-full rounded border-black">
                                            <option value="ALL"></option>
                                            <option value="AKTIF">AKTIF</option>
                                        </select>
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-1/2">Nama Produk</h2>
                                        <input
                                            className="ml-1 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-1/2">Keterangan Produk</h2>
                                        <textarea
                                            className="ml-1 input input-bordered w-full h-16 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
