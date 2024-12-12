import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { ComputingDescription } from './computing/ComputingDescription';
import { ToolSelector } from './computing/ToolSelector';
import { FieldSelector } from './computing/FieldSelector';
import { scientificTools } from '../../data/scientificTools';

export function CodingAssistant() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const handleStartComputing = () => {
    console.log('Starting computation with:', {
      description,
      selectedTool,
      selectedField
    });

    if (!description.trim() || !selectedTool) {
      console.log('Missing required fields');
      return;
    }

    // Get selected tool and field details
    const tool = scientificTools.find(t => t.id === selectedTool);
    const field = tool?.categories
      .flatMap(cat => cat.items)
      .find(item => item.id === selectedField);

    console.log('Selected tool and field:', { tool, field });

    // Store computation info
    const computationInfo = {
      description,
      tool: tool?.name,
      field: field?.name,
      createdAt: new Date().toISOString(),
      computingSteps: [
        {
          id: 'init',
          title: '环境初始化',
          description: '配置计算环境和依赖',
          status: 'pending'
        },
        {
          id: 'data',
          title: '数据准备',
          description: '处理输入数据格式',
          status: 'pending'
        },
        {
          id: 'compute',
          title: '计算执行',
          description: '运行计算任务',
          status: 'pending'
        },
        {
          id: 'analyze',
          title: '结果分析',
          description: '分析计算结果',
          status: 'pending'
        }
      ]
    };

    console.log('Storing computation info:', computationInfo);
    localStorage.setItem('computation_info', JSON.stringify(computationInfo));

    // Navigate to computing editor
    const navigationState = {
      computationId: Date.now().toString(),
      isNewComputation: true,
      tool: selectedTool,
      field: selectedField
    };
    console.log('Navigating to editor with state:', navigationState);

    try {
      navigate('/tools/coding/computing/editor', {
        state: navigationState,
        replace: true
      });
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">科研计算助手</h1>
            <p className="text-gray-500 mt-1">智能辅助科研计算与分析</p>
          </div>
        </div>

        <div className="space-y-8">
          <ComputingDescription
            value={description}
            onChange={setDescription}
          />

          <ToolSelector
            tools={scientificTools}
            selectedTool={selectedTool}
            onSelect={setSelectedTool}
          />

          {selectedTool && (
            <FieldSelector
              tools={scientificTools}
              selectedTool={selectedTool}
              selectedField={selectedField}
              onSelect={setSelectedField}
            />
          )}

          <div className="flex justify-end">
            <button
              onClick={handleStartComputing}
              disabled={!description.trim() || !selectedTool}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg text-white
                transition-all duration-200
                ${description.trim() && selectedTool
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-300 cursor-not-allowed'}
              `}
            >
              开始计算
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}