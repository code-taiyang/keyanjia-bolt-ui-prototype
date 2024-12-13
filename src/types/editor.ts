export interface EditorState {
  content: string;
  outline: string[];
  selectedSection: string | null;
  isModified: boolean;
  lastSaved: string | null;
}

export interface EditorProps {
  id: string;
  type: 'experiment' | 'fund' | 'planning';
  initialContent?: string;
  initialOutline?: string[];
}

export interface EditorHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
  isSaved: boolean;
  lastSaved: Date | null;
}

export interface EditorContentProps {
  content: string;
  onContentChange: (content: string) => void;
  selectedSection: string | null;
}

export interface EditorOutlineProps {
  items: string[];
  onUpdate: (items: string[]) => void;
  selectedSection: string | null;
  onSectionSelect: (section: string | null) => void;
}

export interface EditorReferenceProps {
  type: 'experiment' | 'fund' | 'planning';
  onSelect?: (reference: any) => void;
}