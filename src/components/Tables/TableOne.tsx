import { PENYIMPANAN } from '../../types/brand';
import { useRef, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';

const initialDataPenyimpanan: PENYIMPANAN[] = [
  {
    id: 1,
    kodeBarang: 'Kode',
    namaBarang: 'Blender',
    beratBarang: 1000,
    idJenis: 1,
    idSatuan: 1,
    idPenanggungJawab: 1,
    jumlah: 1000,
    lokasiPenyimpanan: 'Gudang',
    hargaBarang: 100000,
    jenis: 'Tahan Lama',
    tanggalKadaluarsa: '2025-09-03',
    tanggalProduksi: '2025-09-03',
    tanggalMasuk: '2025-09-03',
    keterangan: 'Ini adalah keterangan barang'
  },
  {
    id: 2,
    kodeBarang: 'Kode',
    namaBarang: 'Kaca',
    beratBarang: 1000,
    idJenis: 1,
    idSatuan: 1,
    idPenanggungJawab: 1,
    jumlah: 1000,
    lokasiPenyimpanan: 'Gudang',
    hargaBarang: 100000,
    jenis: 'Tahan Lama',
    tanggalKadaluarsa: '2025-09-03',
    tanggalProduksi: '2025-09-03',
    tanggalMasuk: '2025-09-03',
    keterangan: 'Ini adalah keterangan barang'
  },
  {
    id: 3,
    kodeBarang: 'Kode',
    namaBarang: 'Nama Barang',
    beratBarang: 1000,
    idJenis: 1,
    idSatuan: 1,
    idPenanggungJawab: 1,
    jumlah: 1000,
    lokasiPenyimpanan: 'Gudang',
    hargaBarang: 100000,
    jenis: 'Tahan Lama',
    tanggalKadaluarsa: '2025-09-03',
    tanggalProduksi: '2025-09-03',
    tanggalMasuk: '2025-09-03',
    keterangan: 'Ini adalah keterangan barang'
  },
  {
    id: 4,
    kodeBarang: 'Kode',
    namaBarang: 'Nama Barang',
    beratBarang: 1000,
    idJenis: 1,
    idSatuan: 1,
    idPenanggungJawab: 1,
    jumlah: 1000,
    lokasiPenyimpanan: 'Gudang',
    hargaBarang: 100000,
    jenis: 'Tahan Lama',
    tanggalKadaluarsa: '2025-09-03',
    tanggalProduksi: '2025-09-03',
    tanggalMasuk: '2025-09-03',
    keterangan: 'Ini adalah keterangan barang'
  },
  {
    id: 5,
    kodeBarang: 'Kode',
    namaBarang: 'Nama Barang',
    beratBarang: 1000,
    idJenis: 1,
    idSatuan: 1,
    idPenanggungJawab: 1,
    jumlah: 1000,
    lokasiPenyimpanan: 'Gudang',
    hargaBarang: 100000,
    jenis: 'Tahan Lama',
    tanggalKadaluarsa: '2025-09-03',
    tanggalProduksi: '2025-09-03',
    tanggalMasuk: '2025-09-03',
    keterangan: 'Ini adalah keterangan barang'
  },
  {
    id: 6,
    kodeBarang: 'Kode',
    namaBarang: 'Nama Barang',
    beratBarang: 1000,
    idJenis: 1,
    idSatuan: 1,
    idPenanggungJawab: 1,
    jumlah: 1000,
    lokasiPenyimpanan: 'Gudang',
    hargaBarang: 100000,
    jenis: 'Tahan Lama',
    tanggalKadaluarsa: '2025-09-03',
    tanggalProduksi: '2025-09-03',
    tanggalMasuk: '2025-09-03',
    keterangan: 'Ini adalah keterangan barang'
  },
  
];

const TableOne = ({searchQuery}: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPenyimpanan, setDataPenyimpanan] = useState(initialDataPenyimpanan);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const filteredData = dataPenyimpanan.filter((item) =>
    item.namaBarang.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const confirm2 = (id) => {
    confirmDialog({
      message: (
        <span style={{ fontSize: '12px', wordWrap: 'break-word' }}>
          Apakah anda yakin ingin menghapus data barang ini? Tindakan ini tidak
          dapat dibatalkan
        </span>
      ),
      header: 'Hapus data barang',
      icon: (
        <div className="bg-red-300 p-2 rounded-full">
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
              fill=""
            />
            <path
              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
              fill=""
            />
            <path
              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
              fill=""
            />
            <path
              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
              fill=""
            />
          </svg>
        </div>
      ),
      acceptClassName: 'bg-red-500 text-white px-6 ml-3 py-1 rounded-md text-sm', // Accept button styles
      rejectClassName: 'bg-gray-300 text-black px-6 py-1 rounded-md text-sm border border-black', // Reject button styles
      className: 'w-[500px]',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      accept() {
        const updatedData = dataPenyimpanan.filter((item) => item.id !== id);
        setDataPenyimpanan(updatedData);
      },
    });
  };

  const handleEdit = (data: any) => {
    navigate('/tambah-edit-barang', { state: { data } });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-sm bg-[#24A3C4] text-white dark:bg-meta-4">
          <div className="p-2 text-center">
            <h5 className="text-sm font-medium">Kode</h5>
          </div>
          <div className="p-2 text-center">
            <h5 className="text-sm font-medium">Nama Barang</h5>
          </div>
          <div className="p-2 text-center">
            <h5 className="text-sm font-medium">Stok</h5>
          </div>
          <div className="p-2 text-center">
            <h5 className="text-sm font-medium">Jenis</h5>
          </div>
          <div className="p-2 text-center">
            <h5 className="text-sm font-medium">
              Tanggal Kadaluarsa
            </h5>
          </div>
          <div className="p-2 text-center">
            <h5 className="text-sm font-medium">Aksi</h5>
          </div>
        </div>

        {currentItems.map((brand, key) => (
          <div
            className={`grid grid-cols-6 ${
              key === currentItems.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2">
              <p className="text-black text-sm dark:text-white">{brand.kodeBarang}</p>
            </div>

            <div className="flex items-center justify-center p-2">
              <p className="text-black text-sm dark:text-white">{brand.namaBarang}</p>
            </div>

            <div className="flex items-center justify-center p-2">
              <p className="text-black text-sm dark:text-white">{brand.jumlah}</p>
            </div>

            <div className=" items-center justify-center p-2 flex">
              <p className="text-black text-sm dark:text-white">{brand.jenis}</p>
            </div>

            <div className=" items-center justify-center p-2 flex">
              <p className="text-black text-sm dark:text-white">{brand.tanggalKadaluarsa}</p>
            </div>
            <div className="items-center justify-center p-2 flex">
              {/* Detail Icon */}
              {/* <button className="text-black text-sm mr-4">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                    fill=""
                  />
                  <path
                    d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                    fill=""
                  />
                </svg>
              </button> */}

              {/* Edit Icon */}
              <button onClick={() => handleEdit(brand)} className="text-green-500 text-sm mr-4">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>

              {/* Delete Icon */}
              <button className="text-red-700 text-sm" onClick={() => confirm2(brand.id)}>
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                    fill=""
                  />
                  <path
                    d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                    fill=""
                  />
                  <path
                    d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                    fill=""
                  />
                  <path
                    d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Toast ref={toast} />

      <ConfirmDialog />
    </div>
  );
};

export default TableOne;
