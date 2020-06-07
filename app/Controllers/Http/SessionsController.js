"use strict";

const User = use("App/Models/User");

class SessionsController {
  async create({ request }) {
    const { username, email, password } = request.only();

    const user = User.create({
      username,
      email,
      password,
    });

    return user.id;
  }
}

module.exports = SessionsController;
