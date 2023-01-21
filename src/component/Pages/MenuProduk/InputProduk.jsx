import { useState } from "react";

const InputProduk = () => {
  const [tipe, setTipe] = useState(0);
  const [produkId, setPodukId] = useState("");
  const [namaProduk, setNamaProduk] = useState("");
  const [ket, setKet] = useState("");
  const [ltv, setLtv] = useState("");
  const [jangkaWaktu, setJangkaWaktu] = useState("");
  const [adminBuka, setAdminBuka] = useState("");
  const [adminTutup, setAdminTutup] = useState("");
  const [jasa, setJasa] = useState("");
  const [denda, setDenda] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("tipe", tipe);
    console.log("id", produkId);
    console.log("nama", namaProduk);
    console.log("ket", ket);
    console.log("ltv", ltv);
    console.log("jangka waktu", jangkaWaktu);
    console.log("admin buka", adminBuka);
    console.log("admin tutup", adminTutup);
    console.log("jasa", jasa);
    console.log("denda", denda);
  };
  return (
    <div>
      <input type="checkbox" id="prod-baru" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Pengaturan Produk Baru</h3>
          <form onSubmit={onSubmit}>
            <div className="flex mt-10">
              <label className="label w-40">
                <span className="label-text text-slate-900">Tipe Produk</span>
              </label>
              <select
                className="select select-bordered bg-transparent select-sm w-full max-w-xs rounded-md"
                onChange={onSubmit}
              >
                <option disabled selected>
                  Pilih tipe produk
                </option>
                <option value={0}>Konsinyasi Cicilan Tetap</option>
                <option value={1}>Konsinyasi Cicilan Fleksibel</option>
              </select>
            </div>
            <div className="flex mt-4">
              <label className="label w-40">
                <span className="label-text text-slate-900">Produk Id</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-full max-w-xs rounded-md border-2 bg-transparent"
                value={produkId}
                onChange={(e) => setPodukId(e.target.value)}
              />
            </div>
            <div className="flex mt-4">
              <label className="label w-40">
                <span className="label-text text-slate-900">Nama Produk</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-full max-w-xs rounded-md bg-transparent"
                value={namaProduk}
                onChange={(e) => setNamaProduk(e.target.value)}
              />
            </div>
            <div className="flex mt-4">
              <label className="label w-40">
                <span className="label-text text-slate-900">Keterangan</span>
              </label>
              <textarea
                className="textarea w-full input-bordered max-w-xs"
                onChange={(e) => setKet(e.target.value)}
                value={ket}
              ></textarea>
            </div>
            <div className="flex mt-4">
              <label className="label w-36">
                <span className="label-text text-slate-900">LTV ( % )</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
                value={ltv}
                onChange={(e) => setLtv(e.target.value)}
              />
              <label className="label w-10">
                <span className="label-text text-slate-900">%</span>
              </label>
            </div>
            <div className="flex mt-4">
              <label className="label w-36">
                <span className="label-text text-slate-900">Jangka Waktu</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
                value={jangkaWaktu}
                onChange={(e) => setJangkaWaktu(e.target.value)}
              />
              <label className="label w-20">
                <span className="label-text text-slate-900">
                  {tipe === 0 ? "hari" : "bulan"}
                </span>
              </label>
            </div>
            <div className="flex mt-4 gap-3">
              <label className="label w-40">
                <span className="label-text text-slate-900">
                  Biaya Admin Buka
                </span>
              </label>
              <select className="select select-bordered bg-transparent select-sm w-24 max-w-xs rounded-md">
                <option disabled selected>
                  Pilihan
                </option>
                <option value={0}>Persen</option>
                <option value={1}>Normal</option>
              </select>
              <input
                type="text"
                className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
                value={adminBuka}
                onChange={(e) => setAdminBuka(e.target.value)}
              />
            </div>
            <div className="flex mt-4 gap-3">
              <label className="label w-40">
                <span className="label-text text-slate-900">
                  Biaya Admin Tutup
                </span>
              </label>
              <select
                className="select select-bordered bg-transparent select-sm w-24 max-w-xs rounded-md"
                value={adminBuka}
                onChange={(e) => setAdminBuka(e.target.value)}
              >
                <option disabled selected>
                  Pilihan
                </option>
                <option value={0}>Persen</option>
                <option value={1}>Normal</option>
              </select>
              <input
                type="text"
                className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
                value={adminTutup}
                onChange={(e) => setAdminTutup(e.target.value)}
              />
            </div>
            <div className="flex mt-4 gap-3">
              <label className="label w-40">
                <span className="label-text text-slate-900">
                  Biaya Jasa Penyimpanan
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-10 max-w-xs rounded-md bg-transparent"
              />
              <label className="label w-10">
                <span className="label-text text-slate-900">%</span>
              </label>
              <label className="label w-10">
                <span className="label-text text-slate-900">Per</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-10 max-w-xs rounded-md bg-transparent"
                value={jasa}
                onChange={(e) => setJasa(e.target.value)}
              />
              <label className="label w-10">
                <span className="label-text text-slate-900">
                  {tipe === 0 ? "hari" : "bulan"}
                </span>
              </label>
            </div>
            <div className="flex mt-4 gap-3">
              <label className="label w-40">
                <span className="label-text text-slate-900">
                  Biaya Denda Keterlambatan
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-10 max-w-xs rounded-md bg-transparent"
              />
              <label className="label w-10">
                <span className="label-text text-slate-900">%</span>
              </label>
              <label className="label w-10">
                <span className="label-text text-slate-900">Per</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-sm w-10 max-w-xs rounded-md bg-transparent"
                value={denda}
                onChange={(e) => setDenda(e.target.value)}
              />
              <label className="label w-10">
                <span className="label-text text-slate-900">
                  {tipe === 0 ? "hari" : "bulan"}
                </span>
              </label>
            </div>
            <div className="modal-action">
              <label
                htmlFor="prod-baru"
                className="rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
              >
                Kembali
              </label>
              <button
                className="rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                type="submit"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputProduk;
