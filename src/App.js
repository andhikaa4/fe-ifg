import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PengaturanUser } from './component/Pages/MenuUser/Index';
import Index2 from './component/Pages/MenuPelanggan/Index';
import Index3 from './component/Pages/MenuProduk/Index';
import Index4 from './component/Pages/DetailTransaksi/Index';
import Index5 from './component/Pages/PembCicTetap/Index';
import { TransaksiCicilanTetap } from './component/Pages/TrxCicTetap/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<PengaturanUser/>} />
        <Route path='/pelanggan' element={<Index2/>} />
        <Route path='/produk' element={<Index3/>} />
        <Route path='/detail-transaksi' element={<Index4/>} />
        <Route path='/pembayaran-cicilan' element={<Index5/>} />
        <Route path='/transaksi-cicilan' element={<TransaksiCicilanTetap/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
