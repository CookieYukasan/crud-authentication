"use strict";

const User = use("App/Models/User");
const Mail = use("Mail");

class UserController {
  async index() {
    const user = await User.all();

    return user;
  }

  async create({ request, response }) {
    const data = request.only(["name", "email", "password"]);
    const user = await User.create(data);

    await Mail.send("emails.confirm-email", {}, (message) => {
      message
        .to(data["email"])
        .from("no-reply@auratech.com.br", "Aura Bot")
        .subject("Confirme seu email");
    });

    return response.status(201).json(user);
  }
}

module.exports = UserController;
