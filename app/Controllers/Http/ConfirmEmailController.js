"use strict";

const User = use("App/Models/User");
const Token = use("App/Models/Token");

class ConfirmEmailController {
  async update({ request, response }) {
    const { token } = request.all();
    const data = await Token.findBy("token", token);
    const user = await User.findOrFail(data.user_id);

    user.merge({ email_confirmated: true });

    await user.save();
    await data.delete();

    return response.json();
  }
}

module.exports = ConfirmEmailController;
