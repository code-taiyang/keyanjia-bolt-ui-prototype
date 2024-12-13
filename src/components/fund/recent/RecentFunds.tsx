import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FundCard } from './FundCard';
import { useFundStore } from '../../../stores/fundStore';

export function RecentFunds() {
  const funds = useFundStore(state => state.funds);

  const renderFundLink = (fund: ReturnType<typeof useFundStore>['funds'][0]) => (
    <Link 
      key={fund.id} 
      to={`/fund/${fund.id}`}
      state={{
        fundId: fund.id,
        title: fund.title,
        description: fund.description,
        type: fund.type,
        status: fund.status,
        progress: fund.progress,
        deadline: fund.deadline,
        isNew: false
      }}
    >
      <FundCard fund={fund} />
    </Link>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近申请</h2>
        <Link 
          to="/activities?type=fund" 
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {funds.map(renderFundLink)}
      </div>
    </div>
  );
}