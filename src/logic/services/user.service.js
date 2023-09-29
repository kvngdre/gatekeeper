import _ from "lodash";

import { UserEntity } from "../../data/entities/user.entity.js";
import {
  UserRepository,
  userRepository,
} from "../../data/repositories/user.repository.js";
import { NotFoundException } from "../../utils/exceptions/index.js";
import { messages } from "../../utils/index.js";
import { UserResponseDto } from "../dto/user/index.js";

export class UserService {
  /** @type {UserRepository} */
  #userRepository;

  constructor(userRepo) {
    this.#userRepository = userRepo;
  }

  async all() {
    const users = await this.#userRepository.find();
    if (users.length === 0) {
      throw new NotFoundException(messages.exceptions.fn.notFound("Users"));
    }

    return {
      message: messages.common.fn.fetched("Users"),
      data: UserResponseDto.fromMany(users),
    };
  }

  async create(createUserDto) {
    const userEntity = UserEntity.make(createUserDto);
    const user = await this.#userRepository.insert(userEntity);

    return {
      message: messages.common.fn.created("User"),
      data: UserResponseDto.from(user),
    };
  }

  async get(id) {
    const user = await this.#userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(messages.exceptions.fn.notFound("User"));
    }

    return {
      message: messages.common.fn.fetched("User"),
      data: UserResponseDto.from(user),
    };
  }

  async update(id, updateUserDto) {
    const user = await this.#userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(messages.exceptions.fn.notFound("User"));
    }

    const userEntity = UserEntity.make({
      ...user._doc,
      ..._.omitBy(updateUserDto, _.isUndefined),
    });

    const updatedUser = await this.#userRepository.updateById(id, userEntity);

    return {
      message: messages.common.fn.updated("User"),
      data: UserResponseDto.from(updatedUser),
    };
  }

  async delete(id) {
    await this.#userRepository.deleteById(id);

    return {
      message: messages.common.fn.deleted("User"),
    };
  }

  async checkIn(id) {
    const user = await this.#userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(messages.exceptions.fn.notFound("User"));
    }

    const userEntity = UserEntity.make({
      ...user._doc,
      isCheckedIn: true,
      checkInTime: new Date(),
    });

    console.log(userEntity);

    const updatedUser = await this.#userRepository.updateById(id, userEntity);

    return {
      message: messages.user.CHECKED_IN,
      data: UserResponseDto.from(updatedUser),
    };
  }

  async getByAccessCode(accessCode) {
    const user = await this.#userRepository.findOne({ accessCode });
    if (!user) {
      throw new NotFoundException(messages.exceptions.fn.notFound("User"));
    }

    return {
      message: messages.common.fn.fetched("User"),
      data: UserResponseDto.from(user),
    };
  }
}

export const userService = new UserService(userRepository);
