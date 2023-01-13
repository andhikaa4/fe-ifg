import React from "react";
import DataProduk from "./DataProduk";
import DetailProduk from "./DetailProduk";
import InputProduk from "./InputProduk";

export default function Index() {
  return (
    <>
      <div className="mt-5 md:col-span-2 md:mt-10 max-w-4xl mx-auto rounded">
        <h1 className="text-3xl font-bold mb-4">Pengaturan Produk</h1>
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <h2 className="px-4 py-2 mb-2 text font-semibold bg-gray-200">
            Cari Data Produk
          </h2>
          <div className="form-control flex">
            <div class="grid grid-cols-2">
              <div className="m-4 flex">
                <label className="label w-40">
                  <span className="label-text text-slate-900">Tipe Produk</span>
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
                  <span className="label-text text-slate-900">Kode Produk</span>
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
                  <span className="label-text text-slate-900">Nama Produk</span>
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
            <div class="grid grid-cols-6 gap-3 ml-44 mt-8 mb-8">
              <button
                className="rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                type="submit"
              >
                Cari
              </button>
              <button
                className="rounded border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                type="button"
              >
                Kosongkan
              </button>
              <label
                htmlFor="prod-baru"
                className="text-center rounded border border-transparent bg-gray-300 py-2 px-4 w-32 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
                type="button"
              >
                Transaksi Baru
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 md:col-span-2 md:mt-10 max-w-4xl mx-auto rounded">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <h2 className="px-4 py-2 mb-2 text font-semibold bg-gray-200">
            Cari Data Produk
          </h2>
          <div className="space-y-2 px-4 pt-2">
            <div className="">
              <DataProduk />
            </div>
          </div>
        </div>
      </div>
      <InputProduk />

      <DetailProduk />
    </>
  );
}
