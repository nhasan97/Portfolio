import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blogs.services';
import AppError from '../../errors/AppError';
import { TImageFile } from '../../interfaces/image.interface';
/*


Controller funtion for getting all blogs from DB*/
const getAllBlogs = catchAsync(async (req, res) => {
  const blogs = await BlogServices.getAllBlogsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blogs retrieved successfully',
    data: blogs,
  });
});
/*
  
  
  Controller funtion for a single blog from DB*/
const getSingleBlog = catchAsync(async (req, res) => {
  const blogId = req.params.id;
  const blog = await BlogServices.getSingleBlogFromDB(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog retrieved successfully',
    data: blog,
  });
});
/*
  
  
  Controller funtion for counting blogs*/
const getBlogCount = catchAsync(async (req, res) => {
  const response = await BlogServices.getBlogCountFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blogs counted successfully',
    data: response,
  });
});
/*
  
  
  Controller funtion for creating blogs in DB*/
const createBlog = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(400, 'Please upload an image');
  }

  const result = await BlogServices.createBlogIntoDB(
    req.body,
    req.file as TImageFile
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog created successfully',
    data: result,
  });
});
/*
  
  
  Controller funtion for updating blogs in DB*/
const updateBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.updateBlogInDB(
    req.params.id,
    req.body,
    req.file as TImageFile
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});
/*
  
  
  Controller funtion for deleting blogs from DB*/
const deleteBlog = catchAsync(async (req, res) => {
  const blogId = req.params.id;
  await BlogServices.deleteBlogFromDB(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog deleted successfully',
    data: null,
  });
});

export const BlogControllers = {
  getAllBlogs,
  getSingleBlog,
  getBlogCount,
  createBlog,
  updateBlog,
  deleteBlog,
};
