export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  imageUrl: string;
  category: 'blog' | '2d-art' | '3d-art';
  createdAt: Date;
  updatedAt: Date;
}