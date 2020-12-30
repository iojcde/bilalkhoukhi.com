export interface Post {
  title: string;
  date: Date;
  slug: string;
  excerpt: string;
  author: string;
  coverImage: string;
  thumbnail: string;
  draft: boolean;
}