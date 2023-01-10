import { useState } from "react"

export function DataKontrak(props) {
    const { onClick = null } = props
    return (
        <div className="overflow-x-auto rounded shadow bg-white mb-6">
            <form className="mb-4">
                <div>
                    <div className="space-y-2 px-4 pt-2">
                        <div>
                            <h2 className="py-2 mb-2 text font-semibold">Data Kontrak</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="ml-4">
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Total Nilai Taksiran</h2>
                                            <input
                                                className="mx-4 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-2/6">LTV %</h2>
                                            <div>
                                                <input
                                                    className="text-left input input-bordered w-1/2 h-8 rounded border-black bg-gray-300"
                                                // value={namaProduk}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm w-1/2">Nilai Pencairan Pelanggan*</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black"
                                            // value={tanggalTransaksi}
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Biaya Admin Buka</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            // value={tanggalTransaksi}
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-2/6">Diskon Adm. Buka*</h2>
                                            <div className="flex flex-row">
                                                <input
                                                    className="text-left input input-bordered w-1/2 h-8 rounded border-black bg-gray-300"
                                                // value={namaProduk}
                                                />
                                                <h2 className="pl-1">%</h2>
                                            </div>
                                        </div>
                                        <div className="mb-5 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm w-1/2">Biaya Admin Buka Akhir</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            // value={tanggalTransaksi}
                                            />
                                        </div>
                                        <div className="mb-5 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm w-1/2">Total Nilai Pinjaman</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            // value={tanggalTransaksi}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-4">
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-1/2">Tanggal Transaksi</h2>
                                        <input
                                            className="input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-1/2">Tanggal Jatuh Tempo</h2>
                                        <input
                                            className="input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-full">Biaya Jasa Penyimpanan</h2>
                                        <div className="w-full ml-7 flex flex-row">
                                            <input
                                                className="input input-bordered w-1/6 h-8 rounded border-black bg-gray-300"
                                            />
                                            <h2 className="px-1">%</h2>
                                            <h2 className="pl-3 pr-1">per</h2>
                                            <input
                                                className="input input-bordered w-1/6 h-8 rounded border-black bg-gray-300"
                                            />
                                            <h2 className="pl-1">bulan</h2>
                                        </div>
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left py-1 text-sm w-3/5">Biaya Jasa Penyimpanan/Periode</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left py-1 text-sm w-3/5">Total Biaya Jasa Penyimpanan</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/5">Biaya Admin Tutup</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/5">Total Pengembalian</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 pb-7 pt-5 flex flex-row-reverse">
                                <button
                                    className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="submit"
                                >
                                    Simpan
                                </button>
                                <button
                                    className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="button"
                                >
                                    Hitung
                                </button>
                                <button
                                    className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="button"
                                    onClick={onClick}
                                >
                                    Kembali
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
