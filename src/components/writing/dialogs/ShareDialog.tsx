import React, { useState } from 'react';
import { X, Users, Link, Mail, Copy, Check } from 'lucide-react';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function ShareDialog({ isOpen, onClose, title }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [permission, setPermission] = useState<'view' | 'edit'>('view');

  const shareLink = 'https://example.com/share/123'; // 实际应该从后端获取

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium">分享文档</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              文档标题
            </label>
            <p className="text-gray-900">{title}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              通过链接分享
            </label>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                <Link size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600 truncate">{shareLink}</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>复制</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              邀请成员
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入邮箱地址"
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={permission}
                onChange={(e) => setPermission(e.target.value as 'view' | 'edit')}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="view">只读</option>
                <option value="edit">可编辑</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users size={16} />
            <span>已与3人共享</span>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            取消
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            分享
          </button>
        </div>
      </div>
    </div>
  );
}