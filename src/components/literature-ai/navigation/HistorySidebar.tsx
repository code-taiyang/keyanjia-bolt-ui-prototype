import React from 'react';
import { X, Plus, Star } from 'lucide-react';
import { useLiteratureStore } from '../../../stores/literatureStore';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatItem {
  id: string;
  title: string;
  time: string;
  isStarred: boolean;
}

interface ChatGroup {
  title: string;
  chats: ChatItem[];
}

function ChatHistoryItem({ chat, onToggleStar }: { chat: ChatItem; onToggleStar: (id: string) => void }) {
  return (
    <div className="w-full px-3 py-2.5 hover:bg-gray-50 rounded-lg text-left group transition-colors relative cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
            {chat.title}
          </div>
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
        <div 
          onClick={(e) => {
            e.stopPropagation();
            onToggleStar(chat.id);
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded cursor-pointer"
        >
          <Star 
            size={14} 
            className={chat.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
          />
        </div>
      </div>
    </div>
  );
}

export function HistorySidebar({ isOpen, onClose }: HistorySidebarProps) {
  const { startNewChat } = useLiteratureStore();
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

  const handleToggleStar = React.useCallback((chatId: string) => {
    // 实际应用中这里应该调用 store 的方法来更新状态
    console.log('Toggle star for chat:', chatId);
  }, []);

  const handleNewChat = React.useCallback(() => {
    startNewChat();
    onClose();
  }, [startNewChat, onClose]);

  return (
    <div className={`
      fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-20
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-14 border-b bg-gray-50/80 backdrop-blur-sm">
          <h2 className="text-base font-medium text-gray-900">历史对话</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/80 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={handleNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm"
          >
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