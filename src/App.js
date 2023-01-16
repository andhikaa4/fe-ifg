import { Routes, Route } from "react-router-dom";
import Index from "./component/Pages/MenuUser/Index";
import Index2 from "./component/Pages/MenuPelanggan/Index";
import Index3 from "./component/Pages/MenuProduk/Index";
import Index4 from "./component/Pages/DetailTransaksi/Index";
import Index5 from "./component/Pages/PembCicTetap/Index";
import Index6 from "./component/Pages/TrxCicTetap/index";

function App() {
  return (
    <Routes>
      <Route path="/user" element={<Index />} />
      <Route path="/pelanggan" element={<Index2 />} />
      <Route path="/produk" element={<Index3 />} />
      <Route path="/detail-transaksi" element={<Index4 />} />
      <Route path="/pembayaran-cicilan" element={<Index5 />} />
      <Route path="/transaksi-cicilan" element={<Index6 />} />
    </Routes>
  );
}

export default App;
