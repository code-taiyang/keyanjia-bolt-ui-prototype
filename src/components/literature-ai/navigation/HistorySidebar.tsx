import React, { useState } from 'react';
import { X, Plus, Star, MoreVertical, Trash2, Edit2, CheckSquare, Square } from 'lucide-react';
import { useLiteratureStore } from '../../../stores/literatureStore';
import { Tooltip } from '../../../components/common/Tooltip';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatHistoryItem {
  id: string;
  title: string;
  time: string;
  isStarred: boolean;
}

interface ChatGroup {
  title: string;
  chats: ChatHistoryItem[];
}

function ChatHistoryItem({ 
  chat, 
  onToggleStar, 
  onDelete,
  onRename,
  isBatchMode,
  isSelected,
  onSelect
}: { 
  chat: ChatHistoryItem; 
  onToggleStar: (id: string) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, newTitle: string) => void;
  isBatchMode: boolean;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(chat.title);

  const handleRename = () => {
    onRename(chat.id, newTitle);
    setIsEditing(false);
    setShowMenu(false);
  };

  return (
    <div className="w-full px-3 py-2.5 hover:bg-gray-50 rounded-lg text-left group relative cursor-pointer">
      <div className="flex items-start gap-3">
        {isBatchMode ? (
          <button
            onClick={() => onSelect(chat.id)}
            className="mt-1 flex-shrink-0"
          >
            {isSelected ? (
              <CheckSquare size={16} className="text-blue-600" />
            ) : (
              <Square size={16} className="text-gray-400" />
            )}
          </button>
        ) : null}
        
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onBlur={handleRename}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleRename();
                if (e.key === 'Escape') setIsEditing(false);
              }}
              className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          ) : (
            <div className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
              {chat.title}
            </div>
          )}
          <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
            <span>{chat.time}</span>
            {chat.isStarred && (
              <>
                <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
              </>
            )}
          </div>
        </div>
        
        {!isBatchMode && !isEditing && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu(!showMenu);
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <MoreVertical size={14} className="text-gray-400" />
              </button>
              
              {showMenu && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border py-1 z-10">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setShowMenu(false);
                    }}
                    className="w-full px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Edit2 size={14} />
                    <span>重命名</span>
                  </button>
                  <button
                    onClick={() => {
                      onDelete(chat.id);
                      setShowMenu(false);
                    }}
                    className="w-full px-3 py-1.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 size={14} />
                    <span>删除</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function HistorySidebar({ isOpen, onClose }: HistorySidebarProps) {
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [selectedChats, setSelectedChats] = useState<string[]>([]);
  const { messages, deleteMessage, renameMessage, deleteMessages } = useLiteratureStore();
  const [historyGroups] = React.useState<ChatGroup[]>([
    {
      title: '今天',
      chats: [
        { id: '1', title: '深度学习在气候预测中的应用研究', time: '10:30', isStarred: true },
        { id: '2', title: '机器学习算法性能对比分析', time: '09:15', isStarred: false }
      ]
    },
    {
      title: '昨天',
      chats: [
        { id: '3', title: '神经网络模型优化研究', time: '15:45', isStarred: true },
        { id: '4', title: '数据预处理方法探讨', time: '11:20', isStarred: false }
      ]
    },
    {
      title: '更早',
      chats: [
        { id: '5', title: '强化学习在控制系统中的应用', time: '3月10日', isStarred: false },
        { id: '6', title: '图神经网络最新研究进展', time: '3月8日', isStarred: true }
      ]
    }
  ]);

  const allChats = historyGroups.flatMap(group => group.chats);
  
  const handleToggleStar = React.useCallback((chatId: string) => {
    // 实际应用中这里应该调用 store 的方法来更新状态
    console.log('Toggle star for chat:', chatId);
  }, []);

  const handleDelete = React.useCallback((chatId: string) => {
    deleteMessage(chatId);
  }, [deleteMessage]);

  const handleRename = React.useCallback((chatId: string, newTitle: string) => {
    renameMessage(chatId, newTitle);
  }, [renameMessage]);

  const handleBatchDelete = () => {
    if (selectedChats.length === 0) return;
    
    if (confirm(`确定要删除选中的 ${selectedChats.length} 条对话吗？`)) {
      deleteMessages(selectedChats);
      setSelectedChats([]);
      setIsBatchMode(false);
    }
  };

  const toggleSelectAll = () => {
    if (selectedChats.length === allChats.length) {
      setSelectedChats([]);
    } else {
      setSelectedChats(allChats.map(chat => chat.id));
    }
  };

  return (
    <div className={`
      fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-20
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-14 border-b bg-gray-50/80 backdrop-blur-sm">
          <h2 className="text-base font-medium text-gray-900">历史对话</h2>
          <div className="flex items-center gap-2">
            <Tooltip content="批量操作" placement="bottom">
              <button 
                onClick={() => setIsBatchMode(!isBatchMode)}
                className="p-2 hover:bg-white/80 rounded-lg transition-colors relative group"
              >
                <CheckSquare size={18} className="text-gray-600" />
              </button>
            </Tooltip>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/80 rounded-lg transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Batch Mode Header */}
        {isBatchMode && (
          <div className="px-4 py-2 border-b bg-blue-50/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleSelectAll}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  {selectedChats.length === allChats.length ? (
                    <CheckSquare size={16} className="text-blue-600" />
                  ) : (
                    <Square size={16} />
                  )}
                  <span>全选</span>
                </button>
                <span className="text-sm text-gray-500">
                  已选择 {selectedChats.length} 项
                </span>
              </div>
              {selectedChats.length > 0 && (
                <button
                  onClick={handleBatchDelete}
                  className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                >
                  <Trash2 size={14} />
                  <span>删除</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* New Chat Button */}
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm">
            <Plus size={18} />
            <span className="font-medium">新建对话</span>
          </button>
        </div>

        {/* Chat History List */}
        <div className="flex-1 overflow-y-auto px-2">
          {historyGroups.map((group, index) => (
            <div key={index} className="mb-6 last:mb-2">
              <div className="px-2 mb-2">
                <h3 className="text-xs font-medium text-gray-500">
                  {group.title}
                </h3>
              </div>
              <div className="space-y-1">
                {group.chats.map(chat => (
                  <ChatHistoryItem
                    key={chat.id}
                    chat={chat}
                    onToggleStar={handleToggleStar}
                    onDelete={handleDelete}
                    onRename={handleRename}
                    isBatchMode={isBatchMode}
                    isSelected={selectedChats.includes(chat.id)}
                    onSelect={(id) => {
                      setSelectedChats(prev => 
                        prev.includes(id)
                          ? prev.filter(chatId => chatId !== id)
                          : [...prev, id]
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
