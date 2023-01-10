import React, { useState } from "react"

export function PengaturanUserDetail(props) {
    const { onClick = null } = props
    const [openForm, setOpenForm] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full">
            <div className="mt-5 md:col-span-2 md:mt-7 max-w-2xl mx-auto rounded">
                <form className="mb-4">
                    <div className="shadow sm:overflow-hidden sm:rounded-md bg-white px-4">
                        <h1 className="text-3xl p-4 font-bold">Pengaturan User - Detail</h1>
                        <div className="space-y-2 px-2">
                            <div className="grid">
                                <div className="col-span-2 m-5">
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">User Id</h2>
                                        <input
                                            className="mx-2 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nama User</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nomor HP</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Keterangan</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Maksimal Limit Transaksi User</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Tanggal Masuk</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Tanggal Buat/Oleh</h2>
                                        <input
                                            className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Tanggal Update Terakhir/Oleh</h2>
                                        <input
                                            className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {openForm === false ? (
                            <div className="px-12 pb-5 flex flex-row-reverse">
                                <button
                                    className="ml-24 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="button"
                                    onClick={() => setOpenForm(true)}
                                >
                                    Ubah
                                </button>
                                <button
                                    className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="button"
                                >
                                    Hapus
                                </button>
                                <button
                                    className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="button"
                                    onClick={onClick}
                                >
                                    Kembali
                                </button>
                            </div>
                        ) : (
                            <div className="px-4 pb-10 text-center">
                                <button
                                    className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="button"
                                    onClick={onClick}
                                >
                                    Kembali
                                </button>
                                <button
                                    className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                    type="submit"
                                >
                                    Simpan
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
