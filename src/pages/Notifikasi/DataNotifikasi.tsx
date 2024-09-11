import Pagination from '../../components/Pagination/Pagination';
import { PENYIMPANAN } from '../../types/brand';
import { useState } from 'react';

const DataNotifikasi = ({ dataNotifikasi }: any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {dataNotifikasi?.length > 0 ? (
        <div className="flex flex-col">
          {dataNotifikasi.map((brand, key) => (
            <div
              className={`grid grid-cols-3 ${
                key === dataNotifikasi.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2">
                <p className="text-black text-sm dark:text-white">{brand.tanggalKadaluarsa}</p>
              </div>

              <div className="flex items-center justify-center p-2">
                <p className="text-black text-sm dark:text-white">
                  [{brand.name}] [{brand.kode}] Sudah diambil/kadaluarsa
                </p>
              </div>

              <div className="flex items-center justify-center p-2">
                <p className="text-black text-sm dark:text-white">{brand.jenis}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className='flex items-center justify-center py-5'><span>Tidak ada notifikasi</span></div>
        </>
      )}
    </div>
  );
};

export default DataNotifikasi;
