import React, { useState } from 'react';
import { ArrowLeft, Save, Clock, Download, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WritingEditor } from '../components/writing/editor/WritingEditor';
import { WritingDialog } from '../components/writing/dialog/WritingDialog';
import { Badge } from '../components/common/Badge';

export function WritingPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [title, setTitle] = useState('论境外同居关系与的法律效力');

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-4">
          <Link to="/tools/writing" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-medium bg-transparent border-none focus:outline-none focus:ring-0 w-[400px]"
            />
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="success">已保存</Badge>
              <span className="text-sm text-gray-500">1字</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowDialog(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Settings size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Download size={20} className="text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Save size={16} />
            <span>保存</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <WritingEditor templateId="thesis" />

      {/* AI Dialog */}
      <WritingDialog 
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        templateId="thesis"
      />
    </div>
  );
}