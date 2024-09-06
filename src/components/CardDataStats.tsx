import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="pt-6 px-7.5">{title}</div>
      <div className="flex items-end justify-between py-3 px-7.5">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>
      </div>
      <div className="bg-[#24A3C4] p-2 rounded-b-lg text-center cursor-pointer">
        <span className="text-sm font-medium text-white">
          Selengkapnya <span className="ml-1">›</span>
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
