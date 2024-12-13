import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  selectedFile: string | null;
  onShowResults: () => void;
}

export function CodeEditor({ selectedFile, onShowResults }: CodeEditorProps) {
  const [code, setCode] = useState(`# Algorithm Implementation

class TransformerAttention:
    def __init__(self, d_model, num_heads):
        self.d_model = d_model
        self.num_heads = num_heads
        self.head_dim = d_model // num_heads
        
        # Initialize weights
        self.q_linear = nn.Linear(d_model, d_model)
        self.k_linear = nn.Linear(d_model, d_model)
        self.v_linear = nn.Linear(d_model, d_model)
        self.out = nn.Linear(d_model, d_model)
        
    def forward(self, query, key, value, mask=None):
        batch_size = query.size(0)
        
        # Linear transformations
        Q = self.q_linear(query)
        K = self.k_linear(key)
        V = self.v_linear(value)
        
        # Split into heads
        Q = Q.view(batch_size, -1, self.num_heads, self.head_dim)
        K = K.view(batch_size, -1, self.num_heads, self.head_dim)
        V = V.view(batch_size, -1, self.num_heads, self.head_dim)
        
        # Calculate attention scores
        scores = torch.matmul(Q, K.transpose(-2, -1))
        scores = scores / math.sqrt(self.head_dim)
        
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        
        # Apply softmax
        attn = F.softmax(scores, dim=-1)
        
        # Calculate output
        out = torch.matmul(attn, V)
        out = out.view(batch_size, -1, self.d_model)
        
        return self.out(out)`);

  const handleRun = () => {
    // Simulate running the code
    console.log('Running code...');
    setTimeout(() => {
      onShowResults();
    }, 1000);
  };

  if (!selectedFile) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-gray-500">
        选择文件以查看代码
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
        <div className="text-sm text-gray-600">
          {selectedFile}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRun}
            className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center"
          >
            <Play className="h-4 w-4 mr-1.5" />
            运行
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            readOnly: false,
            tabSize: 4,
            insertSpaces: true,
            wordWrap: 'on'
          }}
          loading={
            <div className="h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
            </div>
          }
          onMount={(editor, monaco) => {
            // Configure Monaco editor on mount
            monaco.editor.defineTheme('custom-theme', {
              base: 'vs',
              inherit: true,
              rules: [],
              colors: {
                'editor.background': '#ffffff',
              }
            });
            monaco.editor.setTheme('custom-theme');
          }}
        />
      </div>
    </div>
  );
}