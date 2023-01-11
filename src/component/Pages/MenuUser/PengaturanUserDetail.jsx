import React, { useEffect, useState } from "react"

export function PengaturanUserDetail(props) {
    const { onClick = null } = props
    const [openForm, setOpenForm] = useState(false)

    const initialValues = {
        namaUser: '',
        nomorHp: '',
        keterangan: '',
        maksimalLimitTransaksi: '',
        tanggalMasuk: '',
    }

    const [formValues, setFormValues] = useState(initialValues)
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
        console.log(values.nomorHp)
        let errors = {}

        if (!values.namaUser) {
            errors.namaUser = 'User name is required'
        } else if (values.namaUser.length > 30) {
            errors.namaUser = 'User name cannot exceed more than 30 characters'
        }

        if (!values.nomorHp) {
            errors.nomorHp = 'Phone number is required'
        } else if (values.nomorHp > 12) {
            errors.nomorHp = 'Phone number cannot exceed more than 12 digits'
        } else if (values.nomorHp < 12) {
            errors.nomorHp = 'Minimum character must be 9 digits'
        }
        // else if (typeof (values.nomorHp) !== Number) {
        //     errors.nomorHp = 'Nomor HP must be number'
        // }

        if (!values.maksimalLimitTransaksi) {
            errors.maksimalLimitTransaksi = 'Limit transaction is required'
        } else if (values.maksimalLimitTransaksi < 500000) {
            errors.maksimalLimitTransaksi = 'minimum limit must be 500.000'
        } else if (values.maksimalLimitTransaksi > 1000000000) {
            errors.maksimalLimitTransaksi = 'maximum limit must be 1.000.000.000'
        }

        if (!values.tanggalMasuk) {
            errors.tanggalMasuk = 'Date is required'
        } else if (values.tanggalMasuk > date) {
            errors.tanggalMasuk = `maximum date is today`
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
                                    <li>{formErrors.namaUser ? `- ${(formErrors.namaUser)}` : null}</li>
                                    <li>{formErrors.nomorHp ? `- ${(formErrors.nomorHp)}` : null}</li>
                                    <li>{formErrors.maksimalLimitTransaksi ? `- ${(formErrors.maksimalLimitTransaksi)}` : null}</li>
                                    <li>{formErrors.tanggalMasuk ? `- ${(formErrors.tanggalMasuk)}` : null}</li>
                                </ul>
                            ) : null}
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
                                                name="namaUser"
                                                value={formValues.namaUser}
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
                                        <h2 className="text-left text-sm py-1 w-3/6">Keterangan</h2>
                                        {openForm === false ? (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black bg-gray-300"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="mx-2 text input input-bordered w-full h-8 rounded border-black"
                                                name="keterangan"
                                                value={formValues.keterangan}
                                                onChange={handleChange}
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
                                                name="maksimalLimitTransaksi"
                                                value={formValues.maksimalLimitTransaksi}
                                                onChange={handleChange}
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
                                                type="text"
                                                name="tanggalMasuk"
                                                value={formValues.tanggalMasuk}
                                                onChange={handleChange}
                                                onFocus={(e) => (e.target.type = "date")}
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
