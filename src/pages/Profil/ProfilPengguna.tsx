import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useCallback, useRef, useState } from 'react';
import Hide from '../../images/logo/hide.png';
import View from '../../images/logo/view.png';
import { Toast } from 'primereact/toast';

const dataPenilaian = [
  {
    id: 1,
    username: 'hasiolan',
    email: 'hasiholan@gmail.com',
    passwordLama: 'password',
    passwordBaru: 'password',
    imageLink:
      'https://media.istockphoto.com/id/1468586173/id/foto/potret-seorang-pemain-sepak-bola-wanita-memegang-bola-sepak-di-lapangan.jpg?s=1024x1024&w=is&k=20&c=RWoZ2BVoLzV3-TO43inE3hiZmAcqJoE-UCrBQEsbwQI=',
  },
];

export const ProfilPengguna = () => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPasswordBaru, setShowPasswordBaru] = useState(false);
  const [visibleBaru, setVisibleBaru] = useState(false);

  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityBaru = () => {
    setShowPasswordBaru(!showPasswordBaru);
  };



  const {
    register,
    handleSubmit,
    setValue: setValueForm,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: dataPenilaian[0]?.username,
      email: dataPenilaian[0]?.email,
      passwordLama: dataPenilaian[0]?.passwordLama,
      passwordBaru: dataPenilaian[0]?.passwordBaru,
      imageLink: dataPenilaian[0]?.imageLink,
    },
  });

  const accept = () => {
    navigate('/');
  };

  const reject = () => {};

  const confirm2 = () => {
    confirmDialog({
      message: (
        <span style={{ fontSize: '12px', wordWrap: 'break-word' }}>
          Profile pengguna berhasil diubah. Anda akan dialihkan ke dashboard
        </span>
      ),
      header: 'Profil pengguna berhasil diubah',
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

  const onSubmit: SubmitHandler<any> = useCallback((formValues) => {
    confirm2;
  }, []);
  return (
    <DefaultLayout>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 items-center">
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
          <div>
            <h2 className="text-lg font-bold text-black">Profil Pengguna</h2>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-row gap-9">
                <div className="w-1/2 flex  items-center justify-center">
                  <div className=" flex justify-center">
                    <img
                      src={dataPenilaian[0]?.imageLink}
                      alt={dataPenilaian[0]?.username}
                      className="w-64 h-64 object-cover rounded-md mb-2"
                    />
                  </div>
                </div>

                <div className="w-1/2 flex flex-col gap-5">
                  <div className="">
                    <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                      Username
                    </label>
                    <input
                      type="text"
                      {...register('username')}
                      placeholder="Username"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="">
                    <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                      Email
                    </label>
                    <input
                      type="text"
                      {...register('email')}
                      placeholder="Email"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="relative">
                    <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                      Kata Sandi Lama
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('passwordLama')}
                      placeholder="Kata Sandi Lama"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span
                      className="absolute right-4 bottom-4 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <img src={View} className="w-5 h-5" />
                      ) : (
                        <img src={Hide} className="w-5 h-5" />
                      )}
                    </span>
                  </div>

                  <div className="relative">
                    <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                      Kata Sandi Baru
                    </label>
                    <input
                      type={showPasswordBaru ? 'text' : 'password'}
                      {...register('passwordBaru')}
                      placeholder="Kata Sandi Baru"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span
                      className="absolute right-4 bottom-4 cursor-pointer"
                      onClick={togglePasswordVisibilityBaru}
                    >
                      {showPasswordBaru ? (
                        <img src={View} className="w-5 h-5" />
                      ) : (
                        <img src={Hide} className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4.5 flex flex-row gap-9">
                <div className="w-1/2"></div>

                <div className="w-1/2 flex flex-row gap-10">
                  <div className="w-1/2">
                    <button
                      onClick={() => navigate('/')}
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
        <Toast ref={toast} />

        <ConfirmDialog />
      </div>
    </DefaultLayout>
  );
};
