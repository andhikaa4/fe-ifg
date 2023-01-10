import { useState } from "react"
import { Link } from "react-router-dom"

export function DaftarBarangGadai() {
    return (
        <div className="overflow-x-auto rounded shadow bg-white mb-4">
            <form className="mb-4">
                <div>
                    <div className="space-y-2 px-4 pt-2">
                        <div>
                            <h2 className="py-2 mb-2 text font-semibold">Daftar Barang Gadai*</h2>
                            <div className="grid grid-cols-1">
                                <div className="mr-5">
                                    <div className="ml-4 flex flex-row space-x-5">
                                        <div className="mb-7 form-control w-2/3">
                                            <h2 className="text-left text-sm pb-3">Nama Barang</h2>
                                            <input
                                                className="input input-bordered w-full h-8 rounded border-black"
                                            />
                                        </div>
                                        <div className="mb-7 form-control w-3/4">
                                            <h2 className="text-left text-sm pb-3">Deskripsi</h2>
                                            <textarea
                                                className="textarea input input-bordered w-full h-8 rounded border-black"
                                            />
                                        </div>
                                        <div className="mb-7 form-control w-1/3">
                                            <h2 className="text-left text-sm pb-3">Jumlah</h2>
                                            <input
                                                className="input input-bordered w-full h-8 rounded border-black"
                                            />
                                        </div>
                                        <div className="mb-7 form-control w-1/2">
                                            <h2 className="text-left text-sm pb-3">Harga Per Satuan</h2>
                                            <input
                                                className="input input-bordered w-full h-8 rounded border-black"
                                            />
                                        </div>
                                        <div className="form-control w-1/6">
                                            <button className="bg-gray-300 my-8 h-8 rounded border shadow-sm border-black hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 font-bold">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-3">
                                    <table className="my-2 table-auto w-full border-collapse border border-black">
                                        <thead>
                                            <tr className="bg-gray-300">
                                                <th className="text-center py-1 text-sm border border-black">No</th>
                                                <th className="text-center py-1 text-sm border border-black">Nama Barang</th>
                                                <th className="text-center py-1 text-sm border border-black">Kondisi</th>
                                                <th className="text-center py-1 text-sm border border-black">Jumlah Barang</th>
                                                <th className="text-center py-1 text-sm border border-black">Harga Per Satuan</th>
                                                <th className="text-center py-1 text-sm border border-black">Total</th>
                                                <th className="text-center py-1 text-sm border border-black w-9"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center text-sm py-1 border border-black">1</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center font-semibold border border-black text-xl"><button>-</button></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-sm py-1 border border-black">2</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center font-semibold border border-black text-xl"><button>-</button></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-sm py-1 border border-black">3</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center font-semibold border border-black text-xl"><button>-</button></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-sm py-1 border border-black">4</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center font-semibold border border-black text-xl"><button>-</button></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-sm py-1 border border-black">5</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center text-sm py-1 border border-black">cek</td>
                                                <td className="text-center font-semibold border border-black text-xl"><button>-</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
