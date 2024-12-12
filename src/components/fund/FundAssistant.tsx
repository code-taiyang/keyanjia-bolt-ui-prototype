import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { RecentFunds } from './recent/RecentFunds';
import { FundGuide } from './guide/FundGuide';

export function FundAssistant() {
  const [showNewFund, setShowNewFund] = useState(false);

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">基金助手</h1>
            <p className="text-gray-500 mt-1">AI驱动的基金申请助手</p>
          </div>
          
          <button 
            onClick={() => setShowNewFund(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建申请</span>
          </button>
        </div>

        {/* Recent Funds Section */}
        <div className="space-y-8">
          <RecentFunds />
        </div>

        {/* Fund Guide Dialog */}
        {showNewFund && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
              <FundGuide onClose={() => setShowNewFund(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}