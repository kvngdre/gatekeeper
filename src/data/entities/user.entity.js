import {
  NotFoundException,
  ValidationException,
} from "../../utils/exceptions/index.js";
import { generateAccessCode, messages } from "../../utils/index.js";
import { Id } from "../lib/id.js";

export class UserEntity {
  constructor({
    id,
    name,
    gender,
    maritalStatus,
    phone,
    email,
    accessCode,
    registeredAt,
    isCheckedIn,
    checkInTime,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.phone = phone;
    this.email = email;
    this.registeredAt = registeredAt;
    this.accessCode = accessCode;
    this.isCheckedIn = isCheckedIn;
    this.checkInTime = checkInTime;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static #create({
    name,
    gender,
    maritalStatus,
    phone,
    email,
    registeredAt,
    isCheckedIn = false,
    checkInTime = null,
    accessCode = generateAccessCode(),
    id = Id.makeId(),
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    return new UserEntity({
      id,
      name,
      gender,
      maritalStatus,
      phone,
      email,
      accessCode,
      registeredAt,
      isCheckedIn,
      checkInTime,
      createdAt,
      updatedAt,
    });
  }

  static make({
    id,
    name,
    gender,
    maritalStatus,
    phone,
    email,
    accessCode,
    registeredAt,
    isCheckedIn,
    checkInTime,
    createdAt,
    updatedAt,
  }) {
    if (id && !Id.isValidId(id)) {
      throw new NotFoundException(messages.exceptions.validation, {
        id: "User must have a valid ID",
      });
    }

    if (!name) {
      throw new ValidationException(messages.exceptions.validation, {
        name: "User must have a name",
      });
    }

    if (!gender) {
      throw new ValidationException(messages.exceptions.validation, {
        gender: "User must have a gender",
      });
    }

    if (!maritalStatus) {
      throw new ValidationException(messages.exceptions.validation, {
        maritalStatus: "User must have a marital status",
      });
    }

    if (!phone) {
      throw new ValidationException(messages.exceptions.validation, {
        phone: "User must have a phone number",
      });
    }

    if (!email) {
      throw new ValidationException(messages.exceptions.validation, {
        email: "User must have an email address",
      });
    }

    return UserEntity.#create({
      id,
      name,
      gender,
      maritalStatus,
      phone,
      email,
      accessCode,
      registeredAt: new Date(registeredAt),
      isCheckedIn,
      checkInTime,
      createdAt,
      updatedAt,
    });
  }
}
