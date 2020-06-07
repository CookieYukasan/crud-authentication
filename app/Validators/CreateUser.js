"use strict";

class CreateUser {
  get rules() {
    return {
      name: "required|string",
      email: "required|email|unique:users,email",
      password: "required",
    };
  }

  get messages() {
    return {
      "name.required": "You must provide a name.",
      "name.string": "Your name must contain only letters.",
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
      "email.unique": "This email is already registered.",
      "password.required": "You must provide a password",
    };
  }
}

module.exports = CreateUser;
