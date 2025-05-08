import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(201);
});

it("return a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "vidugmail.com",
      password: "1234",
    })
    .expect(400);
});

it("return a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "123",
    })
    .expect(400);
});

it("return a 400 with missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "vidu@gmail.com" })
    .expect(400);

  return request(app)
    .post("/api/users/signup")
    .send({ password: "1234" })
    .expect(400);
});

it("disallows duplicate email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(201);

  return request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(400);
});

it("sets a cookie after successsful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
