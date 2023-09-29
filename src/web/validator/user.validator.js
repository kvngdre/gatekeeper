import Joi from "joi";

import {
  accessCodeSchema,
  dateSchema,
  emailSchema,
  genderSchema,
  maritalStatusSchema,
  nameSchema,
  objectIdSchema,
  phoneNumberSchema,
} from "./lib/common-schemas.js";

export const createUserValidator = Joi.object({
  body: Joi.object({
    name: nameSchema.required(),
    gender: genderSchema.required(),
    maritalStatus: maritalStatusSchema.required(),
    phone: phoneNumberSchema.required(),
    email: emailSchema.required(),
    registeredAt: dateSchema.label("Registration date").required(),
    accessCode: accessCodeSchema,
    isCheckedIn: Joi.boolean().label("Is checked in").default(false),
  }),
});

export const updateUserValidator = Joi.object({
  body: Joi.object({
    name: nameSchema,
    gender: genderSchema,
    maritalStatus: maritalStatusSchema,
    phone: phoneNumberSchema,
    email: emailSchema,
    registeredAt: dateSchema.label("Registration date"),
    accessCode: accessCodeSchema,
    isCheckedIn: Joi.boolean().label("Is checked in"),
  }),
  params: Joi.object({
    id: objectIdSchema.label("User ID").required(),
  }),
});

export const getByAccessCodeValidator = Joi.object({
  params: Joi.object({
    code: accessCodeSchema.required(),
  }),
});
