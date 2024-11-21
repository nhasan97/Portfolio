import { z } from 'zod';

//---------------------Validation schema for creating project---------------------

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),

    type: z.string({
      required_error: 'Type is required',
    }),

    // thumbnail: z.string({
    //   required_error: 'Thumbnail is required',
    // }),

    description: z.string({
      required_error: 'Description is required',
    }),

    features: z
      .string({
        required_error: 'Features is required',
      })
      .array(),

    technologies: z
      .string({
        required_error: 'Technologies is required',
      })
      .array(),

    duration: z.string({
      required_error: 'Duration is required',
    }),

    live_link: z.string({
      required_error: 'Duration is required',
    }),

    client_link: z.string({
      required_error: 'Duration is required',
    }),

    server_link: z.string({
      required_error: 'Duration is required',
    }),
  }),
});

//---------------------Validation schema for updating project---------------------

const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),

    type: z
      .string({
        required_error: 'Type is required',
      })
      .optional(),

    // thumbnail: z
    //   .string({
    //     required_error: 'Thumbnail is required',
    //   })
    //   .optional(),

    description: z
      .string({
        required_error: 'Description is required',
      })
      .optional(),

    features: z
      .string({
        required_error: 'Features is required',
      })
      .array()
      .optional(),

    technologies: z
      .string({
        required_error: 'Technologies is required',
      })
      .array()
      .optional(),

    duration: z
      .string({
        required_error: 'Duration is required',
      })
      .optional(),

    live_link: z
      .string({
        required_error: 'Duration is required',
      })
      .optional(),

    client_link: z
      .string({
        required_error: 'Duration is required',
      })
      .optional(),

    server_link: z
      .string({
        required_error: 'Duration is required',
      })
      .optional(),
  }),
});

export const ProjectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
