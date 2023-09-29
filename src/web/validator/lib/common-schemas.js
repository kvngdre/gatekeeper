import Joi from "joi";

import { GENDER, MARITAL_STATUS } from "../../../utils/helpers/index.js";

export const accessCodeSchema = Joi.string()
  .alphanum()
  .uppercase()
  .trim()
  .length(6)
  .label("Access Code");

export const emailSchema = Joi.string()
  .email()
  .trim()
  .lowercase()
  .label("Email")
  .messages({
    "string.email": "Invalid email",
  });

export const genderSchema = Joi.string()
  .lowercase()
  .trim()
  .label("Gender")
  .valid(...GENDER);

export const objectIdSchema = Joi.alternatives(
  Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .messages({ "string.pattern.base": "Invalid ID" }),
  Joi.object().keys({
    id: Joi.any(),
    bsontype: Joi.allow("ObjectId"),
  }),
);

export const maritalStatusSchema = Joi.string()
  .lowercase()
  .trim()
  .label("Marital Status")
  .valid(...MARITAL_STATUS);

export const nameSchema = Joi.string()
  .label("Name")
  .lowercase()
  .min(1)
  .max(255)
  .trim()
  .pattern(/^[a-zA-Z ]+$/)
  .messages({
    "string.min": "{#label} is invalid",
    "string.pattern.base": "{#label} is invalid",
  });

export const phoneNumberSchema = Joi.string()
  .label("Phone number")
  .trim()
  .min(11)
  .max(15)
  .pattern(/^(\+?234|0)[789]\d{9}$/)
  .messages({
    "string.pattern.base": "{#label} is invalid",
  });

export const dateSchema = Joi.date();
