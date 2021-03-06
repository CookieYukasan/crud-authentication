"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.get("/", "SessionsController.store").validator("CreateSession");
}).prefix("sessions");

Route.group(() => {
  Route.get("/", "UserController.index");
  Route.post("/", "UserController.store").validator("CreateUser");
}).prefix("users");

Route.group(() => {
  Route.post("/", "ConfirmEmailController.update").validator("ConfirmEmail");
}).prefix("confirm-email");
