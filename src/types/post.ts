export interface Post {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  status: PostStatus;
  originalityScore: number;
  viewCost: number;
  commentCost: number;
  author?: User;
  comments?: Comment[];
}

export enum PostStatus {
  ACTIVE = 1,
  DELETED = 0,
  HIDDEN = 2
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  parentCommentId: string | null;
  content: string;
  timestamp: Date;
  level: number;
  status: CommentStatus;
  author?: User;
  children?: Comment[];
}

export enum CommentStatus {
  ACTIVE = 1,
  DELETED = 0,
  HIDDEN = 2
}