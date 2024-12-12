import React from 'react';
import { UserPlus, MoreVertical } from 'lucide-react';
import { Avatar } from '../common/Avatar';

export function TeamMembers() {
  const members = [
    {
      name: 'John Doe',
      role: '团队负责人',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      email: 'john@example.com',
      status: 'active'
    },
    // More members...
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">团队成员</h3>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
          <UserPlus size={18} />
          <span>邀请成员</span>
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Avatar src={member.avatar} alt={member.name} size="md" />
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500">{member.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">{member.role}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                member.status === 'active' 
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {member.status === 'active' ? '在线' : '离线'}
              </span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}