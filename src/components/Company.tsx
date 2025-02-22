"use client";

import { useState } from "react";
import { ServicesTab } from "./tabs/ServicesTab";
import { RecruitTab } from "./tabs/RecruitTab";

const Company = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'recruit'>('services');

  return (
    <div>
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('services')}
          className={`px-8 py-4 text-lg font-medium min-w-[150px] ${
            activeTab === 'services' 
              ? 'bg-blue-500 text-white rounded-t-lg'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          サービス
        </button>
        <button 
          onClick={() => setActiveTab('recruit')}
          className={`px-8 py-4 text-lg font-medium min-w-[150px] ${
            activeTab === 'recruit' 
              ? 'bg-blue-500 text-white rounded-t-lg'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          採用情報
        </button>
      </div>

      <div>
        {activeTab === 'services' ? <ServicesTab /> : <RecruitTab />}
      </div>
    </div>
  );
};

export default Company; 