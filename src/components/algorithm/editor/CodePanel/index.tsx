import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { EditorToolbar } from './EditorToolbar';
import { MonacoEditor } from './MonacoEditor';

interface CodePanelProps {
  selectedFile: string | null;
  onShowResults: () => void;
}

export function CodePanel({ selectedFile, onShowResults }: CodePanelProps) {
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
    console.log('Running code...');
    onShowResults();
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
      <EditorToolbar
        fileName={selectedFile}
        onRun={handleRun}
      />
      <div className="flex-1 overflow-hidden">
        <MonacoEditor
          code={code}
          onChange={setCode}
          config={{
            fontSize: 14,
            tabSize: 4,
            minimap: false,
            wordWrap: 'on',
            lineNumbers: 'on'
          }}
        />
      </div>
    </div>
  );
}