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
    this.accessCode = accessCode;
    this.isCheckedIn = isCheckedIn;
    this.checkInTime = checkInTime;
    this.registeredAt = registeredAt;
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
    isCheckedIn,
    checkInTime,
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
      isCheckedIn,
      checkInTime,
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
