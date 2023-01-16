import React from "react";
import { dataProduk } from "../../StatikData/DataProduk";

const DataProduk = () => {
  console.log("produk", dataProduk);
  return (
    <div>
      <div className="overflow-x-auto mb-10">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Tipe Produk</th>
              <th>Kode Produk</th>
              <th>Nama Produk</th>
              <th>LTV</th>
              <th>Biaya Jasa Penyimpanan</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {dataProduk.length > 0 ? (
            dataProduk.map((prod, index) => (
              <tbody>
                <tr key={index} className="hover">
                  <th>{prod.tipeProduk}</th>
                  <td>{prod.produkId}</td>
                  <td>{prod.namaProduk}</td>
                  <td>{prod.ltv}</td>
                  <td>{prod.biayaJasa}</td>
                  <td>{prod.status === 1 ? "Aktif" : "Non Aktif"}</td>
                  <td className="flex gap-2">
                    <label
                      htmlFor="prod-detail"
                      className="btn btn-outline btn-xs rounded"
                    >
                      Detail
                    </label>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <p className="m-5 text-center text-red-700">
              Data Produk Tidak Ada
            </p>
          )}
        </table>
      </div>
      <div className="flex flex-row-reverse items-center px-4 pb-4">
        <div>
          <button
            className="inline-flex justify-center rounded border bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 rounded-r-none"
            type="button"
          >
            {`<`}
          </button>
          <button
            className="inline-flex justify-center rounded rounded-l-none border bg-gray-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
            type="button"
          >
            {`>`}
          </button>
        </div>
        <div className="flex flex-row mr-5">
          <h2>Halaman</h2>
          <div className="px-3 py-1 mx-2 bg-gray-300 text-sm rounded">{`0`}</div>
          <h2>dari</h2>
          <div className="px-3 py-1 ml-3 bg-gray-300 text-sm rounded">{`0`}</div>
        </div>
      </div>
    </div>
  );
};

export default DataProduk;
