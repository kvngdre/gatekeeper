export class UpdateUserDto {
  constructor({
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
    return new UpdateUserDto({
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
}
