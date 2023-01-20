import { useEffect, useState } from "react"

export function DataKontrakGadai(props) {
    // DAFTAR BARANG GADAI //
    const [items, setItems] = useState([])
    // const [status, setStatus] = useState("")
    // console.log(status)
    
    const initialValue = {
        noUrut: items.length + 1,
        namaBarang: "",
        deskripsi: "",
        jumlah: "",
        hargaPerSatuan: "",
    }

    const [formValues, setFormValues] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChangeGadai = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setItems((prevData) => [...prevData, formValues])
        }
    }, [formErrors])

    const validateGadai = (values) => {
        let errors = {}

        if (!values.namaBarang) {
            errors.namaBarang = "Nama Barang is required"
        }

        if (!values.deskripsi) {
            errors.deskripsi = "Deskripsi is required"
        }

        if (!values.jumlah) {
            errors.jumlah = "Jumlah is required"
        }

        if (!values.hargaPerSatuan) {
            errors.hargaPerSatuan = "Harga Per Satuan is required"
        }

        return errors
    }

    const handleSubmitGadai = (e) => {
        // let myArray = [1,2,3,4,5]
        // myArray.splice(1,2)
        console.log("submit")
        e.preventDefault()
        setFormErrors(validateGadai(formValues))
        setIsSubmit(true)
    }

    const handleDelete = (index) => {
        setIsSubmit(false)
        // setItems(items.filter((v, i) => i !== idx))
        let copy = [...items]
        copy.splice(index, 1)
        for(let i = 0; i < copy.length; i++) {
            copy[i].noUrut = i + 1
        }
        // copy = copy.filter(
        //     (item, index) => number != index
        // )
        // console.log(e.target.value)
        setItems(copy)
        setIsSubmit(false)
        // setStatus("DEL")
    }



    // DATA KONTRAK //
    const { onClick = null } = props

    const initialValueS = {
        nilaiPencairanPelanggan: '',
        diskonAdmBuka: ''
    }

    const [formValue, setFormValue] = useState(initialValueS)
    const [formError, setFormError] = useState({})
    const [isSubmitKontrak, setIsSubmitKontrak] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    useEffect(() => {
        if(Object.keys(formError).length === 0 && isSubmitKontrak) {
            console.log(formValue)
        }
    }, [formError])

    const validate = (values) => {
        let errors = {}

        if(!values.nilaiPencairanPelanggan) {
            errors.nilaiPencairanPelanggan = "Nilai Pencairan Pelanggan is required"
        }

        if(!values.diskonAdmBuka) {
            errors.diskonAdmBuka = "Diskon Adm Buka is required"
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError(validate(formValue))
        setIsSubmitKontrak(true)
    }

    return (
        <>
        <div className="overflow-x-auto rounded shadow bg-white mb-4">
            <form className="mb-4" onSubmit={handleSubmitGadai}>
                <div>
                    <div className="space-y-2 px-4 pt-2">
                        <div>
                            <h2 className="py-2 mb-2 text font-semibold">Daftar Barang Gadai*</h2>
                            {items.length === 0 && isSubmitKontrak === true ? (
                                <div className="px-4 py-2 mb-4 text-sm text-red-600 bg-gray-200 rounded">
                                    Daftar Barang Gadai is required
                                </div>
                            ) : null}
                            {Object.keys(formErrors).length !== 0 ? (
                                <ul className="px-4 py-2 mb-4 text-sm text-red-600 bg-gray-200 rounded">
                                    <li>{formErrors.namaBarang ? `- ${(formErrors.namaBarang)}` : null}</li>
                                    <li>{formErrors.deskripsi ? `- ${(formErrors.deskripsi)}` : null}</li>
                                    <li>{formErrors.jumlah ? `- ${(formErrors.jumlah)}` : null}</li>
                                    <li>{formErrors.hargaPerSatuan ? `- ${(formErrors.hargaPerSatuan)}` : null}</li>
                                </ul>
                            ) : null}
                            <div className="grid grid-cols-1">
                                <div className="mr-5">
                                    <div className="ml-4 flex flex-row space-x-5">
                                        <div className="mb-7 form-control w-2/3">
                                            <h2 className="text-left text-sm pb-3">Nama Barang</h2>
                                            <input
                                                className="input input-bordered w-full h-8 rounded border-black"
                                                name="namaBarang"
                                                value={formValues.namaBarang}
                                                onChange={handleChangeGadai}
                                            />
                                        </div>
                                        <div className="mb-7 form-control w-3/4">
                                            <h2 className="text-left text-sm pb-3">Deskripsi</h2>
                                            <textarea
                                                className="textarea input input-bordered w-full h-8 rounded border-black"
                                                name="deskripsi"
                                                value={formValues.deskripsi}
                                                onChange={handleChangeGadai}
                                            />
                                        </div>
                                        <div className="mb-7 form-control w-1/3">
                                            <h2 className="text-left text-sm pb-3">Jumlah</h2>
                                            <input
                                                className="input input-bordered w-full h-8 rounded border-black"
                                                pattern="[0-9]*"
                                                name="jumlah"
                                                value={formValues.jumlah}
                                                onChange={handleChangeGadai}
                                            />
                                        </div>
                                        <div className="mb-7 form-control w-1/2">
                                            <h2 className="text-left text-sm pb-3">Harga Per Satuan</h2>
                                            <input
                                                className="input input-bordered w-full h-8 rounded border-black"
                                                pattern="[0-9]*"
                                                name="hargaPerSatuan"
                                                value={formValues.hargaPerSatuan}
                                                onChange={handleChangeGadai}
                                            />
                                        </div>
                                        <div className="form-control w-1/6">
                                            <button className="bg-gray-300 my-8 h-8 rounded border shadow-sm border-black hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 font-bold"
                                                type="submit"
                                            >+</button>
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
                                            {items?.map((item, idx) => {
                                                let total = item.jumlah * item.hargaPerSatuan
                                                return (
                                                    <tr>
                                                        <td className="text-center text-sm py-1 border border-black">{idx+1}</td>
                                                        <td className="text-center text-sm py-1 border border-black">{item.namaBarang}</td>
                                                        <td className="text-center text-sm py-1 border border-black">{item.deskripsi}</td>
                                                        <td className="text-center text-sm py-1 border border-black">{item.jumlah}</td>
                                                        <td className="text-center text-sm py-1 border border-black">{item.hargaPerSatuan}</td>
                                                        <td className="text-center text-sm py-1 border border-black">{total}</td>
                                                        <td className="text-center font-semibold border border-black text-xl" onClick={(idx)=> handleDelete(idx)}><button>-</button></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="overflow-x-auto rounded shadow bg-white mb-6">
            <form className="mb-4" onSubmit={handleSubmit}>
                <div>
                    <div className="space-y-2 px-4 pt-2">
                        <div>
                            <h2 className="py-2 mb-2 text font-semibold">Data Kontrak</h2>
                            {Object.keys(formError).length !== 0 ? (
                                <ul className="px-4 py-2 mb-4 text-sm text-red-600 bg-gray-200 rounded">
                                    <li>{formError.nilaiPencairanPelanggan ? `- ${(formError.nilaiPencairanPelanggan)}` : null}</li>
                                    <li>{formError.diskonAdmBuka ? `- ${(formError.diskonAdmBuka)}` : null}</li>
                                </ul>
                            ) : null}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="ml-4">
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Total Nilai Taksiran</h2>
                                            <input
                                                className="mx-4 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-2/6">LTV %</h2>
                                            <div>
                                                <input
                                                    className="text-left input input-bordered w-1/2 h-8 rounded border-black bg-gray-300"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm w-1/2">Nilai Pencairan Pelanggan*</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black"
                                                name="nilaiPencairanPelanggan"
                                                value={formValue.nilaiPencairanPelanggan}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-1/2">Biaya Admin Buka</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-7 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm py-1 w-2/6">Diskon Adm. Buka*</h2>
                                            <div className="flex flex-row">
                                                <input
                                                    className="text-left input input-bordered w-1/2 h-8 rounded border-black"
                                                    name="diskonAdmBuka"
                                                    value={formValue.diskonAdmBuka}
                                                    onChange={handleChange}
                                                />
                                                <h2 className="pl-1">%</h2>
                                            </div>
                                        </div>
                                        <div className="mb-5 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm w-1/2">Biaya Admin Buka Akhir</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-5 flex flex-row form-control w-full">
                                            <h2 className="text-left text-sm w-1/2">Total Nilai Pinjaman</h2>
                                            <input
                                                className="mx-4 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-4">
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-1/2">Tanggal Transaksi</h2>
                                        <input
                                            className="input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-1/2">Tanggal Jatuh Tempo</h2>
                                        <input
                                            className="input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-full">Biaya Jasa Penyimpanan</h2>
                                        <div className="w-full ml-7 flex flex-row">
                                            <input
                                                className="input input-bordered w-1/6 h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                            <h2 className="px-1">%</h2>
                                            <h2 className="pl-3 pr-1">per</h2>
                                            <input
                                                className="input input-bordered w-1/6 h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                            <h2 className="pl-1">bulan</h2>
                                        </div>
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left py-1 text-sm w-3/5">Biaya Jasa Penyimpanan/Periode</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left py-1 text-sm w-3/5">Total Biaya Jasa Penyimpanan</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/5">Biaya Admin Tutup</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-7 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/5">Total Pengembalian</h2>
                                        <input
                                            className="input input-bordered w-3/6 h-8 rounded border-black bg-gray-300"
                                            readOnly
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
        </>
    )
}
