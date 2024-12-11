export interface EditorConfig {
  fontSize: number;
  tabSize: number;
  minimap: boolean;
  wordWrap: 'on' | 'off';
  lineNumbers: 'on' | 'off';
}

export interface MonacoEditorProps {
  code: string;
  language?: string;
  onChange: (value: string) => void;
  config?: Partial<EditorConfig>;
}