// types/articleTypes.tsx
export type Article = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  published_at: string;
};

export type Props = {
  articles: Article[];
};
