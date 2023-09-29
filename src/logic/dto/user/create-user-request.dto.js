export class CreateUserDto {
  constructor({
    name,
    gender,
    maritalStatus,
    phone,
    email,
    registeredAt,
    accessCode,
  }) {
    this.name = name;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.phone = phone;
    this.email = email;
    this.registeredAt = registeredAt;
    this.accessCode = accessCode;
  }

  static from({
    name,
    gender,
    maritalStatus,
    phone,
    email,
    registeredAt,
    accessCode,
  }) {
    return new CreateUserDto({
      name,
      gender,
      maritalStatus,
      phone,
      email,
      registeredAt,
      accessCode,
    });
  }
}
