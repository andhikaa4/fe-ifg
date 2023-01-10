import React from "react";

const DataProduk = () => {
  return (
    <div>
      <div className="overflow-x-auto">
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
                  htmlFor="prod-ubah"
                  className="btn btn-outline btn-xs rounded"
                >
                  Edit
                </label>
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
                  htmlFor="prod-ubah"
                  className="btn btn-outline btn-xs rounded"
                >
                  Edit
                </label>
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
                  htmlFor="prod-ubah"
                  className="btn btn-outline btn-xs rounded"
                >
                  Edit
                </label>
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
    </div>
  );
};

export default DataProduk;
