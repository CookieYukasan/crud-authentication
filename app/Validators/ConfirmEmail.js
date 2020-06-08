"use strict";

class ConfirmEmail {
  get rules() {
    return {
      token: "required|exists:tokens,token",
    };
  }

  get messages() {
    return {
      "token.required": "You must provide a token.",
      "token.exists": "You must provide a valid token.",
    };
  }
}

module.exports = ConfirmEmail;
