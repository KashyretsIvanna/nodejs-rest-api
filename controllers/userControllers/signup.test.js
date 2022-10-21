const signup = require("./signup");
const request = require("supertest");
const { describe, test, expect } = require("@jest/globals");
const app = require("../../app");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

//Відповідь повинна мати статус 200
//В відповіді повинен повертатись токен
//В відповіді повинен повертатись обєкт з довма полями email and subscription з тиром стрінг

describe("controllers", () => {
  beforeAll(() => {
    const PORT = process.env.PORT || 3000;
    mongoose.Promise = global.Promise;
    const connection = mongoose.connect(process.env.DB_CONNECT);
  });

  afterAll(() => {});

  it("responds with json", async function () {
    const object = {
      name: "Ivanna",
      email: "Kffah@yjj",
      password: "programingTests",
    };

    const response = await request(app)
      .post("/users/signup")
      .send(object)
      .set("Accept", "application/json");
    expect(response.status).toEqual(201);
    expect(response.body.user.email).toEqual("Kffah@yjj");
    expect(response.body.user.subscription).toEqual("starter");
    expect(response.body.token).toBeDefined();

    // expect(
    //   201,
    //   {
    //     token: expect,
    //     user: { email: "Kah@yjj", subscription: "starter" },
    //   },
    //   done
    // );
  });
});
