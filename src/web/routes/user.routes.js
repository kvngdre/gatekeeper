import { Router } from "express";

import { userController } from "../controller/index.js";
import { ValidateRequest } from "../middleware/index.js";
import { idValidator } from "../validator/lib/common-validators.js";
import {
  createUserValidator,
  getByAccessCodeValidator,
  updateUserValidator,
} from "../validator/user.validator.js";

const userRouter = Router();

userRouter.post(
  "/",
  ValidateRequest.with(createUserValidator),
  userController.create,
);

userRouter.get("/", userController.index);

userRouter.get("/:id", ValidateRequest.with(idValidator), userController.show);

userRouter.get(
  "/codes/:code",
  ValidateRequest.with(getByAccessCodeValidator),
  userController.getByAccessCode,
);

userRouter.patch(
  "/:id",
  ValidateRequest.with(updateUserValidator),
  userController.edit,
);

userRouter.patch(
  "/:id/check-in",
  ValidateRequest.with(idValidator),
  userController.checkIn,
);

userRouter.delete(
  "/:id",
  ValidateRequest.with(idValidator),
  userController.destroy,
);

export default userRouter;
