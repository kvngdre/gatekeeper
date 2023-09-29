import Joi from "joi";

import { objectIdSchema } from "./common-schemas.js";

export const idValidator = Joi.object({
  params: Joi.object({
    id: objectIdSchema.required(),
  }),
});
