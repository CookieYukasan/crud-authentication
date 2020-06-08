"use strict";

const Antl = use("Antl");
Antl.currentLocale();

class ConfirmEmail {
  get rules() {
    return {
      token: "required|exists:tokens,token",
    };
  }

  get messages() {
    return {
      "token.required": Antl.formatMessage("validators.required", {
        field: "token",
      }),
      "token.exists": Antl.formatMessage("validators.exists", {
        field: "token",
      }),
    };
  }
}

module.exports = ConfirmEmail;
