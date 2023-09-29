import { UserEntity } from "../../data/entities/user.entity.js";
import {
  UserRepository,
  userRepository,
} from "../../data/repositories/user.repository.js";
import { NotFoundException } from "../../utils/exceptions/index.js";
import { messages } from "../../utils/index.js";
import { UserResponseDto } from "../dto/user/user-response.dto.js";

export class UserService {
  /** @type {UserRepository} */
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
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
    const userEntity = UserEntity.make(updateUserDto);
    const user = await this.#userRepository.updateById(id, userEntity);
    if (!user) {
      throw new NotFoundException(messages.exceptions.fn.notFound("User"));
    }

    return {
      message: messages.common.fn.updated("User"),
      data: UserResponseDto.from(user),
    };
  }

  async delete(id) {
    await this.#userRepository.deleteById(id);

    return {
      message: messages.common.fn.deleted("User"),
    };
  }
}

export const userService = new UserService(userRepository);
