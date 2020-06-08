"use strict";

const Antl = use("Antl");
Antl.currentLocale();

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
      "name.required": Antl.formatMessage("validators.required", {
        field: "name",
      }),
      "name.string": Antl.formatMessage("validators.string"),
      "email.required": Antl.formatMessage("validators.required", {
        field: "email address",
      }),
      "email.email": Antl.formatMessage("validators.email"),
      "email.unique": Antl.formatMessage("validators.unique", {
        field: "email address",
      }),
      "password.required": Antl.formatMessage("validators.required", {
        field: "password",
      }),
    };
  }
}

module.exports = CreateUser;
