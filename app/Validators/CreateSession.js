"use strict";

const Antl = use("Antl");
Antl.currentLocale();

class CreateSession {
  get rules() {
    return {
      email: "required|string|email|exists:users,email",
    };
  }

  get messages() {
    return {
      "email.required": Antl.formatMessage("validators.required", {
        field: "email address",
      }),
      "email.email": Antl.formatMessage("validators.email"),
      "email.exists": Antl.formatMessage("validators.exists", {
        field: "email address",
      }),
    };
  }

  get data() {
    const requestBody = this.ctx.request.all();
    const authentication = this.ctx.request
      .header("authorization")
      .split(" ")[1];

    const [email] = Buffer.from(authentication, "base64").toString().split(":");

    return Object.assign({}, requestBody, { email });
  }
}

module.exports = CreateSession;
