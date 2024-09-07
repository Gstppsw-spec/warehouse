import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo/login.png';
import { useForm } from 'react-hook-form';
import Hide from '../../images/logo/hide.png';
import View from '../../images/logo/view.png';
import indonesia from '../../images/logo/indonesia.png';
import uk from '../../images/logo/united-kingdom.png';
import { FaChevronDown } from 'react-icons/fa';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('id'); // Default language set to Indonesia
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for showing/hiding dropdown

  const languages = [
    {
      code: 'id',
      label: 'Indonesia',
      flag: indonesia,
    },
    {
      code: 'en',
      label: 'English',
      flag: uk,
    },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle the dropdown

  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode);
    setDropdownOpen(false); // Close the dropdown after selecting
  };

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // isValid digunakan untuk memeriksa apakah form valid
  } = useForm({
    mode: 'all', // validasi dilakukan secara langsung
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
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

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <main>
        <div className="">
          <div className="p-12 flex items-center justify-center">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-4/5">
              <div className="flex flex-wrap items-center">
                <div className="border-stroke dark:border-strokedark w-2/5 h-[500px]">
                  <div className="absolute top-16 left-46">
                    <div className="relative inline-block">
                      <button
                        className="border rounded-lg py-1 px-4 bg-white dark:bg-gray-800 dark:text-white flex items-center justify-between w-38"
                        onClick={toggleDropdown}
                      >
                        {/* Display selected language */}
                        <div className="flex items-center">
                          <img
                            src={selectedLang.flag}
                            alt={selectedLang.label}
                            className="w-6 h-6 mr-2"
                          />
                          {selectedLang.label}
                        </div>
                        {/* Arrow icon */}
                        <FaChevronDown className="ml-2" />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
                          <div className="py-1">
                            {languages.map((lang) => (
                              <div
                                key={lang.code}
                                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                onClick={() => handleLanguageChange(lang.code)}
                              >
                                <img
                                  src={lang.flag}
                                  alt={lang.label}
                                  className="w-6 h-6 mr-2"
                                />
                                {lang.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-12.5  items-center justify-items-center">
                    <h1 className="mb-1.5 text-center text-3xl font-semibold text-black dark:text-white">
                      Masuk
                    </h1>
                    <h2 className="mb-9 text-sm font-medium text-black dark:text-white text-center">
                      Silahkan isi form dengan akun anda
                    </h2>

                    <form>
                      <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                          Email atau Username
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Masukkan Email atau Username Anda"
                            className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-6 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            {...register('username', {
                              required: 'Username wajib diisi',
                            })}
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
                            {...register('password', {
                              required: 'Kata sandi wajib diisi',
                            })}
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

                      <div className="mb-5">
                        <input
                          type="submit"
                          disabled={!isValid}
                          value="Masuk"
                          onClick={() => navigate('/')}
                          className={`w-full text-center cursor-pointer rounded-lg border border-[#24A3C4] bg-[#24A3C4] p-2 text-white transition hover:bg-opacity-90 ${
                            !isValid && 'opacity-50 cursor-not-allowed'
                          }`}
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <p>
                          Belum punya akun?
                          <Link
                            to="/auth/signup"
                            className="text-[#24A3C4] ml-2 font-bold"
                          >
                            Daftar
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
    </div>
  );
};

export default SignIn;
