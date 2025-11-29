import React from 'react';
import { Department } from '../types';
import { ChevronRight } from 'lucide-react';

interface DepartmentCardProps {
  department: Department;
  onClick: () => void;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ department, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 flex justify-between items-center group border border-transparent hover:border-gray-200 ${department.color} bg-opacity-30`}
    >
      <div>
        <span className="inline-block px-2 py-1 text-xs font-bold uppercase tracking-wider bg-white bg-opacity-60 rounded mb-2">
          {department.code}
        </span>
        <h3 className="text-xl font-bold">{department.name}</h3>
        <p className="text-sm opacity-80 mt-1">{department.schedule.length} Days Scheduled</p>
      </div>
      <div className="bg-white bg-opacity-40 p-2 rounded-full group-hover:bg-opacity-80 transition-all">
        <ChevronRight className="w-5 h-5" />
      </div>
    </button>
  );
};