import { model, Schema } from 'mongoose';
import {
  BlogModel,
  TBlog,
  TBlogAuthor,
  TBlogAuthorSocialLinks,
  TBlogReference,
} from './blogs.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

//creating mongoose schema as the first layer of validation for social links data
const blogAuthorSocialLinksSchema = new Schema<TBlogAuthorSocialLinks>({
  email: {
    type: String,
    required: true,
  },

  github: {
    type: String,
    required: true,
  },
});

//creating mongoose schema as the first layer of validation for author data
const blogAuthorSchema = new Schema<TBlogAuthor>({
  name: {
    type: String,
    required: true,
  },

  profileImage: {
    type: String,
    // required: true,
  },

  bio: {
    type: String,
    required: true,
  },

  socialLinks: {
    type: blogAuthorSocialLinksSchema,
    required: true,
  },
});

//creating mongoose schema as the first layer of validation for blog reference data
const blogReferenceSchema = new Schema<TBlogReference>({
  title: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
});

//creating mongoose schema as the first layer of validation for blog data
const blogSchema = new Schema<TBlog, BlogModel>(
  {
    title: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      //   required: true,
    },

    author: {
      type: blogAuthorSchema,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    content: {
      type: String,
      required: true,
    },

    references: {
      type: [blogReferenceSchema],
      default: [],
    },

    likes: {
      type: Number,
      required: true,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

//using document middleware for checking if the document already exists or not
blogSchema.pre('save', async function (next) {
  const doesExist = await Blog.findOne({
    title: this.title,
    thumbnail: this.thumbnail,
    author: this.author,
    tags: this.tags,
    content: this.content,
    references: this.references,
    likes: this.likes,
    isFeatured: this.isFeatured,
  });
  if (doesExist) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Blog already exists');
  }
  next();
});

//checking if the blog exists or not using static method
blogSchema.statics.doesBlogExist = async function (blogId: string) {
  return await Blog.findOne({
    _id: blogId,
    isDeleted: { $ne: true },
  });
};

export const Blog = model<TBlog, BlogModel>('Blog', blogSchema);
