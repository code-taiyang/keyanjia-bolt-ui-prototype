import React from 'react';
import { ChevronDown, Users } from 'lucide-react';
import { Avatar } from '../common/Avatar';

interface Team {
  id: string;
  name: string;
  avatar: string;
  role: string;
  memberCount: number;
}

export function TeamSelector() {
  const teams: Team[] = [
    {
      id: 'team1',
      name: '气候研究组',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      role: '组长',
      memberCount: 8
    },
    {
      id: 'team2',
      name: '神经网络实验室',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
      role: '成员',
      memberCount: 12
    }
  ];

  return (
    <div className="relative">
      <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
        <Users size={16} />
        <span>切换团队</span>
        <ChevronDown size={16} />
      </button>

      <div className="absolute top-full left-0 w-64 mt-2 bg-white border rounded-lg shadow-lg py-2">
        {teams.map((team) => (
          <button
            key={team.id}
            className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50"
          >
            <Avatar src={team.avatar} alt={team.name} size="sm" />
            <div className="flex-1 min-w-0 text-left">
              <div className="font-medium text-gray-900">{team.name}</div>
              <div className="text-xs text-gray-500">
                {team.role} · {team.memberCount} 名成员
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}