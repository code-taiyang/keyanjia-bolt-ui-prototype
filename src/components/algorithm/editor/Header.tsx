import React from 'react';
import { ArrowLeft, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  projectName: string;
  isEditingName: boolean;
  onEditName: (editing: boolean) => void;
  onNameChange: (name: string) => void;
}

export function Header({
  projectName,
  isEditingName,
  onEditName,
  onNameChange
}: HeaderProps) {
  const navigate = useNavigate();

  const handleProjectNameSave = () => {
    onEditName(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/tools/algorithm')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回算法列表
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          {isEditingName ? (
            <div className="flex items-center">
              <input
                type="text"
                value={projectName}
                onChange={(e) => onNameChange(e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
                onBlur={handleProjectNameSave}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleProjectNameSave();
                  }
                }}
              />
            </div>
          ) : (
            <div className="flex items-center group">
              <span className="text-lg font-medium">{projectName}</span>
              <button
                onClick={() => onEditName(true)}
                className="ml-2 p-1 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Pencil className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}