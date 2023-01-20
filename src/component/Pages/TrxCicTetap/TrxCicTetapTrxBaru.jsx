import { InformasiTransaksi } from "./InformasiTransaksi"
import { DataKontrakGadai } from "./DataKontrak&Gadai"

export function TrxCicTetapTrxBaru(props) {
    const { onClick = null } = props
    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full">
            <div className="mt-5 md:col-span-2 md:mt-10 max-w-4xl mx-auto rounded">
                <form className="mb-4">
                    <div className="shadow sm:overflow-hidden sm:rounded-md bg-white px-4">
                        <h1 className="text-3xl pt-4 pb-2 px-1 font-bold">Transaksi Cicilan Tetap - Transaksi Baru</h1>
                        <hr />
                        <div className="space-y-2 px-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h2 className="py-2 mb-2 text font-semibold">Cari Data Pelanggan</h2>
                                    <div className="ml-4">
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">ID Pelanggan</h2>
                                            <input
                                                className="mx-4 input input-bordered w-full h-8 rounded border-black"
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Nama Pelanggan</h2>
                                            <input
                                                className="mx-4 input input-bordered w-full h-8 rounded border-black"
                                            // value={namaProduk}
                                            // onChange={(e) => setNamaProduk(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Nomor KTP</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black"
                                            // value={tanggalTransaksi}
                                            // onChange={(e) => setTanggalTransaksi(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Nomor HP</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black"
                                            // value={nomorTransaksi}
                                            // onChange={(e) => setNomorTransaksi(e.target.value)}
                                            />
                                        </div>
                                        <div className="p-4 text-right">
                                            <button
                                                className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                                                type="submit"
                                            >
                                                Cari
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-6">
                                    <h2 className="py-2 mb-2 text font-semibold">Hasil Pencarian</h2>
                                    <div className="w-full flex flex-row form-control">
                                        <textarea
                                            className="ml-1 input input-bordered w-full rounded border-black textarea textarea-info h-56"
                                        // value={nomorKTP}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <InformasiTransaksi />
                <DataKontrakGadai onClick={onClick} />
            </div>
        </div>
    )
}
