import { useCallback, useRef, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import SelectPenanggungJawab from '../Component/select-penganggung';
import SelectStatus from '../Component/select-status';
import SelectBarang from '../Component/select-barang';
import SelectSatuan from '../Component/select-satuan';
import SelectEkspedisi from '../Component/select-ekspedisi';
import SelectPosisi from '../Component/select-posisi';
import SelectPenilaian from '../Component/select-penialaian';
import SelectPeriode from '../Component/select-periode';

const dataPenilaian = [
  {
    id: 1,
    idKaryawan: 1,
    idKualitas: 5,
    idInisiatif: 5,
    idDisplin: 4,
    idTanggungJawab: 4,
    idKerjaSama: 3,
    idPemahaman: 5,
    idPenyesuaian: 1,
    idEfektifitas: 3,
    idKeputusan: 3,
    idTekanan: 2,
    idPeriode: 1,
  },
  {
    id: 2,
    idKaryawan: 2,
    idKualitas: 4,
    idInisiatif: 4,
    idDisplin: 3,
    idTanggungJawab: 5,
    idKerjaSama: 4,
    idPemahaman: 4,
    idPenyesuaian: 2,
    idEfektifitas: 4,
    idKeputusan: 5,
    idTekanan: 3,
    idPeriode: 1,
  },
  {
    id: 3,
    idKaryawan: 3,
    idKualitas: 5,
    idInisiatif: 3,
    idDisplin: 5,
    idTanggungJawab: 5,
    idKerjaSama: 5,
    idPemahaman: 4,
    idPenyesuaian: 3,
    idEfektifitas: 4,
    idKeputusan: 3,
    idTekanan: 4,
    idPeriode: 1,
  },
  {
    id: 4,
    idKaryawan: 4,
    idKualitas: 2,
    idInisiatif: 3,
    idDisplin: 4,
    idTanggungJawab: 4,
    idKerjaSama: 2,
    idPemahaman: 5,
    idPenyesuaian: 4,
    idEfektifitas: 3,
    idKeputusan: 2,
    idTekanan: 3,
    idPeriode: 1,
  },
  {
    id: 5,
    idKaryawan: 5,
    idKualitas: 3,
    idInisiatif: 2,
    idDisplin: 5,
    idTanggungJawab: 4,
    idKerjaSama: 4,
    idPemahaman: 3,
    idPenyesuaian: 3,
    idEfektifitas: 5,
    idKeputusan: 4,
    idTekanan: 2,
    idPeriode: 1,
  },
  {
    id: 6,
    idKaryawan: 6,
    idKualitas: 5,
    idInisiatif: 4,
    idDisplin: 5,
    idTanggungJawab: 3,
    idKerjaSama: 4,
    idPemahaman: 4,
    idPenyesuaian: 3,
    idEfektifitas: 5,
    idKeputusan: 4,
    idTekanan: 3,
    idPeriode: 1,
  },
  {
    id: 7,
    idKaryawan: 7,
    idKualitas: 4,
    idInisiatif: 5,
    idDisplin: 4,
    idTanggungJawab: 5,
    idKerjaSama: 3,
    idPemahaman: 4,
    idPenyesuaian: 2,
    idEfektifitas: 3,
    idKeputusan: 4,
    idTekanan: 5,
    idPeriode: 2,
  },
];

export const TambahPenilaian = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

  const { form } = location.state || {};

  console.log(form);
  
  const toast = useRef<Toast>(null);

  //   console.log(data);

  var filteredDataPenilaian: any;

  if(form == 1){
    filteredDataPenilaian = []
  } else {
    filteredDataPenilaian = dataPenilaian.filter(
        (penilaian) => penilaian.idKaryawan === data?.id,
      );
  }

  

  const {
    register,
    handleSubmit,
    setValue: setValueForm,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      idKaryawan: data?.id,
      name: data?.name,
      nip: data?.nip,
      idPosisi: data?.idPosisi,
      idKualitas: filteredDataPenilaian[0]?.idKualitas,
      idInisiatif: filteredDataPenilaian[0]?.idInisiatif,
      idDisplin: filteredDataPenilaian[0]?.idDisplin,
      idTanggungJawab: filteredDataPenilaian[0]?.idTanggungJawab,
      idKerjaSama: filteredDataPenilaian[0]?.idKerjaSama,
      idPemahaman: filteredDataPenilaian[0]?.idPemahaman,
      idPenyesuaian: filteredDataPenilaian[0]?.idPenyesuaian,
      idEfektifitas: filteredDataPenilaian[0]?.idEfektifitas,
      idKeputusan: filteredDataPenilaian[0]?.idKeputusan,
      idTekanan: filteredDataPenilaian[0]?.idTekanan,
      idPeriode: filteredDataPenilaian[0]?.idPeriode,
    },
  });

  console.log(filteredDataPenilaian[0]?.idDisplin);

  const accept = () => {
    navigate('/manajemen');
  };

  const reject = () => {};

  const confirm2 = () => {
    confirmDialog({
      message: (
        <span style={{ fontSize: '12px', wordWrap: 'break-word' }}>
          Penilaian karyawan baru berhasil ditambahkan. Anda akan dialihkan ke halaman
          manajemen.
        </span>
      ),
      header: 'Berhasil menambahkan penilaian',
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

  const onSubmit: SubmitHandler<any> = useCallback(
    (formValues) => {
      if (data) {
        confirm2;
        console.log(formValues);
      } else {
        confirm2;
      }
    },
    [data],
  );

  return (
    <DefaultLayout>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 items-center">
          <button
            onClick={() => {
              navigate('/manajemen');
            }}
            aria-controls="sidebar"
            className="block "
          >
            <svg
              className="fill-black"
              width="18"
              height="16"
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
          <div>
            <h1 className="text-lg font-bold text-black">Penilaian Kayrawan</h1>
          </div>
        </div>
      </div>
      <hr className="my-3 opacity-50" />
      <div>
        <div className="">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Silahkan isi form untuk menilai kinerja karyawan
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2 flex flex-col gap-5">
                    <div>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="Nama"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        {...register('nip')}
                        placeholder="Nomor Induk Pegawai/Karyawan"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="w-1/2 flex flex-col gap-5">
                    <div>
                      <SelectPosisi
                        {...register('idPosisi')}
                        setValue={setValueForm}
                        kecId={data?.idPosisi}
                      />
                    </div>

                    <div className="">
                      <SelectPeriode
                        {...register('idPeriode')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idPeriode}
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-black mb-2 font-bold text-sm">
                  Penilaian Hasil Kerja
                </h2>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2 flex flex-col gap-5">
                    <div>
                      <SelectPenilaian
                        {...register('idKualitas')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idKualitas}
                        aspekId={1}
                      />
                    </div>

                    <div>
                      <SelectPenilaian
                        {...register('idInisiatif')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idInisiatif}
                        aspekId={2}
                      />
                    </div>

                    <div>
                      <SelectPenilaian
                        {...register('idDisplin')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idDisplin}
                        aspekId={3}
                      />
                    </div>

                    <div>
                      <SelectPenilaian
                        {...register('idTanggungJawab')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idTanggungJawab}
                        aspekId={4}
                      />
                    </div>

                    <div>
                      <SelectPenilaian
                        {...register('idKerjaSama')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idKerjaSama}
                        aspekId={5}
                      />
                    </div>
                  </div>

                  <div className="w-1/2 flex flex-col gap-5">
                    <div>
                      <SelectPenilaian
                        {...register('idPemahaman')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idPemahaman}
                        aspekId={6}
                      />
                    </div>

                    <div>
                      <SelectPenilaian
                        {...register('idPenyesuaian')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idPenyesuaian}
                        aspekId={7}
                      />
                    </div>

                    <div>
                      <SelectPenilaian
                        {...register('idEfektifitas')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idEfektifitas}
                        aspekId={8}
                      />
                    </div>
                    <div>
                      <SelectPenilaian
                        {...register('idKeputusan')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idKeputusan}
                        aspekId={9}
                      />
                    </div>
                    <div>
                      <SelectPenilaian
                        {...register('idTekanan')}
                        setValue={setValueForm}
                        kecId={filteredDataPenilaian[0]?.idTekanan}
                        aspekId={10}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2 flex flex-row justify-start text-black font-medium">
                    <div className="w-1/4">
                      <h4>Keterangan :</h4>
                    </div>
                    <div className="w-2/4">
                      <span>
                        1=Sangat Buruk, 2=Buruk, 3=Cukup, 4=Baik, 5=Sangat Baik
                      </span>
                    </div>
                  </div>

                  {/* <div className={`w-1/2 flex flex-row gap-10 ${form == 2 ? 'hidden' : ''}`}> */}
                  <div className='w-1/2 flex flex-row gap-10'>
                  <div className="w-1/2"></div>
                    <div className="w-1/2">
                      <button
                        onClick={() => navigate('/manajemen')}
                        className="flex w-full justify-center rounded-md bg-white p-3 font-medium text-black hover:bg-opacity-90 border-black border"
                      >
                        Batal
                      </button>
                    </div>
                    <div className="w-1/2">
                      <button
                        onClick={confirm2}
                        className="flex w-full justify-center rounded-md bg-[#24A3C4] p-3 font-medium text-gray hover:bg-opacity-90"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Toast ref={toast} />
      </div>
    </DefaultLayout>
  );
};
