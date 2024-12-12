import React from 'react';
import { Users, Star, ChevronRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';

interface TeamMember {
  avatar: string;
  name: string;
  role: string;
}

interface Team {
  id: number;
  name: string;
  description: string;
  members: TeamMember[];
  projects: number;
  resources: number;
}

interface TeamListProps {
  teams: Team[];
}

export function TeamList({ teams }: TeamListProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {teams.map((team) => (
        <Card key={team.id} className="group">
          <div className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                <Users className="text-blue-600" size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {team.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Star size={16} className="text-gray-400" />
                    </button>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {team.members.map((member, index) => (
                        <Avatar 
                          key={index}
                          src={member.avatar}
                          alt={member.name}
                          size="sm"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {team.members.length} 名成员
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{team.projects} 个项目</span>
                    <span>{team.resources} 个资源</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}