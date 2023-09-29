export class UserResponseDto {
  constructor({
    id,
    name,
    gender,
    maritalStatus,
    phone,
    email,
    accessCode,
    registeredAt,
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
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from({
    id,
    name,
    gender,
    maritalStatus,
    phone,
    email,
    accessCode,
    registeredAt,
    createdAt,
    updatedAt,
  }) {
    return new UserResponseDto({
      id,
      name,
      gender,
      maritalStatus,
      phone,
      email,
      accessCode,
      registeredAt,
      createdAt,
      updatedAt,
    });
  }

  /**
   *
   * @param {Array} users
   */
  static fromMany(users) {
    return users.map((user) => UserResponseDto.from(user));
  }
}
