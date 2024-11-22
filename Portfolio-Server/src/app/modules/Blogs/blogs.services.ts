import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Blog } from './blogs.model';
import { TBlog, TUpdateBlog } from './blogs.interface';
import { TImageFile } from '../../interfaces/image.interface';
/*


Service funtion for getting all blogs from DB*/
const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const queryObject = { ...query };

  const searchableFields = ['title', 'tags'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = Blog.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];

  excludeFields.forEach((el) => delete queryObject[el]);

  const getBlogQuery = {
    isDeleted: { $ne: true },
    ...queryObject,
  };

  const filterQuery = searchQuery.find(getBlogQuery);

  let sort = 'title';
  if (query?.sort) {
    sort = query?.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  let limit = 1;
  let page = 1;
  let skip = 0;
  if (query?.limit) {
    limit = Number(query?.limit);
  }
  if (query?.page) {
    page = Number(query?.page);
    skip = page * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = await paginateQuery.limit(limit);

  return limitQuery;
};
/*
  
  
  Service funtion for getting a single blog from DB*/
const getSingleBlogFromDB = async (blogId: string) => {
  const blog = await Blog.doesBlogExist(blogId);

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'This blog is not found!');
  }

  return blog;
};
/*
  
  
  Service funtion for counting blogs*/
const getBlogCountFromDB = async () => {
  const getBlogCountQuery = { isDeleted: { $ne: true } };

  const response = await Blog.countDocuments(getBlogCountQuery);

  return response;
};
/*
  
  
  Service funtion for creating blogs in DB*/
const createBlogIntoDB = async (payload: TBlog, passedImage: TImageFile) => {
  if (passedImage) {
    payload.thumbnail = passedImage.path;
  } else {
    delete payload.thumbnail;
  }

  const result = await Blog.create(payload);

  return result;
};
/*
  
  
  Service funtion for updating blogs in DB*/
const updateBlogInDB = async (
  blogId: string,
  data: TUpdateBlog,
  passedImage: TImageFile
) => {
  const blog = await Blog.doesBlogExist(blogId);

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }

  if (passedImage) {
    data.thumbnail = passedImage.path;
  } else {
    delete data.thumbnail;
  }

  return await Blog.findOneAndUpdate(
    {
      _id: blogId,
      isDeleted: { $ne: true },
    },
    data,
    { new: true }
  );
};
/*
  
  
  Service funtion for deleting blogs from DB*/
const deleteBlogFromDB = async (blogId: string) => {
  const blog = await Blog.doesBlogExist(blogId);

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }

  const response = await Blog.findByIdAndUpdate(
    blogId,
    { isDeleted: true },
    { new: true }
  );

  return response;
};

export const BlogServices = {
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  getBlogCountFromDB,
  createBlogIntoDB,
  updateBlogInDB,
  deleteBlogFromDB,
};
