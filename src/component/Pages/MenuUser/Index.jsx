import { useState } from "react"
import { HasilPencarian } from "./HasilPencarian"
import { PengaturanUserBaru } from "./PengaturanUserBaru"

export function PengaturanUser() {
  const [userId, setUserId] = useState("")
  const [userName, setUserName] = useState("")
  const [keterangan, setKeterangan] = useState("")
  const [status, setStatus] = useState("disabled")
  const [nomorHp, setNomorHp] = useState("")

  const [openForm, setOpenForm] = useState(false)

  const onDelete = () => {
    setUserId("")
    setUserName("")
    setKeterangan("")
    setStatus("disabled")
    setNomorHp("")
  }

  return (
    <div className="mt-5 md:col-span-2 md:mt-10 max-w-3xl mx-auto rounded">
      <h1 className="text-3xl font-bold mb-4">Pengaturan User</h1>
      <form className="mb-4">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <h2 className="px-4 py-2 mb-2 text font-semibold bg-gray-200">Cari Data User</h2>
          <div className="space-y-2 px-4 pt-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="mb-7 flex flex-row form-control w-full">
                  <h2 className="text-left text-sm py-1 w-1/4">User Id</h2>
                  <input
                    className="mx-4 input input-bordered w-full h-8 rounded border-black"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
                <div className="mb-7 flex flex-row form-control w-full">
                  <h2 className="text-left text-sm py-1 w-1/4">User Name</h2>
                  <input
                    className="mx-4 input input-bordered w-full h-8 rounded border-black"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-7 flex flex-row form-control w-full">
                  <h2 className="text-left text-sm py-1 w-1/4">Keterangan</h2>
                  <input
                    className="mx-4 text input input-bordered w-full h-8 rounded border-black"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="mb-7 flex flex-row form-control w-full">
                  <h2 className="text-left text-sm py-1 w-1/2">Status</h2>
                  <select className="h-8 input py-0 w-full rounded border-black" onChange={(e) => setStatus(e.target.value)} value={status}>
                    <option disabled selected value="disabled">--</option>
                    <option value="A">Aktif</option>
                    <option value="N">Non Aktif</option>
                    <option value="">All</option>
                  </select>
                </div>
                <div className="flex flex-row form-control w-full">
                  <h2 className="text-left text-sm py-1 w-1/2">Nomor Hp</h2>
                  <input
                    className="ml-1 input input-bordered w-full h-8 rounded border-black"
                    value={nomorHp}
                    onChange={(e) => setNomorHp(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pt-2 pb-6 text-center">
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
            {/* <Link to="/user-new-setting"> */}
            <button
              className="ml-10 inline-flex justify-center rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
              type="button"
              onClick={() => setOpenForm(true)}
            >
              User Baru
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
      {openForm ? (<PengaturanUserBaru onClick={() => setOpenForm(false)} />) : null}
      <HasilPencarian />
    </div>
  )
}
