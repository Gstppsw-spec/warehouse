import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { useState } from 'react';
import indonesia from '../../images/logo/indonesia.png';
import uk from '../../images/logo/united-kingdom.png';
import { FaChevronDown } from 'react-icons/fa';
import DarkModeSwitcher from '../../components/Header/DarkModeSwitcher';

export const Pengaturan = () => {
  const navigate = useNavigate();
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
          <h1 className="text-lg font-bold text-black">Pengaturan</h1>
        </div>
      </div>
      <hr className="my-3" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-6 flex flex-row gap-9">
          <div className="w-1/2 flex flex-col gap-5 ">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Pilih Bahasa
            </label>
            <div className="relative inline-block">
              <button
                className="border rounded-lg py-2 px-4 bg-white dark:bg-gray-800 dark:text-white flex items-center justify-between w-60"
                onClick={toggleDropdown}
              >
                {/* Display selected language */}
                <div className="flex items-center dark:text-black">
                  <img
                    src={selectedLang.flag}
                    alt={selectedLang.label}
                    className="w-6 h-6 mr-2"
                  />
                  {selectedLang.label}
                </div>
                {/* Arrow icon */}
                <FaChevronDown className="ml-2 dark:text-black" />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer dark:text-black"
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

          <div className="w-1/2 flex flex-col gap-5 ">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Pilih Mode
            </label>
            <DarkModeSwitcher />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
