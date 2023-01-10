import React from "react";

const DetailProduk = () => {
  return (
    <div>
      <input type="checkbox" id="prod-detail" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">Pengaturan Produk - Details</h3>
          <div className="flex mt-10">
            <label className="label w-40">
              <span className="label-text text-slate-900">Status</span>
            </label>
            <select className="select select-bordered bg-transparent select-sm w-full max-w-xs rounded-md">
              <option disabled selected>
                Pilih Status
              </option>
              <option>Aktif</option>
              <option>Non Aktif</option>
            </select>
          </div>
          <div className="flex mt-4">
            <label className="label w-40">
              <span className="label-text text-slate-900">Produk Id</span>
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md border-2 bg-transparent"
            />
          </div>
          <div className="flex mt-4">
            <label className="label w-40">
              <span className="label-text text-slate-900">Nama Produk</span>
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs rounded-md bg-transparent"
            />
          </div>
          <div className="flex mt-4">
            <label className="label w-40">
              <span className="label-text text-slate-900">Keterangan</span>
            </label>
            <textarea className="textarea w-full input-bordered max-w-xs"></textarea>
          </div>
          <div className="flex mt-4">
            <label className="label w-36">
              <span className="label-text text-slate-900">LTV ( % )</span>
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
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
            />
            <label className="label w-20">
              <span className="label-text text-slate-900">hari / bulan</span>
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
                Persen
              </option>
              <option>Aktif</option>
            </select>
            <input
              type="text"
              className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
            />
          </div>
          <div className="flex mt-4 gap-3">
            <label className="label w-40">
              <span className="label-text text-slate-900">
                Biaya Admin Tutup
              </span>
            </label>
            <select className="select select-bordered bg-transparent select-sm w-24 max-w-xs rounded-md">
              <option disabled selected>
                Persen
              </option>
              <option>Aktif</option>
            </select>
            <input
              type="text"
              className="input input-bordered input-sm w-20 max-w-xs rounded-md bg-transparent"
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
            />
            <label className="label w-10">
              <span className="label-text text-slate-900">hari/bulan</span>
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
            />
            <label className="label w-10">
              <span className="label-text text-slate-900">hari/bulan</span>
            </label>
          </div>
          <div className="modal-action">
            <label htmlFor="prod-detail" className="btn btn-md rounded-md">
              Kembali
            </label>
            <label htmlFor="prod-detail" className="btn btn-md rounded-md">
              Simpan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
