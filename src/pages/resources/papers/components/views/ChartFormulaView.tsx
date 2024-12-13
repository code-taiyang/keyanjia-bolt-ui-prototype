import React, { useState } from 'react';
import { Grid, Image, Table, Calculator, Code } from 'lucide-react';
import { ChartFormulaCard } from './ChartFormulaCard';
import { ChartFormulaFilter } from './ChartFormulaFilter';
import { generateChartFormulaData } from '../../utils/mockData';
import { ChartFormulaItem, ChartFormulaType } from '../../types';

interface ChartFormulaViewProps {
  searchQuery: string;
}

export function ChartFormulaView({ searchQuery }: ChartFormulaViewProps) {
  const [selectedType, setSelectedType] = useState<ChartFormulaType | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filters = [
    { id: 'all', label: '全部', icon: <Grid size={16} /> },
    { id: 'image', label: '图片', icon: <Image size={16} /> },
    { id: 'table', label: '表格', icon: <Table size={16} /> },
    { id: 'formula', label: '公式', icon: <Calculator size={16} /> },
    { id: 'code', label: '代码', icon: <Code size={16} /> }
  ];

  const items = generateChartFormulaData();
  
  const filteredItems = items.filter(item => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <ChartFormulaFilter
        filters={filters}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <ChartFormulaCard key={item.id} item={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-3 bg-white border-t">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">
              显示 {(currentPage - 1) * itemsPerPage + 1} 到{' '}
              {Math.min(currentPage * itemsPerPage, filteredItems.length)} 条，
              共 {filteredItems.length} 条
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              上一页
            </button>
            <button
              className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              下一页
            </button>
          </div>
        </div>
      )}
    </div>
  );
}