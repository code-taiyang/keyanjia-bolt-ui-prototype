import React from 'react';
import { MessageSquare, Wand2, BookOpen, Brain, FileText, Search, Lightbulb, Database } from 'lucide-react';
import { Message } from '../../../stores/literatureStore';

interface ChatMessageProps {
  message: Message;
  isSelected: boolean;
  onClick: () => void;
  onQuestionClick: (question: string) => void;
  onReferenceClick?: (refId: string) => void;
}

export function ChatMessage({ message, isSelected, onClick, onQuestionClick, onReferenceClick }: ChatMessageProps) {
  const isAI = message.type === 'ai';
  const isWelcome = isAI && message.content.includes('欢迎使用文献AI');

  const renderSection = (title: string, questions: string[], icon: React.ReactNode) => (
    <div className="p-4 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:border-gray-200 transition-all duration-200">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-900">
        <div className="p-1.5 rounded-lg bg-gray-50">
          {icon}
        </div>
        <span>{title}</span>
      </div>
      <div className="space-y-1">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 py-1.5 transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );

  const renderWelcomeContent = () => (
    <div className="space-y-6">
      <p className="text-sm text-gray-900">{message.content}</p>

      <div className="grid grid-cols-3 gap-4">
        {renderSection(
          "研究规划",
          [
            "如何确定研究方向？",
            "研究计划制定建议",
            "实验设计方案"
          ],
          <Brain size={16} className="text-gray-600" />
        )}
        {renderSection(
          "实验规划",
          [
            "实验方案设计",
            "实验条件优化",
            "数据采集计划"
          ],
          <BookOpen size={16} className="text-gray-600" />
        )}
        {renderSection(
          "写作指导",
          [
            "如何组织论文结构？",
            "改进学术表达",
            "参考文献规范"
          ],
          <FileText size={16} className="text-gray-600" />
        )}
        {renderSection(
          "文献检索",
          [
            "查找相关研究",
            "追踪研究进展",
            "寻找研究空白"
          ],
          <Search size={16} className="text-gray-600" />
        )}
        {renderSection(
          "创新思路",
          [
            "发现研究机会",
            "跨领域启发",
            "方法创新建议"
          ],
          <Lightbulb size={16} className="text-gray-600" />
        )}
        {renderSection(
          "数据分析",
          [
            "数据处理方法",
            "统计分析建议",
            "可视化方案"
          ],
          <Database size={16} className="text-gray-600" />
        )}
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => onQuestionClick("解读示例文献")}
          className="flex-1 text-center text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-2 transition-colors"
        >
          解读示例文献
        </button>
        <button 
          onClick={() => onQuestionClick("上传我的文献")}
          className="flex-1 text-center text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-2 transition-colors"
        >
          上传我的文献
        </button>
      </div>
    </div>
  );

  const renderMessageContent = () => {
    if (isWelcome) return renderWelcomeContent();

    let content = message.content;
    if (message.references) {
      message.references.forEach((refId, index) => {
        const refMark = `[${refId}]`;
        content = content.replace(refMark, `<span class="text-blue-600 cursor-pointer hover:underline" data-ref="${refId}">[${index + 1}]</span>`);
      });
    }

    return (
      <div 
        className="text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'SPAN' && target.dataset.ref) {
            onReferenceClick?.(target.dataset.ref);
          }
        }}
      />
    );
  };

  return (
    <div 
      className={`
        px-12 py-4 cursor-pointer
        ${isSelected ? 'bg-gray-50/80' : 'hover:bg-gray-50/50'} 
        transition-colors duration-200
      `}
      onClick={onClick}
    >
      <div className="max-w-4xl mx-auto flex gap-4">
        {isAI && (
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 ring-2 ring-blue-50">
            <Wand2 className="text-blue-600" size={20} />
          </div>
        )}
        
        <div className={`flex-1 flex ${isAI ? '' : 'justify-end'}`}>
          <div className={`
            rounded-xl p-4
            ${isAI 
              ? 'bg-white shadow-sm border border-gray-100/50 max-w-[85%]' 
              : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm max-w-[85%]'
            }
            ${isSelected ? 'ring-2 ring-blue-100' : ''}
          `}>
            {renderMessageContent()}
          </div>
        </div>

        {!isAI && (
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 ring-2 ring-gray-50">
            <MessageSquare className="text-gray-600" size={20} />
          </div>
        )}
      </div>
    </div>
  );
}