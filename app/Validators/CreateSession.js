"use strict";

class CreateSession {
  get rules() {
    return {
      email: "required|string|email|exists:users,email",
    };
  }

  get messages() {
    return {
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
      "email.exists": "You must provide a valid email address",
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
