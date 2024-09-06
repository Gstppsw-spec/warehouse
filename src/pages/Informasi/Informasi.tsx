import React, { useRef } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SelectInstansi from '../Component/select-instansi';
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';

const dataPenilaian = [
  {
    id: 1,
    name: 'Jaya Baya',
    alamat: 'Bandar Lampung, Lampung Selatan',
    handphone: '0822683084208',
    idInstansi: 1,
  },
];

export const Informasi = () => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const {
    register,
    handleSubmit,
    setValue: setValueForm,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      name: dataPenilaian[0]?.name,
      alamat: dataPenilaian[0]?.alamat,
      handphone: dataPenilaian[0]?.handphone,
      idInstansi: dataPenilaian[0]?.idInstansi,
    },
  });

  const accept = () => {
    navigate('/informasi');
  };

  const reject = () => {};

  const confirm2 = () => {
    confirmDialog({
      message: (
        <span style={{ fontSize: '12px', wordWrap: 'break-word' }}>
          Informasi perusahaan berhasil disimpan. Anda akan dialihkan ke
          halaman informasi perusahaan.
        </span>
      ),
      header: 'Berhasil mengubah informasi perusahaan.',
      icon: (
        <div className="bg-green-300 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-check-circle"
          >
            <circle cx="12" cy="12" r="10" fill="lightgreen" />
            <path d="M9 12l2 2l4 -4" stroke="green" fill="none" />
          </svg>
        </div>
      ),
      // defaultFocus: 'accept',
      acceptClassName:
        'bg-[#7F56D9] text-white px-3 py-1 ml-3 rounded-md text-sm border border-white', // Accept button styles
      rejectClassName:
        'border border-black text-black px-3 py-1 rounded-md text-sm', // Reject button styles
      className: 'w-[500px]',
      acceptLabel: 'Confirm',
      rejectLabel: 'Cancel',
      accept,
      reject,
    });
  };

  return (
    <DefaultLayout>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <button
            onClick={() => {
              navigate('/');
            }}
            aria-controls="sidebar"
            className="block "
          >
            <svg
              className="fill-black"
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
          <h1 className="text-lg font-bold text-black">
            Informasi Instansi / Perusahaan
          </h1>
        </div>

        <div className="">
          <input
            type="submit"
            value="Simpan"
            onClick={confirm2}
            className="text-sm w-[95px] cursor-pointer rounded-sm border border-[#24A3C4] bg-[#24A3C4] p-1 text-white transition hover:bg-opacity-90"
          />
        </div>
      </div>
      <hr className="my-3" />
      <form action="#">
        <div className="p-4.5">
          <div className="mb-3.5">
            <label className="text-md mb-2.5 block text-black dark:text-white">
              Nama Instansi/Perusahaan
            </label>
            <input
              type="text"
              {...register('name')}
              placeholder="Nama Instansi/Perusahaan"
              className="text-md w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="text-md mb-2.5 block text-black dark:text-white">
              Alamat Instansi/Perusahaan
              {/* <span className="text-meta-1">*</span> */}
            </label>
            <input
              type="text"
              {...register('alamat')}
              placeholder="Alamat Instansi/Perusahaan"
              className="text-md w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="text-md mb-2.5 block text-black dark:text-white">
              Nomor Telepon
            </label>
            <input
              type="text"
              {...register('handphone')}
              placeholder="Nomor Telepon"
              className="text-md w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <SelectInstansi
            {...register('idInstansi')}
            setValue={setValueForm}
            kecId={dataPenilaian[0]?.idInstansi}
          />
        </div>
      </form>
      <Toast ref={toast} />
    </DefaultLayout>
  );
};
