import React, { useEffect, useState } from "react"

export function PelangganBaru(props) {
    const { onClick = null } = props

    const [formValues, setFormValues] = useState({
        namaPelanggan: '',
        nomorHp: '',
        nomorKTP: '',
        maksimalLimitTransaksi: '',
        jenisUsaha: '',
        jenisKelamin: '',
    })

    console.log(formValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

    const validate = (values) => {
        let errors = {}

        if (!values.namaPelanggan) {
            errors.namaPelanggan = 'Nama harus diisi'
        } else if (values.namaPelanggan.length > 30) {
            errors.namaPelanggan = 'Nama tidak boleh lebih dari 30 huruf'
        }

        if (!values.nomorHp) {
            errors.nomorHp = 'Nomor HP tidak boleh kosong'
        } else if (values.nomorHp.length > 12) {
            errors.nomorHp = 'Nomor Telepon tidak boleh lebih dari 12 angka'
        } else if (values.nomorHp.length < 9) {
            errors.nomorHp = 'minimum 9 digit angka nomor hp'
        }
        if (!values.nomorKTP) {
            errors.nomorKTP = 'Nomor KTP dibutuhkan'
        } else if (values.nomorKTP.length > 16) {
            errors.nomorKTP = ' Nomor KTP Harus 16 Digit Angka'
        } else if (values.nomorKTP.length < 16) {
            errors.nomorKTP = 'Nomor KTP Harus 16 Digit Angka'
        }

        if (!values.jenisKelamin) {
            errors.jenisKelamin = 'Silahkan pilih jenis kelamin'
        } 
        if (!values.jenisUsaha ) {
            errors.jenisUsaha = 'Silahkan pilih jenis usaha'
        } 


        if (!values.maksimalLimitTransaksi) {
            errors.maksimalLimitTransaksi = 'Limit transaction is required'
        } else if (values.maksimalLimitTransaksi < 1000000) {
            errors.maksimalLimitTransaksi = 'minimum limit must be 1.000.000'
        } else if (values.maksimalLimitTransaksi > 3000000000) {
            errors.maksimalLimitTransaksi = 'maximum limit must be 3.000.000.000'
        }

    
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full">
            <div className="mt-5 md:col-span-2 md:mt-10 max-w-2xl mx-auto rounded">
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md bg-white px-4">
                        <h1 className="text-3xl p-4 font-bold">Pengaturan Pelanggan - Baru</h1>
                        <div className="space-y-2 px-2">
                            {Object.keys(formErrors).length !== 0 ? (
                                <ul className="px-4 py-2 mb-2 text-sm text-red-600 bg-gray-200 rounded">
                                    <li>{formErrors.namaPelanggan ? `- ${(formErrors.namaPelanggan)}` : null}</li>
                                    <li>{formErrors.nomorKTP ? `- ${(formErrors.nomorKTP)}` : null}</li>
                                    <li>{formErrors.nomorHp ? `- ${(formErrors.nomorHp)}` : null}</li>
                                    <li>{formErrors.jenisKelamin ? `- ${(formErrors.jenisKelamin)}` : null}</li>
                                    <li>{formErrors.jenisUsaha ? `- ${(formErrors.jenisUsaha)}` : null}</li>
                                    <li>{formErrors.maksimalLimitTransaksi ? `- ${(formErrors.maksimalLimitTransaksi)}` : null}</li>
                                </ul>
                            ) : null}
                            <div className="grid">
                                <div className="col-span-2 m-5">
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">ID Customer</h2>
                                        <input
                                            className="mx-2 input input-bordered w-full h-8 rounded border-black" disabled
                                        />
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nama Pelanggan</h2>
                                        <input
                                            className="mx-2 input input-bordered w-full h-8 rounded border-black"
                                            name="namaPelanggan"
                                            value={formValues.namaPelanggan}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nomor KTP</h2>
                                        <input
                                            className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            name="nomorKTP"
                                            value={formValues.nomorKTP}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nomor HP</h2>
                                        <input
                                            className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            name="nomorHp"
                                            value={formValues.nomorHp}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Jenis Kelamin</h2>
                                        <div className=" w-full">

                                            <span className="mr-5" >
                                                <input type="radio" name="jenisKelamin" value='Pria' className="border bg-white border-black" onChange={handleChange} /> Pria
                                            </span>
                                            <span>
                                                <input type="radio" name="jenisKelamin" value='Wanita' className="border bg-white border-black" onChange={handleChange} /> Wanita
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Jenis Usaha</h2>

                                        <select type="text" name="jenisUsaha" onChange={handleChange}  className='mx-2 input input-bordered w-full h-8 rounded border-black ' id="" >
                                            <option disabled selected value="disabled" >--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </div>
                                    <div className="mb-4 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Maksimal Limit Transaksi User</h2>
                                        <input
                                            className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                            name="maksimalLimitTransaksi"
                                            value={formValues.maksimalLimitTransaksi}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                </form>
            </div>
        </div>
    )
}
