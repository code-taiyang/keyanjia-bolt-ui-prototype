import React from 'react';

interface WelcomeSectionProps {
  section: {
    title: string;
    icon: React.ReactNode;
    questions: string[];
  };
  onQuestionClick: (question: string) => void;
}

export function WelcomeSection({ section, onQuestionClick }: WelcomeSectionProps) {
  return (
    <div className="p-4 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:border-gray-200 transition-all duration-200">
      <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-900">
        <div className="p-1.5 rounded-lg bg-gray-50">
          {section.icon}
        </div>
        <span>{section.title}</span>
      </div>
      <div className="space-y-1">
        {section.questions.map((question, index) => (
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
}