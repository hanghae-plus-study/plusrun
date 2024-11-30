export type CategoryType = "QUESTION" | "INFO";
export interface Post {
  author_id: string;
  category: CategoryType;
  content: string;
  created_at: string;
  id: string;
  title: string;
  updated_at: string | null;
  member: {
    user_name: string;
  };
}
export type Posts = Post[] | null;
