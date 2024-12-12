import React, { useState } from 'react';
import { LiteratureChat } from './LiteratureChat';
import { LiteratureReference } from './LiteratureReference';
import { ChatHistory } from './ChatHistory';
import { ChatSession } from './ChatHistory/types';

export function LiteratureLayout() {
  const [activeSessionId, setActiveSessionId] = useState('1');
  
  const chatSessions: ChatSession[] = [
    {
      id: '1',
      title: '深度学习在气候预测中的应用',
      preview: '讨论了深度学习模型在气候变化预测中的应用和优势...',
      date: '今天',
      time: '10分钟前',
      isStarred: true,
      type: 'literature_review',
      status: 'active'
    },
    {
      id: '2',
      title: '机器学习算法比较研究',
      preview: '分析了不同机器学习算法在数据分析中的表现...',
      date: '今天',
      time: '2小时前',
      type: 'literature_analysis',
      status: 'active'
    },
    {
      id: '3',
      title: '神经网络模型优化',
      preview: '探讨了神经网络模型的优化方法和技巧...',
      date: '昨天',
      time: '下午3:45',
      type: 'literature_summary',
      status: 'completed'
    }
  ];

  const handleSessionSelect = (sessionId: string) => {
    setActiveSessionId(sessionId);
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="flex h-screen">
      <ChatHistory
        sessions={chatSessions}
        activeSessionId={activeSessionId}
        onSessionSelect={handleSessionSelect}
        onSearch={handleSearch}
      />
      
      <div className="flex-1 min-w-0">
        <LiteratureChat />
      </div>
      
      <div className="w-96 border-l bg-white">
        <LiteratureReference />
      </div>
    </div>
  );
}