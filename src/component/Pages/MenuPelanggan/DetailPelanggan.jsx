import React, { useEffect, useState } from "react"

export function DetailPelanggan(props) {
    const { onClick = null } = props
    const [openForm, setOpenForm] = useState(false)

    const [formValues, setFormValues] = useState({
        namaPelanggan: '',
        nomorHp: '',
        nomorKTP: '',
        maksimalLimitTransaksi: '',
        jenisUsaha: '',
        jenisKelamin: '',
    })
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

    // const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

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
            <div className="mt-5 md:col-span-2 md:mt-7 max-w-2xl mx-auto rounded">
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md bg-white px-4">
                        <h1 className="text-3xl p-4 font-bold">Pengaturan User - Detail</h1>
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
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">ID Customer</h2>
                                        <input
                                            className="mx-2 input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nama Pelanggan</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                                name="namaUser"
                                                value={formValues.namaPelanggan}
                                                onChange={handleChange}
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Nomor KTP</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                                name="nomorHp"
                                                value={formValues.nomorKTP}
                                                onChange={handleChange}
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
                                                name="nomorHp"
                                                value={formValues.nomorHp}
                                                onChange={handleChange}
                                            />
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Jenis Kelamin</h2>
                                        {openForm === false ? (
                                            <div className=" w-full">
                                            <span className="mr-5" >
                                                <input type="radio" name="jenisKelamin" value='Pria' className="border bg-white border-black" onChange={handleChange} disabled/> Pria
                                            </span>
                                            <span>
                                                <input type="radio" name="jenisKelamin" value='Wanita' className="border bg-white border-black" onChange={handleChange} disabled /> Wanita
                                            </span>
                                        </div>
                                        ) : (
                                            <div className=" w-full">

                                            <span className="mr-5" >
                                                <input type="radio" name="jenisKelamin" value='Pria' className="border bg-white border-black" onChange={handleChange} /> Pria
                                            </span>
                                            <span>
                                                <input type="radio" name="jenisKelamin" value='Wanita' className="border bg-white border-black" onChange={handleChange} /> Wanita
                                            </span>
                                        </div>
                                        )}
                                    </div>
                                    <div className="mb-5 flex flex-row form-control w-full">
                                        <h2 className="text-left text-sm py-1 w-3/6">Jenis Usaha</h2>
                                        {openForm === false ? (
                                            <select type="text" name="jenisUsaha" onChange={handleChange}  className='mx-2 input input-bordered w-full h-8 rounded border-black ' id="" disabled >
                                            <option disabled selected value="disabled" >--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                        ) : (
                                            <select type="text" name="jenisUsaha" onChange={handleChange}  className='mx-2 input input-bordered w-full h-8 rounded border-black ' id="" >
                                            <option disabled selected value="disabled" >--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
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
                                                name="maksimalLimitTransaksi"
                                                value={formValues.maksimalLimitTransaksi}
                                                onChange={handleChange}
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
                                    onClick={() => openForm ? setOpenForm(false) : onClick}
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
