import request from "supertest";
import { app } from "../../app";

it("fails when email that does not exist in supplied", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(400);
});

it("fails when incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "vidu@gmail.com",
      password: "123",
    })
    .expect(400);
});

it("respond with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
