"use strict";

const User = use("App/Models/User");
const Mail = use("Mail");
const Env = use("Env");
const Encryption = use("Encryption");

class UserController {
  async index() {
    const user = await User.all();

    return user;
  }

  async create({ request, response }) {
    const data = request.only(["name", "email", "password"]);
    const user = await User.create(data);

    const { token } = await user.tokens().create({
      user_id: user.id,
      token: Encryption.encrypt(user.email),
      type: "confirmemail",
    });

    await Mail.send(
      "emails.confirm-email",
      {
        name: data["name"],
        url_token: `${Env.get("APP_URL")}/confirm/${token}`,
      },
      (message) => {
        message
          .to(data["email"])
          .from("no-reply@cookieyukasan.com.br", "Cookie Yukasan")
          .subject("Confirme seu email");
      }
    );

    return response.status(201).json(user);
  }
}

module.exports = UserController;
