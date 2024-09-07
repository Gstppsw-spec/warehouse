import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Logo from '../../images/logo/login.png';
import Hide from '../../images/logo/hide.png';
import View from '../../images/logo/view.png';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  // Gunakan useForm dari react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // isValid digunakan untuk memeriksa apakah form valid
  } = useForm({
    mode: 'all', // validasi dilakukan secara langsung
    reValidateMode: 'onChange',
    defaultValues: {
      namaInstansi: '',
      username: '',
      password: '',
      email: '',
    },
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    console.log(data); // Bisa dipakai untuk mengirim data form
    setVisible(true);
  };

  const footerContent = (
    <div className="flex justify-center w-full text-white text-sm font-normal">
      <Button
        label="OK"
        className="bg-[#24A3C4] items-center px-3 py-2"
        onClick={() => {
          setVisible(false);
          navigate('/auth/signin');
        }}
        autoFocus
      />
    </div>
  );

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <main>
        <div className="">
          <div className="p-12 flex items-center justify-center">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-4/5">
              <div className="flex flex-wrap w-full">
                <div className="border-stroke dark:border-strokedark w-2/5 h-[500px]">
                  <div className="pl-12.5 pr-12.5 py-2 items-center justify-items-center">
                    <h1 className="mb-1.5 text-center text-3xl font-semibold text-black dark:text-white">
                      Daftar
                    </h1>
                    <h2 className="mb-3 text-lg font-medium text-black dark:text-white text-center">
                      Lengkapi formulir di bawah ini
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-2">
                        <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                          Nama Instansi / Perusahaan
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Masukkan Nama Instansi / Perusahaan"
                            className="text-sm w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            {...register('namaInstansi', { required: 'Nama Instansi wajib diisi' })} // Menggunakan register dari useForm
                          />
                          {errors.namaInstansi && (
                            <p className="text-red-500 text-sm">
                              {errors.namaInstansi.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mb-2">
                        <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Masukkan Email atau Username Anda"
                            className="text-sm w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            {...register('email', { required: 'Email wajib diisi' })} // Menggunakan register dari useForm
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mb-2">
                        <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                          Username
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Masukkan Username Anda"
                            className="text-sm w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            {...register('username', { required: 'Username wajib diisi' })}
                          />
                          {errors.username && (
                            <p className="text-red-500 text-sm">
                              {errors.username.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="mb-1.5 block font-medium text-black dark:text-white text-sm">
                          Kata sandi
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan Kata Sandi Anda"
                            className="text-sm w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            {...register('password', { required: 'Kata sandi wajib diisi' })}
                          />
                          <span
                            className="absolute right-4 top-3 cursor-pointer"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <img src={View} className="w-5 h-5" />
                            ) : (
                              <img src={Hide} className="w-5 h-5" />
                            )}
                          </span>
                          {errors.password && (
                            <p className="text-red-500 text-sm">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          type="submit"
                          value="Daftar"
                          className={`w-full text-center cursor-pointer rounded-lg border border-[#24A3C4] bg-[#24A3C4] p-2 text-white transition hover:bg-opacity-90 ${!isValid && 'opacity-50 cursor-not-allowed'}`}
                          disabled={!isValid} // Tombol nonaktif jika form belum valid
                        />
                      </div>

                      <div className="mt-4 text-center">
                        <p>
                          Sudah punya akun?
                          <Link
                            to="/auth/signin"
                            className="text-[#24A3C4] ml-2 font-bold"
                          >
                            Masuk
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="w-3/5 rounded-sm border border-stroke bg-[#24A3C4] shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="text-center">
                    <div className="inline-block relative">
                      <img
                        className="h-[500px] w-[100%]"
                        src={Logo}
                        alt="Logo"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                        <span className="text-xl text-[#E6E0DC] font-bold">
                          Warehouse Management System
                        </span>
                        <span className="text-md text-[#E6E0DC] mb-2">
                          Mengelola gudang perusahaan anda dengan efektif dan
                          efisien
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Dialog
        visible={visible}
        closable={false}
        modal
        footer={footerContent}
        style={{ width: '20rem' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className=''>
          <div className=" p-2 rounded-full items-center flex justify-center w-full">
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
          <div className='p-2 rounded-full items-center flex justify-center w-full'>
            <p className="m-0">Daftar akun sukses</p>
          </div>
          
        </div>
      </Dialog>
    </div>
  );
};

export default SignIn;
