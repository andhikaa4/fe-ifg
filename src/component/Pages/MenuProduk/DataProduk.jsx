import React from "react";

const DataProduk = () => {
  return (
    <div>
      <div className="overflow-x-auto mb-10">
        <table className="table table-compact w-full border">
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
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td className="flex gap-2">
                <label
                  htmlFor="prod-detail"
                  className="btn btn-outline btn-xs rounded"
                >
                  Detail
                </label>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
              <td className="flex gap-2">
                <label
                  htmlFor="prod-detail"
                  className="btn btn-outline btn-xs rounded"
                >
                  Detail
                </label>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Carroll Group</td>
              <td>China</td>
              <td>8/15/2020</td>
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
