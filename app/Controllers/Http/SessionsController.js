"use strict";

const User = use("App/Models/User");

class SessionsController {
  async store({ request, auth }) {
    const authHash = request.header("authorization").split(" ")[1];
    const credentials = Buffer.from(authHash, "base64").toString().split(":");
    const token = await auth.attempt(credentials[0], credentials[1]);

    return token;
  }
}

module.exports = SessionsController;
