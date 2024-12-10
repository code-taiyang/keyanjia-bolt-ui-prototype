import { 
  GraduationCap, 
  BookOpen, 
  Shield, 
  FileText, 
  Book, 
  TestTube2,
  Wand2,
  LayoutTemplate,
  Quote,
  Check,
  Languages,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  'shield': Shield,
  'file-text': FileText,
  'book': Book,
  'test-tube': TestTube2,
  'wand': Wand2,
  'layout': LayoutTemplate,
  'quote': Quote,
  'check': Check,
  'languages': Languages
};

export function getWritingTypeIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || FileText;
}