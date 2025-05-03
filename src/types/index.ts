export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string[];
  description: string;
  year: number;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export interface Affirmation {
  id: number;
  text: string;
  author?: string;
}