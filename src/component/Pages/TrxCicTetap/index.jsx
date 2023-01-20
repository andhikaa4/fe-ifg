import { useState } from "react"
import { HasilPencarian } from "./HasilPencarian"
import { TrxCicTetapTrxBaru } from "./TrxCicTetapTrxBaru"

export function TransaksiCicilanTetap() {
    const [kodeProduk, setKodeProduk] = useState("")
    const [namaProduk, setNamaProduk] = useState("")
    const [tanggalTransaksiAwal, setTanggalTransaksiAwal] = useState("")
    const [tanggalTransaksiAkhir, setTanggalTransaksiAkhir] = useState("")
    const [nomorTransaksi, setNomorTransaksi] = useState("")
    const [statusTransaksi, setStatusTransaksi] = useState("ALL")
    const [nomorKTP, setNomorKTP] = useState("")
    const [idPelanggan, setIdPelanggan] = useState("")
    const [namaPelanggan, setNamaPelanggan] = useState("")

    const [openForm, setOpenForm] = useState(false)

    const onDelete = () => {
        setKodeProduk("")
        setNamaProduk("")
        setTanggalTransaksiAwal("")
        setTanggalTransaksiAkhir("")
        setNomorTransaksi("")
        setStatusTransaksi("")
        setNomorKTP("")
        setIdPelanggan("")
        setNamaPelanggan("")
    }

    return (
        <div className="mt-5 md:col-span-2 md:mt-10 max-w-4xl mx-auto rounded">
            <h1 className="text-3xl font-bold mb-4">Transaksi Cicilan Tetap</h1>
            <form className="mb-4">
                <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
                    <h2 className="px-4 py-2 mb-2 text font-semibold bg-gray-200">Cari Data Transaksi</h2>
                    <div className="space-y-2 px-4 pt-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Kode Produk</h2>
                                    <input
                                        className="mx-4 input input-bordered w-full h-8 rounded border-black"
                                        value={kodeProduk}
                                        onChange={(e) => setKodeProduk(e.target.value)}
                                    />
                                </div>
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Nama Produk</h2>
                                    <input
                                        className="mx-4 input input-bordered w-full h-8 rounded border-black"
                                        value={namaProduk}
                                        onChange={(e) => setNamaProduk(e.target.value)}
                                    />
                                </div>
                                <div className="mb-5 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-4/5">Tanggal Transaksi</h2>
                                    <input
                                        className="mr-24 ml-3 input input-bordered w-2/3 h-8 rounded border-black"
                                        type="text"
                                        value={tanggalTransaksiAwal}
                                        onChange={(e) => setTanggalTransaksiAwal(e.target.value)}
                                        onFocus={(e) => (e.target.type = "date")}
                                    />
                                </div>
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-right text-sm py-1 w-4/5">s/d</h2>
                                    <input
                                        className="mr-24 ml-3 input input-bordered w-2/3 h-8 rounded border-black"
                                        type="text"
                                        value={tanggalTransaksiAkhir}
                                        onChange={(e) => setTanggalTransaksiAkhir(e.target.value)}
                                        onFocus={(e) => (e.target.type = "date")}
                                    />
                                </div>
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Nomor Transaksi</h2>
                                    <input
                                        className="mx-4 text input input-bordered w-full h-8 rounded border-black"
                                        value={nomorTransaksi}
                                        onChange={(e) => setNomorTransaksi(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Status Transaksi</h2>
                                    <select className="h-8 input py-0 w-full rounded border-black" onChange={(e) => setStatusTransaksi(e.target.value)} value={statusTransaksi}>
                                        <option value="ALL"></option>
                                        <option value="AKTIF">AKTIF</option>
                                        <option value="JATUH TEMPO CICILAN">JATUH TEMPO CICILAN</option>
                                        <option value="TERLAMBAT BAYAR">TERLAMBAT BAYAR</option>
                                        <option value="JATUH TEMPO TRANSAKSI">JATUH TEMPO TRANSAKSI</option>
                                        <option value="LUNAS">LUNAS</option>
                                    </select>
                                </div>
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Nomor KTP</h2>
                                    <input
                                        className="ml-1 input input-bordered w-full h-8 rounded border-black"
                                        value={nomorKTP}
                                        onChange={(e) => setNomorKTP(e.target.value)}
                                    />
                                </div>
                                <div className="mb-7 flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Id Pelanggan</h2>
                                    <input
                                        className="ml-1 input input-bordered w-full h-8 rounded border-black"
                                        value={idPelanggan}
                                        onChange={(e) => setIdPelanggan(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-row form-control w-full">
                                    <h2 className="text-left text-sm py-1 w-1/2">Nama Pelanggan</h2>
                                    <input
                                        className="ml-1 input input-bordered w-full h-8 rounded border-black"
                                        value={namaPelanggan}
                                        onChange={(e) => setNamaPelanggan(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <button
                            className="inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                            type="submit"
                        >
                            Cari
                        </button>
                        <button
                            className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                            type="button"
                            onClick={onDelete}
                        >
                            Kosongkan
                        </button>
                        <button
                            className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                            type="button"
                            onClick={() => setOpenForm(true)}
                        >
                            Transaksi Baru
                        </button>
                    </div>
                </div>
            </form>
            {openForm? (<TrxCicTetapTrxBaru onClick={() => setOpenForm(false)}/>) : null}
            <HasilPencarian />
        </div>
    )
}
