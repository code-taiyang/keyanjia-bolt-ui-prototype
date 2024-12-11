import React from 'react';
import { X, Users, Link, Mail } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  activityTitle: string;
}

export function ShareModal({ isOpen, onClose, activityTitle }: ShareModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium">分享研究活动</h3>
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
              活动名称
            </label>
            <p className="text-gray-900">{activityTitle}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Users className="text-blue-600" size={20} />
              <div className="text-left">
                <div className="font-medium">分享给团队成员</div>
                <div className="text-sm text-gray-500">选择要分享的团队成员</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Link className="text-green-600" size={20} />
              <div className="text-left">
                <div className="font-medium">创建分享链接</div>
                <div className="text-sm text-gray-500">生成可访问的链接</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Mail className="text-purple-600" size={20} />
              <div className="text-left">
                <div className="font-medium">通过邮件分享</div>
                <div className="text-sm text-gray-500">发送邮件邀请</div>
              </div>
            </button>
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