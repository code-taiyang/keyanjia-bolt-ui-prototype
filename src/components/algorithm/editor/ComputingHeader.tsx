import React from 'react';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ComputingStep } from '../../../types/algorithm';

interface ComputingHeaderProps {
  steps: ComputingStep[];
  currentStep: number;
}

export function ComputingHeader({ steps, currentStep }: ComputingHeaderProps) {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <Link 
          to="/tools/algorithm"
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        
        <div>
          <h1 className="text-xl font-medium text-gray-900">算法编辑器</h1>
          <p className="text-sm text-gray-500">正在运行计算任务</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Share2 className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Download className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}