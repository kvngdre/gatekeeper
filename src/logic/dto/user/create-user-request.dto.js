export class CreateUserDto {
  constructor({
    name,
    gender,
    maritalStatus,
    phone,
    email,
    registeredAt,
    accessCode,
    isCheckedIn,
  }) {
    this.name = name;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.phone = phone;
    this.email = email;
    this.registeredAt = registeredAt;
    this.accessCode = accessCode;
    this.isCheckedIn = isCheckedIn;
  }

  static from({
    name,
    gender,
    maritalStatus,
    phone,
    email,
    registeredAt,
    accessCode,
    isCheckedIn,
  }) {
    return new CreateUserDto({
      name,
      gender,
      maritalStatus,
      phone,
      email,
      registeredAt,
      accessCode,
      isCheckedIn,
    });
  }
}
