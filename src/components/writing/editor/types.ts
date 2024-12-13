export interface OutlineItem {
  id: string;
  title: string;
  level: number;
  children?: OutlineItem[];
}