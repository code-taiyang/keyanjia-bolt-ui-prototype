import React from 'react';
import Editor from "@monaco-editor/react";
import { MonacoEditorProps } from './types';

const defaultConfig = {
  fontSize: 14,
  tabSize: 4,
  minimap: false,
  wordWrap: 'on' as const,
  lineNumbers: 'on' as const,
};

export function MonacoEditor({ 
  code, 
  language = 'python',
  onChange,
  config = {}
}: MonacoEditorProps) {
  const editorConfig = { ...defaultConfig, ...config };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editor.updateOptions({
      minimap: { enabled: editorConfig.minimap },
      fontSize: editorConfig.fontSize,
      lineNumbers: editorConfig.lineNumbers,
      roundedSelection: false,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: editorConfig.tabSize,
      wordWrap: editorConfig.wordWrap,
    });

    monaco.editor.defineTheme('custom-theme', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#ffffff',
      }
    });
    monaco.editor.setTheme('custom-theme');
  };

  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        theme="vs-light"
        loading={
          <div className="h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
          </div>
        }
        onMount={handleEditorDidMount}
        onChange={(value) => onChange(value || '')}
        options={{
          readOnly: false,
          renderWhitespace: 'selection',
          rulers: [80, 100],
          suggest: {
            showKeywords: true,
            showSnippets: true
          }
        }}
      />
    </div>
  );
}