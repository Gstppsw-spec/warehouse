import { useCallback, useRef, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import SelectPenanggungJawab from '../Component/select-penganggung';
import SelectSatuan from '../Component/select-satuan';
import SelectJenisBarang from '../Component/select-jenis';

export const TambahEditBarang = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const location = useLocation();

  const { data } = location.state || {};

  console.log(data);

  const toast = useRef<Toast>(null);

  const {
    register,
    handleSubmit,
    setValue: setValueForm,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      tanggalProduksi: data?.tanggalProduksi,
      namaBarang: data?.namaBarang,
      beratBarang: data?.beratBarang,
      idSatuan: data?.idSatuan,
      kodeBarang: data?.kodeBarang,
      idPenanggungJawab: data?.idPenanggungJawab,
      jumlah: data?.jumlah,
      lokasiPenyimpanan: data?.lokasiPenyimpanan,
      hargaBarang: data?.hargaBarang,
      idJenis: data?.idJenis,
      tanggalMasuk: data?.tanggalMasuk,
      tanggalKadaluarsa: data?.tanggalKadaluarsa,
      keterangan: data?.keterangan,
    },
  });

  const accept = () => {
    navigate('/penyimpanan');
  };

  const reject = () => {};

  const confirm2 = () => {
    confirmDialog({
      message: (
        <span style={{ fontSize: '12px', wordWrap: 'break-word' }}>
          Data barang baru berhasil ditambahkan. Anda dapat mengedit data barang
          ini dan menyimpan ulang perubahan.
        </span>
      ),
      header: 'Barang berhasil ditambahkan',
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

  const formatRupiah = (number: any, prefix: any) => {
    const numberString = number.replace(/[^,\d]/g, '').toString();
    const split = numberString.split(',');
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
  };

  const handleInputChange = (e: any) => {
    const rawValue = e.target.value.replace(/[^\d]/g, '');
    setValue(formatRupiah(rawValue, 'Rp. '));
  };

  const validateNumberInput = (e: any) => {
    const value = e.target.value
      .replace(/[^0-9.,]/g, '')
      .replace(/,/g, '.')
      .replace(/(\..*)\./g, '$1');
    e.target.value = value;
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
              navigate('/penyimpanan');
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
            <h1 className="text-lg font-bold text-black">Tambah Barang</h1>
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
                Silahkan isi form untuk menambah barang baru
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="Nama Barang"
                      {...register('namaBarang')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-1/2 flex flex-row gap-5">
                    <div className="w-3/4">
                      <input
                        onInput={validateNumberInput}
                        type="text"
                        {...register('beratBarang')}
                        placeholder="Berat Barang"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-1/4">
                      <SelectSatuan
                        {...register('idSatuan')}
                        setValue={setValueForm}
                        kecId={data?.idSatuan}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="Kode Barang"
                      {...register('kodeBarang')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-1/2">
                    <SelectPenanggungJawab
                      {...register('idPenanggungJawab')}
                      setValue={setValueForm}
                      kecId={data?.idPenanggungJawab}
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2">
                    <input
                      type="text"
                      onInput={validateNumberInput}
                      placeholder="Jumlah"
                      {...register('jumlah')}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-1/2">
                    <input
                      type="text"
                      {...register('lokasiPenyimpanan')}
                      placeholder="Lokasi Penyimpanan"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2">
                    <input
                      {...register('hargaBarang')}
                      value={value}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Harga Barang"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-1/2">
                    <SelectJenisBarang
                      {...register('idJenis')}
                      setValue={setValueForm}
                      kecId={data?.idJenis}
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2">
                    <label className="text-md mb-2.5 block text-black dark:text-white">
                      Tanggal Masuk
                    </label>
                    <input
                      type="date"
                      {...register('tanggalMasuk')}
                      placeholder="Tanggal Masuk"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-md mb-2.5 block text-black dark:text-white">
                      Tanggal Produksi
                    </label>
                    <input
                      {...register('tanggalProduksi')}
                      type="date"
                      placeholder="Tanggal Produksi"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2">
                    <label className="text-md mb-2.5 block text-black dark:text-white">
                      Tanggal Kadaluarsa
                    </label>
                    <input
                      {...register('tanggalKadaluarsa')}
                      type="date"
                      placeholder="Tanggal Kadaluarsa"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-md mb-8.5 block text-black dark:text-white"></label>
                    <input
                      type="file"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    {...register('keterangan')}
                    rows={3}
                    placeholder="Keterangan"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <div className="mb-4.5 flex flex-row gap-9">
                  <div className="w-1/2"></div>

                  <div className="w-1/2 flex flex-row gap-10">
                    <div className="w-1/2">
                      <button
                        onClick={() => navigate('/penyimpanan')}
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
