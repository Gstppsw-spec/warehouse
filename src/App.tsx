import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import { Informasi } from './pages/Informasi/Informasi';
import { Penyimpanan } from './pages/Penyimpanan/Penyimpanan';
import { Status } from './pages/Status/Status';
import { Pengambilan } from './pages/Pengambilan/Pengambilan';
import { Manajemen } from './pages/Manajemen/Manajamen';
import { ProfilPengguna } from './pages/Profil/ProfilPengguna';
import { LaporanPenyimpanan } from './pages/Laporan/LaporanPenyimpanan';
import { Notifikasi } from './pages/Notifikasi/Notifikasi';
import { TambahEditBarang } from './pages/Penyimpanan/TambahEditBarang';
import { EditStatus } from './pages/Status/EditStatus';
import { TambahJadwal } from './pages/Pengambilan/TambahJadwal';
import { TambahKaryawan } from './pages/Manajemen/TambahKaryawan';
import { TambahPenilaian } from './pages/Manajemen/TambahPenilaian';
import { Pengaturan } from './pages/Pengaturan/Pengaturan';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title=" Dashboard | Warehouse Management System" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Warehouse Management System " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Warehouse Management System" />
              <SignUp />
            </>
          }
        />

        <Route
          path="/informasi"
          element={
            <>
              <PageTitle title="Informasi Perusahaan | Warehouse Management System" />
              <Informasi />
            </>
          }
        />

        <Route
          path="/penyimpanan"
          element={
            <>
              <PageTitle title="Penyimpanan | Warehouse Management System" />
              <Penyimpanan />
            </>
          }
        />

        <Route
          path="/status"
          element={
            <>
              <PageTitle title="Status Barang | Warehouse Management System" />
              <Status />
            </>
          }
        />

        <Route
          path="/pengambilan"
          element={
            <>
              <PageTitle title="Pengambilan Barang | Warehouse Management System" />
              <Pengambilan />
            </>
          }
        />

        <Route
          path="/manajemen"
          element={
            <>
              <PageTitle title="Manajemen Tenaga Kerja | Warehouse Management System" />
              <Manajemen />
            </>
          }
        />
        <Route
          path="/profile-pengguna"
          element={
            <>
              <PageTitle title="Profil Pengguna | Warehouse Management System" />
              <ProfilPengguna />
            </>
          }
        />
        <Route
          path="/laporan-penyimpanan"
          element={
            <>
              <PageTitle title="Laporan Penyimpanan | Warehouse Management System" />
              <LaporanPenyimpanan />
            </>
          }
        />
        <Route
          path="/notifikasi"
          element={
            <>
              <PageTitle title="Notifikasi | Warehouse Management System" />
              <Notifikasi />
            </>
          }
        />

        <Route
          path="/tambah-edit-barang"
          element={
            <>
              <PageTitle title="Kelola Barang | Warehouse Management System" />
              <TambahEditBarang />
            </>
          }
        />

        <Route
          path="/edit-status"
          element={
            <>
              <PageTitle title="Edit Status | Warehouse Management System" />
              <EditStatus />
            </>
          }
        />

        <Route
          path="/tambah-jadwal"
          element={
            <>
              <PageTitle title="Tambah Status | Warehouse Management System" />
              <TambahJadwal />
            </>
          }
        />

        <Route
          path="/tambah-karyawan"
          element={
            <>
              <PageTitle title="Tambah Karyawan | Warehouse Management System" />
              <TambahKaryawan />
            </>
          }
        />

        <Route
          path="/tambah-penilaian"
          element={
            <>
              <PageTitle title="Tambah Penilaian Karyawan | Warehouse Management System" />
              <TambahPenilaian />
            </>
          }
        />

<Route
          path="/pengaturan"
          element={
            <>
              <PageTitle title="Pengaturan | Warehouse Management System" />
              <Pengaturan />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
