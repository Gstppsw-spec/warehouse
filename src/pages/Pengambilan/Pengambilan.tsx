import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import TablePengambilan from './TablePengambilan';
import { useState } from 'react';

export const Pengambilan = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <DefaultLayout>
      <div className="flex flex-row justify-between mb-5">
        <div className="flex flex-row gap-3 items-center">
          <button
            onClick={() => {
              navigate('/');
            }}
            aria-controls="sidebar"
            className="block "
          >
            <svg
              className="fill-black dark:fill-white"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-black dark:text-white">Pengambilan Barang</h1>
        </div>

        <div className="flex flex-row gap-3">
          <input
            type="submit"
            onClick={() => navigate('/tambah-jadwal')}
            value="Buat Jadwal"
            className="text-sm cursor-pointer rounded-sm border border-[#24A3C4] bg-[#24A3C4] p-1 text-white transition hover:bg-opacity-90"
          />
          <div className="flex items-center border border-gray-300 rounded-lg p-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Cari"
              className="bg-transparent flex-grow outline-none text-gray-600 placeholder-gray-400"
            />
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* <hr className="my-3" /> */}
      <TablePengambilan searchQuery={searchQuery} />
    </DefaultLayout>
  );
};
