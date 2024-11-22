import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { IDate } from "./date.type";

//declaring type for blog social links
export interface IBlogAuthorSocialLinks {
  email: string;
  github: string;
}

//declaring type for blog author
export interface IBlogAuthor {
  name: string;
  profileImage?: string;
  bio: string;
  socialLinks: IBlogAuthorSocialLinks;
}

//declaring type for blog references
export interface IBlogReference {
  title: string;
  url: string;
}

//declaring type for blog
export interface IBlog {
  _id?: string;
  title: string;
  thumbnail?: string;
  author: IBlogAuthor;
  tags: string[];
  content: string;
  references: IBlogReference[];
  likes: number;
  isFeatured: boolean;
  createdAt?: IDate;
  isDeleted?: boolean;
}

//declaring type for blog context
export interface IBlogContext {
  loadingBlogCount: boolean;
  blogCount: number;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  loadingBlogs: boolean;
  blogData: IBlog[];
  refetchAllBlogs: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
  resetBrowser: () => void;
  resetPagination: () => void;
}
