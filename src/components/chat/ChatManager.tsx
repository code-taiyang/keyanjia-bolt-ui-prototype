import React, { useState, useMemo } from 'react';
import { ChatHistory } from './history';
import { ChatInterface } from './interface/ChatInterface';
import { AssistantList } from './assistants/AssistantList';
import { AIAssistant, ChatSession } from './history/types';
import { Brain } from 'lucide-react';

export function ChatManager() {
  const [activeSessionId, setActiveSessionId] = useState<string>();
  const [searchQuery, setSearchQuery] = useState('');

  // 模拟会话数据
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: '深度学习在气候预测中的应用',
      preview: '讨论了深度学习模型在气候变化预测中的应用和优势...',
      assistant: {
        id: 'technical',
        role: 'technical',
        name: 'Tech Specialist',
        description: '技术专家',
        icon: Brain,
        capabilities: ['代码审查', '技术架构', '问题诊断', '性能优化']
      },
      messages: [
        {
          id: '1',
          content: '您好！我是技术专家助手。我可以帮您解答关于深度学习和气候预测的问题。',
          type: 'assistant',
          timestamp: new Date('2024-03-15T10:00:00')
        },
        {
          id: '2',
          content: '我想了解深度学习模型在气候预测中的应用场景。',
          type: 'user',
          timestamp: new Date('2024-03-15T10:01:00')
        }
      ],
      createdAt: new Date('2024-03-15T10:00:00'),
      updatedAt: new Date('2024-03-15T10:02:00'),
      isStarred: true
    }
  ]);

  const handleAssistantSelect = (assistant: AIAssistant) => {
    // 创建新会话
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: '新对话',
      preview: '',
      assistant,
      messages: [
        {
          id: '1',
          content: `您好！我是${assistant.name}。${assistant.description}`,
          type: 'assistant',
          timestamp: new Date()
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    setSessions(prev => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
  };

  const handleSessionSelect = (session: ChatSession) => {
    setActiveSessionId(session.id);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleNewChat = () => {
    setActiveSessionId(undefined);
  };

  const activeSession = sessions.find(s => s.id === activeSessionId);

  return (
    <div className="flex h-full">
      <ChatHistory
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSessionSelect={handleSessionSelect}
        onSearch={handleSearch}
        onNewChat={handleNewChat}
      />
      
      <div className="flex-1">
        {!activeSession ? (
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-lg font-medium mb-6">选择助手开始对话</h2>
            <AssistantList onSelect={handleAssistantSelect} />
          </div>
        ) : (
          <ChatInterface
            session={activeSession}
            onStar={() => {
              setSessions(prev => prev.map(s => 
                s.id === activeSession.id 
                  ? { ...s, isStarred: !s.isStarred }
                  : s
              ));
            }}
            onArchive={() => {
              setSessions(prev => prev.map(s => 
                s.id === activeSession.id 
                  ? { ...s, isArchived: !s.isArchived }
                  : s
              ));
            }}
          />
        )}
      </div>
    </div>
  );
}