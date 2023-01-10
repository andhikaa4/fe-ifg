import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PengaturanUserDetail } from "./PengaturanUserDetail";

export function HasilPencarian() {
    const [openForm, setOpenForm] = useState(false)

    return (
        <div className="overflow-x-auto rounded shadow bg-white">
            <h2 className="px-4 py-2 text font-semibold bg-gray-300 mb-2 ">Hasil Pencarian</h2>
            <div className="px-10">
                <table className="my-5 table-auto w-full border-collapse border border-black">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="text-center py-1 text-sm border border-black">User Id</th>
                            <th className="text-center py-1 text-sm border border-black">User Name</th>
                            <th className="text-center py-1 text-sm border border-black">Limit Transaksi</th>
                            <th className="text-center py-1 text-sm border border-black">Status</th>
                            <th className="text-center py-1 text-sm border border-black">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black"><Link className="hover:text-indigo-900 hover:underline active:text-violet-700" onClick={() => setOpenForm(true)}>Detail</Link></td>
                        </tr>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black"><Link className="hover:text-indigo-900 hover:underline active:text-violet-700" onClick={() => setOpenForm(true)}>Detail</Link></td>
                        </tr>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black"><Link className="hover:text-indigo-900 hover:underline active:text-violet-700" onClick={() => setOpenForm(true)}>Detail</Link></td>
                        </tr>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black"><Link className="hover:text-indigo-900 hover:underline active:text-violet-700" onClick={() => setOpenForm(true)}>Detail</Link></td>
                        </tr>
                        <tr>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black">cek</td>
                            <td className="text-center text-sm py-1 border border-black"><Link className="hover:text-indigo-900 hover:underline active:text-violet-700" onClick={() => setOpenForm(true)}>Detail</Link></td>
                        </tr>
                    </tbody>
                </table>
                {openForm ? (<PengaturanUserDetail onClick={() => setOpenForm(false)} />) : null}
                <div className="flex flex-row-reverse items-center px-4 pb-4">
                    <div>
                        <button
                            className="inline-flex justify-center rounded border bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 rounded-r-none"
                            type="button"
                        >
                            {`<`}
                        </button>
                        <button
                            className="inline-flex justify-center rounded rounded-l-none border bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                            type="button"
                        >
                            {`>`}
                        </button>
                    </div>
                    <div className="flex flex-row mr-5">
                        <h2>Halaman</h2>
                        <div className="px-3 py-1 mx-2 bg-gray-300 text-sm rounded">{`0`}</div>
                        <h2>dari</h2>
                        <div className="px-3 py-1 ml-3 bg-gray-300 text-sm rounded">{`0`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}