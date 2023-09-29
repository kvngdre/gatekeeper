export const messages = {
  common: {
    fn: {
      created: (resource) => `${resource} Created Successfully`,
      deleted: (resource) => `${resource} Deleted Successfully`,
      fetched: (resource) => `${resource} Fetched Successfully`,
      updated: (resource) => `${resource} Updated Successfully`,
    },
  },

  exceptions: {
    validation: "Validation Error Occurred",
    fn: {
      notFound: (resource) => `${resource} Not Found`,
    },
  },

  user: {
    CHECKED_IN: "User checked in successfully",
  },
};
