import React from "react";
import DataProduk from "./DataProduk";
import DetailProduk from "./DetailProduk";
import EditProduk from "./EditProduk";
import InputProduk from "./InputProduk";

export default function Index() {
  return (
    <div className="bg-white h-screen w-full">
      <div class="container mx-auto">
        <div className="judul">
          <h1 className="font-semibold text-2xl text-slate-900 py-6">
            Pengaturan Produk
          </h1>
        </div>
        <div className="card bg-white border rounded-none">
          <h2 className="card-title text-lg p-2 bg-gray-200 text-slate-900">
            Cari Data Produk
          </h2>
          <div className="card-body">
            <div className="form-control flex">
              <div class="grid grid-cols-2">
                <div className="m-4 flex">
                  <label className="label w-40">
                    <span className="label-text text-slate-900">
                      Tipe Produk
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full max-w-xs rounded-md border-2 bg-transparent"
                  />
                </div>
                <div className="m-4 flex">
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
                <div className="m-4 flex">
                  <label className="label  w-40">
                    <span className="label-text text-slate-900">
                      Kode Produk
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full max-w-xs rounded-md border-2 bg-transparent"
                  />
                </div>
                <div className="m-4 flex">
                  <label className="label w-40">
                    <span className="label-text text-slate-900">LTV</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm max-w-xs rounded-md border-2 bg-transparent w-20"
                  />
                  <label className="label w-20">
                    <span className="label-text text-slate-900">Sampai</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm max-w-xs rounded-md border-2 bg-transparent w-20"
                  />
                  <label className="label w-20">
                    <span className="label-text text-slate-900">%</span>
                  </label>
                </div>
                <div className="m-4 flex">
                  <label className="label w-40">
                    <span className="label-text text-slate-900">
                      Nama Produk
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full max-w-xs rounded-md border-2 bg-transparent"
                  />
                </div>
                <div className="m-4 flex">
                  <label className="label w-40">
                    <span className="label-text text-slate-900">
                      Biaya Jasa Penyimpanan
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm max-w-xs rounded-md border-2 bg-transparent w-20"
                  />
                  <label className="label w-20">
                    <span className="label-text text-slate-900">Sampai</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm max-w-xs rounded-md border-2 bg-transparent w-20"
                  />
                  <label className="label w-20">
                    <span className="label-text text-slate-900">%</span>
                  </label>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-3 ml-44 mt-8">
                <button className="btn btn-outline btn-md rounded-md">
                  Cari
                </button>
                <button className="btn btn-outline btn-md rounded-md">
                  Kosongkan
                </button>
                <label
                  htmlFor="prod-baru"
                  className="btn btn-outline btn-md rounded-md"
                >
                  Produk Baru
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-white border rounded-none mt-4">
          <h2 className="card-title text-lg p-2 bg-gray-200 text-slate-900">
            Hasil Pencarian
          </h2>
          <div className="card-body">
            <div className="form-control flex">
              <div class="grid grid-cols-1">
                <DataProduk />
              </div>
            </div>
          </div>
        </div>

        <InputProduk />
        <EditProduk />
        <DetailProduk />
      </div>
    </div>
  );
}
