import { Model } from 'mongoose';

//declaring type for blog social links
export type TBlogAuthorSocialLinks = {
  email: string;
  github: string;
};

//declaring type for blog author
export type TBlogAuthor = {
  name: string;
  profileImage?: string;
  bio: string;
  socialLinks: TBlogAuthorSocialLinks;
};

//declaring type for blog references
export type TBlogReference = {
  title: string;
  url: string;
};

//declaring type for blog
export type TBlog = {
  title: string;
  thumbnail?: string;
  author: TBlogAuthor;
  tags: string[];
  content: string;
  references: TBlogReference[];
  likes: number;
  isFeatured: boolean;
  isDeleted?: boolean;
  //   categories: ['Frontend Development', 'JavaScript Basics'];
  //   comments: [
  //     {
  //       commentId: 'cmt001';
  //       user: {
  //         name: 'John Smith';
  //         profileImage: 'https://example.com/images/john_smith.jpg';
  //       };
  //       comment: 'This is such a well-written explanation of closures. Thanks for sharing!';
  //       date: '2024-11-21';
  //     },
  //     {
  //       commentId: 'cmt002';
  //       user: {
  //         name: 'Emily Clark';
  //         profileImage: 'https://example.com/images/emily_clark.jpg';
  //       };
  //       comment: 'Great examples! I finally understand closures better now.';
  //       date: '2024-11-22';
  //     }
  //   ];
};

//declaring type for blog
export type TUpdateBlog = {
  title: string;
  thumbnail?: string;
  author: TBlogAuthor;
  tags: string[];
  content: string;
  references: TBlogReference[];
  likes: number;
  isFeatured: boolean;
};

//declaring type definition for doesBlogExist static function
export interface BlogModel extends Model<TBlog> {
  doesBlogExist(id: string): Promise<TBlog>;
}
