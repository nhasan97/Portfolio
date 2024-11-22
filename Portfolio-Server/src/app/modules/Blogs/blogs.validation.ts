import { z } from 'zod';

//---------------------Validation schemas for creating blog---------------------

const authorSocialLinksValidationSchema = z.object({
  email: z.string({
    required_error: 'Email is required',
  }),

  github: z.string({
    required_error: 'Github is required',
  }),
});

const authorValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),

  profileImage: z.string().optional(),

  bio: z.string({
    required_error: 'Bio is required',
  }),

  socialLinks: authorSocialLinksValidationSchema,
});

const blogReferenceValidationSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),

  url: z.string({
    required_error: 'Url is required',
  }),
});

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),

    thumbnail: z.string().optional(),

    author: authorValidationSchema,

    tags: z.string().array().optional(),

    content: z.string({
      required_error: 'Content is required',
    }),

    references: blogReferenceValidationSchema.array(),

    likes: z.number({
      required_error: 'Likes is required',
    }),

    isFeatured: z
      .boolean({
        required_error: 'Likes is required',
      })
      .default(false),
  }),
});

//---------------------Validation schema for updating blog---------------------

const authorSocialLinksValidationOptionalSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .optional(),

  github: z
    .string({
      required_error: 'Github is required',
    })
    .optional(),
});

const authorValidationOptionalSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .optional(),

  profileImage: z.string().optional(),

  bio: z
    .string({
      required_error: 'Bio is required',
    })
    .optional(),

  socialLinks: authorSocialLinksValidationOptionalSchema.optional(),
});

const blogReferenceValidationOptionalSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
    })
    .optional(),

  url: z
    .string({
      required_error: 'Url is required',
    })
    .optional(),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),

    thumbnail: z.string().optional(),

    author: authorValidationOptionalSchema.optional(),

    tags: z.string().array().optional(),

    content: z
      .string({
        required_error: 'Content is required',
      })
      .optional(),

    references: blogReferenceValidationOptionalSchema.array().optional(),

    likes: z
      .number({
        required_error: 'Likes is required',
      })
      .optional(),

    isFeatured: z
      .boolean({
        required_error: 'Likes is required',
      })
      .default(false)
      .optional(),
  }),
});

export const BlogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
